import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';

@Injectable()
export class AppConfig {
    withoutLoginUrls:any = ['login'];
    apiUrl:any = "http://localhost:5001/api/v1";
}