"""
This sample demonstrates an implementation of the Lex Code Hook Interface
in order to serve a sample bot which manages reservations for hotel rooms and car rentals.
Bot, Intent, and Slot models which are compatible with this sample can be found in the Lex Console
as part of the 'BookTrip' template.

For instructions on how to set up and test this bot, as well as additional samples,
visit the Lex Getting Started documentation http://docs.aws.amazon.com/lex/latest/dg/getting-started.html.

"""
from __future__ import print_function


from botocore.vendored import requests

import json
import datetime
import time
import os
import dateutil.parser
import logging
import random


logger = logging.getLogger()
logger.setLevel(logging.DEBUG)


# --- Helpers that build all of the responses ---


def elicit_slot(session_attributes, intent_name, slots, slot_to_elicit, message):
    return {
        'sessionAttributes': session_attributes,
        'dialogAction': {
            'type': 'ElicitSlot',
            'intentName': intent_name,
            'slots': slots,
            'slotToElicit': slot_to_elicit,
            'message': message
        }
    }


def confirm_intent(session_attributes, intent_name, slots, message):
    return {
        'sessionAttributes': session_attributes,
        'dialogAction': {
            'type': 'ConfirmIntent',
            'intentName': intent_name,
            'slots': slots,
            'message': message
        }
    }


def close(session_attributes, fulfillment_state, message):
    print("message in response",session_attributes, fulfillment_state, message)
    response = {
        'sessionAttributes': session_attributes,
        'dialogAction': {
            'type': 'Close',
            'fulfillmentState': fulfillment_state,
            'message': message
        }
    }

    return response


def delegate(session_attributes, slots):
    return {
        'sessionAttributes': session_attributes,
        'dialogAction': {
            'type': 'Delegate',
            'slots': slots
        }
    }


# --- Helper Functions ---


def safe_int(n):
    """
    Safely convert n value to int.
    """
    if n is not None:
        return int(n)
    return n


def try_ex(func):
    """
    Call passed in function in try block. If KeyError is encountered return None.
    This function is intended to be used to safely access dictionary.

    Note that this function would have negative impact on performance.
    """

    try:
        return func()
    except KeyError:
        return None

def generate_confirmation_number(arrival, departure, adults, children, roomtype, countrycode, phonenumber, pickupdrop):
    """
    Generates a number within a reasonable range that might be expected for a hotel.
    The price is fixed for a pair of location and roomType.
    """
    car1 = {
       "arrival_date":arrival,
       "depature_date":departure,
       "Adult":adults,
       "child":children,
       "phone_number":phonenumber,
       "roomtype":roomtype
    }
        
       
    print("car1",car1)
    
    r = requests.post('https://ivrinfocuit.herokuapp.com/Insert_Ivr_Reservations', json=car1 )
    data=r.json()
    conf = data['Confirmation_Number']
    print("confirmat",conf)
    print("response is come",r.json())
            
    # confirmation_number = random.randint(1000,9999)
    return conf

def isvalid_room_type(room_type):
    room_types = ['standard', 'superior', 'deluxe']
    return room_type.lower() in room_types

def isvalid_date(date):
    try:
        dateutil.parser.parse(date)
        return True
    except ValueError:
        return False

def build_validation_result(isvalid, violated_slot, message_content):
    return {
        'isValid': isvalid,
        'violatedSlot': violated_slot,
        'message': {'contentType': 'PlainText', 'content': message_content}
    }


def validate_booking(slots):
    arrival = try_ex(lambda: slots['arrival_date'])
    departure = try_ex(lambda: slots['departure_date'])
    adults = safe_int(try_ex(lambda: slots['no_of_adult']))
    children = safe_int(try_ex(lambda: slots['no_of_child']))
    roomtype = try_ex(lambda: slots['type_of_room'])
    countrycode = safe_int(try_ex(lambda: slots['country_code']))
    phonenumber = safe_int(try_ex(lambda: slots['phone_numb']))

    if arrival:
        if not isvalid_date(arrival):
            return build_validation_result(False, 'arrival_date', 'I did not understand arrival date.  When would you like to check in?')
        if datetime.datetime.strptime(arrival, '%Y-%m-%d').date() <= datetime.date.today():
            return build_validation_result(False, 'arrival_date', 'Reservations must be scheduled at least one day in advance.  Can you try a different date?')
			
    if departure:
        if not isvalid_date(departure):
            return build_validation_result(False, 'departure_date', 'I did not understand your departure date.  When would you like to check out?')
        if datetime.datetime.strptime(departure, '%Y-%m-%d').date() < datetime.date.today() + datetime.timedelta(days=1):
            return build_validation_result(False, 'departure_date', 'Departure Date can not be same date or previous dates from Arrival Date.  Can you try a different date?')

    if adults is not None and (adults < 1 or adults > 10):
        return build_validation_result(
            False,
            'no_of_adult',
            'Sorry Adults cannot be more than 10 members.  How many Adults going to stay?'
        )

    if children is not None and (children < 1 or children > 10):
        return build_validation_result(
            False,
            'no_of_child',
            'Sorry Children cannot be more than 10 members.  How many Children going to stay?'
        )

    if roomtype and not isvalid_room_type(roomtype):
        return build_validation_result(False, 'type_of_room', 'I did not recognize that room type.  Would you like to stay in a standard, superior, or deluxe room?')
    
    if countrycode is not None and ( len(str(countrycode)) >3):
        return build_validation_result(
            False,
            'country_code',
            'Sorry the country code you provided is not valid.  please say different country code?'
        )
        
    if phonenumber is not None and ( len(str(phonenumber)) != 10):
        return build_validation_result(
            False,
            'phone_numb',
            'Sorry the phone number you provided is not valid.  please try saying it again?'
        )
        
		
    return {'isValid': True}


