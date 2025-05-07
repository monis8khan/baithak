import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.css']
})
export class DetailModalComponent {
  @Input() item: any;
  @Output() close = new EventEmitter<void>();
  @Output() book = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }

  openBooking() {
    this.book.emit();
  }
}
