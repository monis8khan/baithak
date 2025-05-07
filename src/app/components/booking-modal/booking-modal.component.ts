import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-booking-modal',
  templateUrl: './booking-modal.component.html',
  styleUrls: ['./booking-modal.component.css']
})
export class BookingModalComponent {
  @Input() item: any;
  @Output() close = new EventEmitter<void>();

  bookingFormData = {
    name: '',
    email: '',
    quantity: 1
  };

  closeModal() {
    this.close.emit();
  }

  submitBooking() {
    console.log('Booking:', {
      ...this.bookingFormData,
      item: this.item
    });
    alert(`Booking confirmed for ${this.item?.title}`);
    this.closeModal();
  }
}
