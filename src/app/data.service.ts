
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class DataService {
  constructor(private http: Http) { }

  fetch(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/comments').map(response => response.json());
  }

}
