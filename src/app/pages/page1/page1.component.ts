import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'page1',
  templateUrl: './html/page1.component.html',
  styleUrls: ['./css/login.css']
})

export class Page1Component { 
 

  constructor(
    private router: Router
  ) {}

 

  ngOnInit() {
    // Properties are resolved and things like
    // this.mapWindow and this.mapControls
    // had a chance to resolve from the
    // two child components <map-window> and <map-controls>
  }
}