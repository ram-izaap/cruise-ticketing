import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder, FormArray, AbstractControl } from '@angular/forms';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-ticket-booking',
  templateUrl: './ticket-booking.component.html',
  styleUrls: ['./ticket-booking.component.scss']
})
export class TicketBookingComponent implements OnInit {

  public bookingForm: FormGroup;
  public memberForms: Array<FormGroup>;
  public members: FormArray;
  public seats: number = 0;
  public fieldArray: Array<any> = [];
  private newAttribute: any = {};

  public availableSeats = 0;
  public flag = true;
  public pnrNo = Math.floor(Math.random() * 10000) + 1;
  constructor(private fb: FormBuilder, private bookingService: BookingService) {

    this.bookingForm = this.fb.group({
      availableSeats: new FormControl(this.availableSeats),
      pnr: new FormControl(this.pnrNo, Validators.compose([Validators.required])),
      date: new FormControl('', Validators.compose([Validators.required])),
      seats: new FormControl('', Validators.compose([Validators.required,Validators.max(10), ValidateSeats])),
      cruise: new FormControl('', Validators.compose([Validators.required])),
      contact: new FormControl('', Validators.compose([Validators.required,Validators.maxLength(10)])),
      payment: new FormControl('', Validators.compose([Validators.required])),
      remarks: new FormControl(''),
      members: this.fb.array([this.createMember()])
    });
  }

  

  createMember(): FormGroup {
    return this.fb.group({
      name: new FormControl('', Validators.compose([Validators.required])),
      age: new FormControl('', Validators.compose([Validators.required]))
    });
  }

  addMember(): void {
    this.members = this.bookingForm.get('members') as FormArray;
    this.members.push(this.createMember());
  }

  removeMember(i: number): void {
    this.members = this.bookingForm.get('members') as FormArray;
    this.members.removeAt(i);
  }

  ngOnInit() { 
    this.bookingForm.valueChanges.subscribe((form: any) => {
      
    })
  }

  /**
   * add
   */
  public add(event) {
    
    
    let seats = event.target.value;
    if (!Number(seats)) return;

    let populatedCount= this.bookingForm.value.members.length;
    seats = Number(seats);

    console.log('Add', seats, populatedCount, seats > populatedCount);

    if (seats > populatedCount) {
      let lcount = seats - populatedCount;
      for (let i = 0; i < lcount; i++) {
        this.addMember();
      }
    } else {
      for (let i = populatedCount-1; i >= seats; i--) {
        this.removeMember(i);
      }      
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
    console.log(this.bookingForm);
    this.bookingService
      .createBooking(this.bookingForm.value)
      .subscribe((resp) => {
        console.log(resp);
      })
  }

  /**
   * getAvailableSeats
   */
  public getAvailableSeats(e) {
    console.log(this.bookingForm.value.date);
    this.availableSeats = this.bookingService.getAvailableSeats(this.bookingForm.value.date);
    this.bookingForm.get('availableSeats').setValue(this.availableSeats);
  }

}

export function ValidateSeats(control: AbstractControl) {
  if (control && control.parent) {
    console.log('JJJJ', Number(control.value), control.parent.value.availableSeats, Number(control.value) <= control.parent.value.availableSeats)
  }
  
  if (Number(control.value) && Number(control.value) >= control.parent.value.availableSeats) {
    console.log('kkkk', control.parent.value.availableSeats)
    return { validSeats: true };
  }
  return null;
}
