import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-ticket-booking',
  templateUrl: './ticket-booking.component.html',
  styleUrls: ['./ticket-booking.component.scss']
})
export class TicketBookingComponent implements OnInit {

  public bookingForm: FormGroup;

  constructor() {
    this.bookingForm = new FormGroup({
      date: new FormControl('', Validators.compose([Validators.required])),
      seats: new FormControl('', Validators.compose([Validators.required,Validators.max(10)])),
      cruise: new FormControl('', Validators.compose([Validators.required])),
      contact: new FormControl('', Validators.compose([Validators.required,Validators.maxLength(10)])),
      payment: new FormControl('', Validators.compose([Validators.required])),
      remarks: new FormControl(''),
    });
  }

  ngOnInit() { 
  }
  
  public formCheck(){
    console.log(this.bookingForm.value);
  }

}
