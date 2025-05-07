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

  constructor() {}

  ngOnInit() {
    this.loadDummyData();
    this.updateVisibleItems();
  }

  loadDummyData() {
    this.allItems = [
      {
        title: 'Art Therapy Session',
        category: 'Art',
        type: 'class',
        date: '2025-05-12T15:00',
        location: 'Studio A',
        price: 1200,
        imageUrl: '',
        description: 'Relax and express yourself through guided art therapy.',
      },
      {
        title: 'Indie Music Night',
        category: 'Music',
        type: 'event',
        date: '2025-05-18T20:00',
        location: 'Auditorium',
        price: 800,
        imageUrl: '',
        description: 'A night of soulful indie music and local artists.',
      },
      {
        title: 'Pottery Workshop',
        category: 'Craft',
        type: 'class',
        date: '2025-05-14T11:00',
        location: 'Studio C',
        price: 1500,
        imageUrl: '',
        description: 'Learn to mold, shape, and create your own pottery.',
      },
      {
        title: 'Open Mic Poetry',
        category: 'Literature',
        type: 'event',
        date: '2025-05-10T18:00',
        location: 'Lounge',
        price: 500,
        imageUrl: '',
        description:
          'Share your voice or enjoy others at our open mic poetry night.',
      },
      // Add more dummy items here
    ];
  }

  updateVisibleItems() {
    const filtered = this.allItems.filter((item) => {
      const matchesType = this.showEvents
        ? item.type === 'event'
        : item.type === 'class';
      const matchesSearch = item.title
        .toLowerCase()
        .includes(this.searchQuery.toLowerCase());
      const matchesCategory =
        !this.categoryFilter || item.category === this.categoryFilter;
      return matchesType && matchesSearch && matchesCategory;
    });

    this.filteredItems = filtered.slice(0, this.itemsToShow);
  }

  toggleContent(type: string) {
    this.showEvents = type === 'events';
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
    const visibleItems = this.allItems.filter(
      (item) =>
        (this.showEvents ? item.type === 'event' : item.type === 'class') &&
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
