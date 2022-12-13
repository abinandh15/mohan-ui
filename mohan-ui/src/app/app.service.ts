import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, observable, Observable, of, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  URL = 'http://localhost:8080'
  dropdownList = new BehaviorSubject([])
  constructor(private http: HttpClient) { }


  getEnvironment():Observable<{ item_id: number, item_text: string }[]>{
    return of([
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ])
    // return this.http.get<{ item_id: number, item_text: string }[]>(`${URL}/environment`)
  }

}
