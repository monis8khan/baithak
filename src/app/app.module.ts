import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  // <-- Import FormsModule

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { DiscoverComponent } from './components/discover/discover.component';
import { MembershipComponent } from './components/membership/membership.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { DetailModalComponent } from './components/detail-modal/detail-modal.component';
import { BookingModalComponent } from './components/booking-modal/booking-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    DiscoverComponent,
    MembershipComponent,
    AddEventComponent,
    DetailModalComponent,
    BookingModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
