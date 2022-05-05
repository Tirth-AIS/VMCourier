import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  public contactForm : FormGroup;

  constructor(private service : ServiceService) { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name : new FormControl('', [Validators.required]),
      email : new FormControl('', [Validators.required]),
      phone : new FormControl('', [Validators.required]),
      subject : new FormControl('', [Validators.required]),
      message : new FormControl('', [Validators.required])
    })
  }

  public onSubmit() {
    console.log(this.contactForm.value);
    this.service.contactUs(this.contactForm.value)
  }

}
