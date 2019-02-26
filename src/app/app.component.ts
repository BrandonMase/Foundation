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

  public shouldAddNewTicket = null;

  public newTicketForm: FormGroup;

  constructor() {
    this.newTicketForm = new FormGroup({});
    this.newTicketForm.valueChanges.subscribe(
      (res) => {
        console.log(res);
      }
    )
  }

  /**
   * Adds a new ticket to the ticket array.
   * @return `void`
   */
  public addNewTicket():void {
    let newTicket = { id: this.boardInformation.lastIdCreated+1, attributes: [] }
    newTicket.attributes = this.newTicketForm.value;
    this.tickets.push(newTicket);
    this.clearNewTicketForm();
  }

  private startNewTicketDrawerAnimation(start: null | boolean, end: null | boolean) {
    this.shouldAddNewTicket = start;
    setTimeout(() => {
      this.shouldAddNewTicket = end;
    }, 500)
  }

  public createNewTicketForm(index: number) {
    this.shouldAddNewTicket = true;
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

  clearNewTicketForm() {
    this.startNewTicketDrawerAnimation(false, null);
    this.newTicketForm.reset();
  }


}
