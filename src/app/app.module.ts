import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { Router, ActivatedRoute, Params, NavigationStart } from '@angular/router';

import { AppComponent }   from './app.component';
import { SharedModule } from './shared/shared.module';
import { Page1Module } from './pages/page1/page1.module';


import { routing } from './app.routs';
import { AppConfig } from './config/app.config';

//https://github.com/grevory/angular-local-storage
//https://github.com/phenomnomnominal/angular-2-local-storage

@NgModule({
  imports:      [ 
    SharedModule,
    Page1Module,
    BrowserModule, 
    FormsModule, 
    HttpModule,
    routing
  ],
  declarations: [ 
    AppComponent   
  ],
  providers: [
    AppConfig
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule {}