import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketBookingComponent } from './ticket-booking.component';

const routes: Routes = [
  {
    path: '',
    component: TicketBookingComponent,
    pathMatch:'full',
    data: {
      title: 'TicketBooking'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketBookingRoutingModule { }
