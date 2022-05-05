import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class ServiceService {

  public url : string = 'ahiya api url paste karje';

  constructor(private _http : HttpClient, private router : Router) { }

  login(data) {
    // api pramane url set karje, ne alag alag hoy to direct ahiya muki deje
    this._http.post(`${this.url}`, data).subscribe( res => {
      console.log(res);
      this.router.navigate(['/'])
    })
  }

  trackConsignement(id : string){
    return this._http.get(`${this.url}\${id}`); // url tari rite set karvana
  }

  contactUs(data) {
    this._http.post(`${this.url}`, data).subscribe( res => {
      console.log(res);
    })
  }

  subscribe(data) {
    this._http.post(`${this.url}`, data).subscribe( res => {
      console.log(res);
    })
  }
}
