import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketBookingRoutingModule } from './ticket-booking-routing.module';
import { TicketBookingComponent } from './ticket-booking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TicketBookingComponent],
  imports: [
    CommonModule,
    TicketBookingRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TicketBookingModule { }
