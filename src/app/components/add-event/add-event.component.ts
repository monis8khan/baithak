import { Component } from '@angular/core';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent {
  newEvent = {
    title: '',
    date: '',
    location: '',
    category: '',
    description: '',
    price: 0,
    imageUrl: '',
    type: 'event'
  };

  submitEvent() {
    console.log('Event submitted:', this.newEvent);
    // Add submission logic here (e.g., API call)
  }
}