""" --- Functions that control the bot's behavior --- """


def book_reservation(intent_request):
    """
    Performs dialog management and fulfillment for booking a hotel.

    Beyond fulfillment, the implementation for this intent demonstrates the following:
    1) Use of elicitSlot in slot validation and re-prompting
    2) Use of sessionAttributes to pass information that can be used to guide conversation
    """

    arrival = try_ex(lambda: intent_request['currentIntent']['slots']['arrival_date'])
    departure = try_ex(lambda: intent_request['currentIntent']['slots']['departure_date'])
    adults = safe_int(try_ex(lambda: intent_request['currentIntent']['slots']['no_of_adult']))
    children = safe_int(try_ex(lambda: intent_request['currentIntent']['slots']['no_of_child']))
    roomtype = try_ex(lambda: intent_request['currentIntent']['slots']['type_of_room'])
    countrycode = safe_int(try_ex(lambda: intent_request['currentIntent']['slots']['country_code']))
    phonenumber = safe_int(try_ex(lambda: intent_request['currentIntent']['slots']['phone_numb']))
    pickupdrop = try_ex(lambda: intent_request['currentIntent']['slots']['pickup_drop'])
    session_attributes = intent_request['sessionAttributes'] if intent_request['sessionAttributes'] is not None else {}

    # Load confirmation history and track the current reservation.
    reservation = json.dumps({
        'ReservationType': 'Hotel',
        'Arrival': arrival,
        'Departure': departure,
        'Adults': adults,
		'Children':children,
		'RoomType':roomtype,
		'CountryCode':countrycode,
		'PhoneNumber':phonenumber,
		'PickUpDrop':pickupdrop
    })
    print("reservation",reservation)

    session_attributes['bookingDetails'] = reservation

    if intent_request['invocationSource'] == 'DialogCodeHook':
        # Validate any slots which have been specified.  If any are invalid, re-elicit for their value
        validation_result = validate_booking(intent_request['currentIntent']['slots'])
        if not validation_result['isValid']:
            slots = intent_request['currentIntent']['slots']
            slots[validation_result['violatedSlot']] = None

            return elicit_slot(
                session_attributes,
                intent_request['currentIntent']['name'],
                slots,
                validation_result['violatedSlot'],
                validation_result['message']
            )

        # Otherwise, let native DM rules determine how to elicit for slots and prompt for confirmation.  Pass price
        # back in sessionAttributes once it can be calculated; otherwise clear any setting from sessionAttributes.
        if arrival and departure and adults and children and roomtype and countrycode and phonenumber and pickupdrop:
            # The price of the hotel has yet to be confirmed.
            
            price = generate_confirmation_number(arrival, departure, adults, children, roomtype, countrycode, phonenumber, pickupdrop)
            session_attributes['currentReservationPrice'] = price
        else:
            try_ex(lambda: session_attributes.pop('currentReservationPrice'))

        session_attributes['currentReservation'] = reservation
        return delegate(session_attributes, intent_request['currentIntent']['slots'])

    # Booking the hotel.  In a real application, this would likely involve a call to a backend service.
    logger.debug('bookHotel under={}'.format(reservation))

    # try_ex(lambda: session_attributes.pop('currentReservationPrice'))
    try_ex(lambda: session_attributes.pop('currentReservation'))
    session_attributes['lastConfirmedReservation'] = reservation
    
   
   
   # print("car1111",car1)
    confirmation = session_attributes['currentReservationPrice']
    print("confirmation",confirmation)
    return ("test message after delegate")
    return close(
        session_attributes,
        'Fulfilled',
        {
            'contentType': 'PlainText',
            'content': "Great! your booking has been confirmed and your confirmation number is {confirmation}".format(confirmation)
                      
        }
    )

# --- Intents ---


def dispatch(intent_request):
    """
    Called when the user specifies an intent for this bot.
    """

    logger.debug('dispatch userId={}, intentName={}'.format(intent_request['userId'], intent_request['currentIntent']['name']))

    intent_name = intent_request['currentIntent']['name']

    # Dispatch to your bot's intent handlers
    if intent_name == 'bookreservation':
        return book_reservation(intent_request)

    raise Exception('Intent with name ' + intent_name + ' not supported')


# --- Main handler ---


def lambda_handler(event, context):
    """
    Route the incoming request based on intent.
    The JSON body of the request is provided in the event slot.
    """
    # By default, treat the user request as coming from the America/New_York time zone.
    os.environ['TZ'] = 'America/New_York'
    time.tzset()
    logger.debug('event.bot.name={}'.format(event['bot']['name']))

    return dispatch(event)
