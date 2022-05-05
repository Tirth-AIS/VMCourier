import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from './service/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mgccs';
  subscribeForm : FormGroup;

  constructor(private service : ServiceService ){
    
  }

  ngOnInit(): void {
    
  }

  onSubmit(){
    console.log(this.subscribeForm.value)
    // aa comment kadhje 
    //this.service.subscribe(this.subscribeForm.value)
  }
}
