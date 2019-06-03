import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-ticket-booking',
  templateUrl: './ticket-booking.component.html',
  styleUrls: ['./ticket-booking.component.scss']
})
export class TicketBookingComponent implements OnInit {

  public bookingForm: FormGroup;
  public memberForms: Array<FormGroup>;
  public seats: number = 0;
  public fieldArray: Array<any> = [];
  private newAttribute: any = {};


  constructor() {
    this.bookingForm = new FormGroup({
      date: new FormControl('', Validators.compose([Validators.required])),
      seats: new FormControl('', Validators.compose([Validators.required,Validators.max(10)])),
      cruise: new FormControl('', Validators.compose([Validators.required])),
      contact: new FormControl('', Validators.compose([Validators.required,Validators.maxLength(10)])),
      payment: new FormControl('', Validators.compose([Validators.required])),
      remarks: new FormControl(''),
      /*name1: new FormControl('', Validators.compose([Validators.required])),
      age1: new FormControl('', Validators.compose([Validators.required])),*/
      /*one: new FormGroup(
        {
          name: new FormControl('', Validators.compose([Validators.required])),
          age: new FormControl('', Validators.compose([Validators.required])),
        }
      ),
      two: new FormGroup(
        {
          name: new FormControl('', Validators.compose([Validators.required])),
          age: new FormControl('', Validators.compose([Validators.required])),
        }
      )*/
    });
  }

  ngOnInit() { 
    this.bookingForm.valueChanges.subscribe((form: any) => {
      
    })
  }

  /**
   * add
   */
  public add() {
    let seats = this.bookingForm.value.seats;
      if (Number(seats)) {
        this.seats = seats;
        this.fieldArray = [];
        // this.bookingForm.
        for (let i = 0; i < seats; i++) {
          this.fieldArray.push(i); 

          // let memberForm = new FormGroup({
          //   name: new FormControl('', Validators.compose([Validators.required])),
          //   age: new FormControl('', Validators.compose([Validators.required]))
          // });

          this.bookingForm.addControl('name'+i, new FormControl('', Validators.compose([Validators.required])));
          this.bookingForm.addControl('age'+i, new FormControl('', Validators.compose([Validators.required])));
          // this.memberForms.push(memberForm);         
        }
        console.log(seats)
      }
  }


  addFieldValue() {
      this.fieldArray.push(this.newAttribute)
      this.newAttribute = {};
  }

  deleteFieldValue(index) {
      this.fieldArray.splice(index, 1);
  }

  
  public formCheck(){
    console.log(this.bookingForm.value);
  }

}
