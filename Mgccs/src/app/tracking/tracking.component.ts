import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent implements OnInit {

  public trackingId : string;

  constructor(private service : ServiceService) { }

  ngOnInit(): void {}
  
    
  onSubmit(value){
    console.log(value);

}
}