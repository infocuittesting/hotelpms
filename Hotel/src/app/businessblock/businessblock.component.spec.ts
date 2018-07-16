import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessblockComponent } from './businessblock.component';

describe('BusinessblockComponent', () => {
  let component: BusinessblockComponent;
  let fixture: ComponentFixture<BusinessblockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessblockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
