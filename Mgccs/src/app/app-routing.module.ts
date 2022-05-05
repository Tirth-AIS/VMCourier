import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchesComponent } from './branches/branches.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { TrackingComponent } from './tracking/tracking.component';

const routes: Routes = [
  { path:'', redirectTo: 'home', pathMatch: 'full'},
  { path:"home", component: HomeComponent },
  { path:"contactus", component: ContactUsComponent },
  { path:"branches", component: BranchesComponent },
  { path:"tracking", component: TrackingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
