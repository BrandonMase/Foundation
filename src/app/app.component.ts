import { Component } from '@angular/core';
import { Ticket } from './models/ticket.model';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { TicketComponent } from './components/ticket/ticket.component';
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
    properties: [{ name: 'Title', type: 'text' },{ name: 'Things2', type: 'text' },{ name: 'What Now?', type: 'text' },{ name: 'How about !', type: 'text'},{name: 'Extras', type:'text' }]
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

  public newTicket: Ticket | boolean = false;

  /** Init the newTicketForm */
  constructor() {}

  public handleColumnChange(val: string, index: number, key: string) {
    console.log(val,index,key);
    this.tickets[index].attributes[key] = val;
  } 

  public createTicketForm(ticketIndex: number):void {
    this.shouldAddNewTicket = true;
    if(ticketIndex === undefined) {
      this.newTicket = false
    }
    else {
      this.newTicket = this.tickets[ticketIndex];
    }
  }

  public addTicket(event: {ticket: any, id: number }) {

    if(event.id !== -1) {
      console.log(event);
      let index = this.tickets.findIndex(e => e.id === event.id);
      this.tickets[index].attributes = event.ticket;
    }
    else {
      event.ticket.id = this.boardInformation.lastIdCreated + 1;
      event.ticket.attributes = event.ticket;
      this.tickets.push(event.ticket);
      this.boardInformation.lastIdCreated++;
    }
  }


}
