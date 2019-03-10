import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TextInputComponent } from './components/text-input/text-input.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { NewTicketDrawerComponent } from './components/new-ticket-drawer/new-ticket-drawer.component';
@NgModule({
  declarations: [
    AppComponent,
    TextInputComponent,
    TicketComponent,
    NewTicketDrawerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
