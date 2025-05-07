import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css'],
})
export class DiscoverComponent implements OnInit {
  allItems: any[] = [];
  filteredItems: any[] = [];
  itemsToShow: number = 6;
  searchQuery: string = '';
  categoryFilter: string = '';
  showEvents: boolean = true;
  selectedItem: any = null;
  showDetailModal = false;
  showBookingModal = false;

  events = [
    {
      id: 'evt1',
      title: 'Stand-Up Comedy Showcase',
      date: '2025-05-05T20:00',
      location: 'The Stage, Defence VI',
      category: 'Comedy',
      price: 800,
      description: "Laugh out loud with Karachi's funniest comedians. Mature content warning.",
      imageUrl: 'https://cdn.allthepics.net/images/2025/05/02/Standup-comedyy.jpeg',
      type: 'event',
    },
    {
      id: 'evt2',
      title: 'Emerging Artists Exhibition',
      date: '2025-05-10T17:00',
      location: 'Gallery Space',
      category: 'Art',
      price: 300,
      description: 'Discover stunning works from up-and-coming local artists. Opening reception.',
      imageUrl: 'https://cdn.allthepics.net/images/2025/05/02/Art-workshop.jpeg',
      type: 'event',
    },
    {
      id: 'evt3',
      title: 'Panel: Future of Karachi Culture',
      date: '2025-05-15T18:00',
      location: 'Conference Room',
      category: 'Dialogue',
      price: 200,
      description: 'Experts discuss the evolving cultural landscape of the city.',
      imageUrl: 'https://cdn.allthepics.net/images/2025/05/02/panel-talk-in-karachi-in-a-small-community-center-type-place-with-both-genders-with-modern-people.jpeg',
      type: 'event',
    },
    {
      id: 'evt4',
      title: 'Acoustic Open Mic Night',
      date: '2025-05-20T19:00',
      location: 'Café Lounge',
      category: 'Music',
      price: 400,
      description: 'Share your songs, poems, or stories in a cozy, supportive atmosphere.',
      imageUrl: 'https://cdn.allthepics.net/images/2025/05/02/open-mic-night.jpeg',
      type: 'event',
    },
  ];

  classes = [
    {
      id: 'cls1',
      title: 'Introduction to Pottery',
      date: '2025-06-01T10:00',
      location: 'Studio A',
      category: 'Craft',
      price: 1500,
      description: 'A hands-on workshop covering the basics of wheel throwing and hand-building.',
      imageUrl: 'https://cdn.allthepics.net/images/2025/05/02/pottery-class-in-karachi-in-a-small-community-center-type-place-with-both-genders-with-modern-people.jpeg',
      type: 'class',
    },
    {
      id: 'cls2',
      title: 'Creative Writing Workshop',
      date: '2025-06-05T14:00',
      location: 'Room 2',
      category: 'Writing',
      price: 1200,
      description: 'Unlock your storytelling potential with guided exercises and feedback.',
      imageUrl: 'https://cdn.allthepics.net/images/2025/05/02/writing-workshop-in-karachi-in-a-small-community-center-type-place-with-both-genders-with-modern-peo.jpeg',
      type: 'class',
    },
    {
      id: 'cls3',
      title: 'Street Photography Masterclass',
      date: '2025-06-10T16:00',
      location: 'Outdoor Meetup',
      category: 'Photography',
      price: 2000,
      description: 'Learn techniques for capturing compelling images on the streets of Karachi.',
      imageUrl: 'https://cdn.allthepics.net/images/2025/05/02/photo-class-in-karachi-in-a-small-community-center-type-place-with-both-genders-with-modern-people-a-1.jpeg',
      type: 'class',
    },
    {
      id: 'bento-cake-workshop',
      title: 'Bento Cake Workshop',
      date: '2024-06-15T15:00',
      location: 'Studio B, Baithak Hub',
      category: 'Baking',
      price: 3500,
      description: 'Learn to decorate beautiful bento cakes in this hands-on workshop. All materials provided. Suitable for beginners and enthusiasts!',
      imageUrl: 'https://cdn.allthepics.net/images/2025/05/02/cake-decoration-workshop.jpeg',
      type: 'class',
    },
    {
      id: 'salsa-class',
      title: 'Salsa Dance Class',
      date: '2024-06-22T18:00',
      location: 'Studio C, Baithak Hub',
      category: 'Dance',
      price: 2000,
      description: 'Join our energetic Salsa Dance Class! No partner or experience required. Learn the basics and have fun.',
      imageUrl: 'https://cdn.allthepics.net/images/2025/05/02/Salsa.jpeg',
      type: 'class',
    },
    {
      id: 'sign-language-class',
      title: 'Sign Language Basics',
      date: '2024-06-29T16:00',
      location: 'Studio D, Baithak Hub',
      category: 'Language',
      price: 1800,
      description: 'Learn the basics of sign language in a friendly, inclusive environment. Open to all ages and abilities.',
      imageUrl: 'https://cdn.allthepics.net/images/2025/05/02/sign-language.jpeg',
      type: 'class',
    },
  ];

  constructor() {}

  ngOnInit() {
    this.loadDummyData();
    this.updateVisibleItems();
  }

  loadDummyData() {
    this.allItems = [...this.events, ...this.classes];
  }

  updateVisibleItems() {
    const type = this.showEvents ? 'event' : 'class';
    this.filteredItems = this.allItems
      .filter(item => item.type === type)
      .filter(item =>
        item.title.toLowerCase().includes(this.searchQuery.toLowerCase()) &&
        (this.categoryFilter ? item.category === this.categoryFilter : true)
      )
      .slice(0, this.itemsToShow);
  }

  toggleContent(type: string) {
    this.showEvents = type === 'events';
    this.itemsToShow = 6; // Reset on toggle
    this.updateVisibleItems();
  }

  searchItems(query: string) {
    this.searchQuery = query;
    this.updateVisibleItems();
  }

  filterItems(category: string) {
    this.categoryFilter = category;
    this.updateVisibleItems();
  }

  loadMoreItems() {
    this.itemsToShow += 4;
    this.updateVisibleItems();
  }

  shouldShowLoadMore(): boolean {
    const type = this.showEvents ? 'event' : 'class';
    const visibleItems = this.allItems.filter(
      item =>
        item.type === type &&
        item.title.toLowerCase().includes(this.searchQuery.toLowerCase()) &&
        (!this.categoryFilter || item.category === this.categoryFilter)
    );
    return this.filteredItems.length < visibleItems.length;
  }

  openDetailModal(item: any) {
    this.selectedItem = item;
    this.showDetailModal = true;
  }

  openBookingModal(item: any) {
    this.selectedItem = item;
    this.showBookingModal = true;
  }

  closeModals() {
    this.showDetailModal = false;
    this.showBookingModal = false;
    this.selectedItem = null;
  }
}
