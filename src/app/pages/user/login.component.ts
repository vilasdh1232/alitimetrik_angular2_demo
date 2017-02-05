import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './html/login.component.html',
  styleUrls: ['./css/login.css']
})

export class LoginComponent { 
  user:any = {
    user_name: '',
    password: ''
  };  

  constructor(
    private router: Router
  ) {}

  login(user:any) {
    var self = this;
   
  }

  ngOnInit() {
    // Properties are resolved and things like
    // this.mapWindow and this.mapControls
    // had a chance to resolve from the
    // two child components <map-window> and <map-controls>
  }
}