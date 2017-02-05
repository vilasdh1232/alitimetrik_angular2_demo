import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div id="wrapper">
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <header-comp></header-comp>
        <sidebar-comp></sidebar-comp>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `
})

export class AppComponent { 
  constructor() {}
}