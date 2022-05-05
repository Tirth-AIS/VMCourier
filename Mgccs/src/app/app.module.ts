import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BranchesComponent } from './branches/branches.component';
import { TrackingComponent } from './tracking/tracking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceService } from './service/service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactUsComponent,
    BranchesComponent,
    TrackingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ ServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
