import { Component } from '@angular/core';
import { Ticket } from './models/ticket.model';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  /** The information of the entire board */
  public boardInformation = {
    boardTitle: 'GCO',
    lastIdCreated: 126,
    properties: [{ name: 'Title', type: 'text' },{ name: 'Things2', type: 'text' },{ name: 'What Now?', type: 'text' },{ name: 'How about !', type: 'text' }]
  }

  /** All of the shown properties and their type */
  public headers = [{ name: 'Title', type: 'text' },{ name: 'Things2', type: 'text' },{ name: 'What Now?', type: 'text' },{ name: 'How about !', type: 'text' }];

  /** All of the ticketss */
  public tickets: Array<Ticket> = [
    { 
      id: 123,
      attributes: {
        Title: 'This is a title',
        'How about !': 'This is thing 1',
        'What Now?': 'This is thing 3',
        'Things2': 'This is thing 2'
      }
      

    },
    { 
      id: 124,
      attributes: {
        Title: 'This is a title',
        'How about !': 'This is thing 1',
        'What Now?': 'This is thing 3asd asd asd asda sdas d',
        'Things2': 'This is thing 2',
        'Extras': 'Extra'
      }
    },
    { 
      id: 125,
      attributes: {
        Title: 'This is a title',
        'How about !': 'This is thing 1',
        'What Now?': 'This is thing 3',
        'Things2': 'This is thing 2'
      }
    },
    { 
      id: 126,
      attributes: {
        Title: 'This is a title',
        'How about !': 'This is thing 1',
        'What Now?': 'This is thing 3',
        'Things2': 'This is thing 2'
      }
    },
  ];

  /** Sees if the add new ticket drawer should appear */
  public shouldAddNewTicket = null;

  /** The new ticket form */
  public newTicketForm: FormGroup;

  /** Init the newTicketForm */
  constructor() {
    this.newTicketForm = new FormGroup({});
  }

  /**
   * Adds a new ticket to the ticket array. Sets the new last id created. Clears the new ticket drawer.
   * @return `void`
   */
  public addNewTicket():void {
    let newTicket = { id: this.boardInformation.lastIdCreated+1, attributes: [] }
    newTicket.attributes = this.newTicketForm.value;
    this.tickets.push(newTicket);
    this.boardInformation.lastIdCreated++;
    this.clearNewTicketForm();
  }

  /**
   * Transitions the animation of the new ticket drawer.
   * @param start The starting position - `null or boolean`
   * @param end The ending position - `null or bollean`
   * @returns `void`
   */
  private startNewTicketDrawerAnimation(start: null | boolean, end: null | boolean, cb?: any):void {
    this.shouldAddNewTicket = start;
    setTimeout(() => {
      this.shouldAddNewTicket = end;
    }, 500)
  }
  
  /**
   * Inits a new ticket form or inits a form with ticket information
   * @param index The index of the ticket to populate the form with. - `number`
   * @returns `void`
   */
  public createNewTicketForm(index?: number):void {
    this.shouldAddNewTicket = true;
    this.newTicketForm = new FormGroup({});
    //* If the index is undefined, init a blank form.
    //* else init a form with the ticket information passed in from the index.
    if(index === undefined) {
      for(let i = 0; i < this.boardInformation.properties.length; i++) {
        let newFormControl = new FormControl('')
        this.newTicketForm.addControl(this.boardInformation.properties[i].name, newFormControl);
      }
    }
    else {
      let ticket = this.tickets[index];
      let attributes = Object.keys(ticket.attributes);
      for(let i = 0; i < attributes.length; i++) {
        let newFormControl = new FormControl(ticket.attributes[attributes[i]])
        this.newTicketForm.addControl(attributes[i], newFormControl);
      }
    }

   
  }

  /**
   * Removes the new ticket form and resets the form.
   * @returns `void` 
  */
  clearNewTicketForm():void {
    this.startNewTicketDrawerAnimation(false, null);
    this.newTicketForm.reset()
  }


}
