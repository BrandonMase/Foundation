import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ticket } from 'src/app/models/ticket.model';

@Component({
  selector: 'ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  @Input() ticket           : Ticket;
  @Input() boardTitle       : string;
  @Input() headers          : [{}];
  @Output() updateTicket    = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  /**
   * Updates the column of the ticket with the current value.
   * @param column The column to update - `string`
   * @param value The value the column is being updated to - `string`
   * @returns `void`
   */
  public updateColumn(column: string, value: string):void {
    //! Don't need this because it automatically updates through pass by reference
    // this.onUpdate.emit({value: value, column: column});
    this.ticket.attributes[column] = value;
  }

  /** Tells the board to open up the new ticket drawer
   * @returns `void`
   */
  public editTicket(): void {
    this.updateTicket.emit(true);
  }

}
