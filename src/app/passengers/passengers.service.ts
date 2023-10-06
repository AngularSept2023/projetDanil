import { Injectable } from '@angular/core';
import { Passengers } from './passengers';
import { Observable, map, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
    providedIn: 'root'
})
export class PassengersService {
    private passengersUrl = 'http://localhost:3000/passengers'

    constructor(private http: HttpClient) {}

  

    getPassengers(): Observable<any[]> {
      const url = 'http://localhost:3000/passengers';
      return this.http.get<any[]>(url);
    }
}