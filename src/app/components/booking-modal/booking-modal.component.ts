import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-booking-modal',
  templateUrl: './booking-modal.component.html',
  styleUrls: ['./booking-modal.component.css']
})
export class BookingModalComponent {
  @Input() item: any;
  @Output() close = new EventEmitter<void>();

  otpSent = false;
  otpVerified = false;
  confirmationUUID: string = '';
  showConfirmationModal = false;
  easypaisa = {
    accountNumber: '',
    otp: ''
  };

  form = {
    name: '',
    email: '',
    phone: '',
    seats: 1,
    note: '',
    payment: ''
  };

  submitForm() {
    if (this.form.payment === 'easypaisa' && !this.otpVerified) {
      alert('Please verify your EasyPaisa payment before submitting.');
      return;
    }

    // Generate UUID for confirmation
    this.confirmationUUID  = this.generateUUID();
    console.log('Booking UUID:', this.confirmationUUID);

    this.showConfirmationModal = true;

    console.log('Booking Submitted', this.form, 'UUID:', this.confirmationUUID);
  }

  onPaymentChange() {
    this.otpSent = false;
    this.otpVerified = false;
    this.easypaisa.accountNumber = '';
    this.easypaisa.otp = '';
  }

  generateOTP() {
    if (!this.easypaisa.accountNumber) return;
    this.otpSent = true;
    this.otpVerified = false;
    // Simulate sending OTP here
  }

  verifyOTP() {
    if (this.easypaisa.otp === '1234') {
      this.otpVerified = true;
    } else {
      this.otpVerified = false;
      alert('Invalid OTP. Please try again.');
    }
  }


  generateUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
