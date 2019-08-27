import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map, catchError} from 'rxjs/operators';

export class FakeReqService {

  constructor(private http: HttpClient) { 
  }
  
  getRequest(): Observable<any>{  
   return  this.http.get('http://www.mocky.io/v2/5d5f8c9d2f000050005f371e');
  
  } 
}
