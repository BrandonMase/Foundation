import { Component, OnInit, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Ticket } from 'src/app/models/ticket.model';

@Component({
  selector: 'new-ticket-drawer',
  templateUrl: './new-ticket-drawer.component.html',
  styleUrls: ['./new-ticket-drawer.component.css']
})
export class NewTicketDrawerComponent implements AfterViewInit {
  @Input() shouldAddNewTicket : boolean;
  @Input() properties         : [{ name: string, type: string }];
  @Input() ticket             : Ticket | null;
  @Output() addTicket         = new EventEmitter<any>();
  @Output() onClose           = new EventEmitter<boolean>();

  /** The new ticket form */
  public newTicketForm        = new FormGroup({});
  public doneInit             = false;

  ngAfterViewInit() {
    this.createNewTicketForm();
  }

    /**
   * Transitions the animation of the new ticket drawer.
   * @param start The starting position - `null or boolean`
   * @param end The ending position - `null or bollean`
   * @returns `void`
   */
  public startNewTicketDrawerAnimation(start: null | boolean, end: null | boolean, cb?: any):void {
    this.shouldAddNewTicket = start;
    setTimeout(() => {
      this.shouldAddNewTicket = end;
      // setTimeout(() => {
      //   if (cb) {
      //     cb;
      //   }
      // },500)
    }, 500)
  }

    /**
   * Removes the new ticket form and resets the form.
   * @returns `void` 
  */
  clearNewTicketForm():void {
    this.startNewTicketDrawerAnimation(false, null, this.onClose.emit(false));
    this.newTicketForm.reset();
  }

    /**
   * Inits a new ticket form or inits a form with ticket information
   * @param index The index of the ticket to populate the form with. - `number`
   * @returns `void`
   */
  public createNewTicketForm():void {
    this.shouldAddNewTicket = true;
    this.newTicketForm = new FormGroup({});
    console.log(this.properties)
    //* If the index is undefined, init a blank form.
    //* else init a form with the ticket information passed in from the index.
    if(!this.ticket) {
      for(let i = 0; i < this.properties.length; i++) {
        let newFormControl = new FormControl('')
        this.newTicketForm.addControl(this.properties[i].name, newFormControl);
      }
    }
    else {
      let ticket = this.ticket
      for(let i = 0; i < this.properties.length; i++) {
        let prop = this.properties[i].name;
        let newFormControl = new FormControl(ticket.attributes[prop])
        this.newTicketForm.addControl(prop, newFormControl);
      }
    }

    setTimeout(() => this.doneInit = true );
  }

  public addNewTicket() {
    this.addTicket.emit({ ticket: this.newTicketForm.value, id: this.ticket.id || -1 });
    this.ticket = null;
    this.clearNewTicketForm();
  }

}
