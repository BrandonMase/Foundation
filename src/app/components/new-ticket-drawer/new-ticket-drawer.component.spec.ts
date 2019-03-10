import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTicketDrawerComponent } from './new-ticket-drawer.component';

describe('NewTicketDrawerComponent', () => {
  let component: NewTicketDrawerComponent;
  let fixture: ComponentFixture<NewTicketDrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTicketDrawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTicketDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
