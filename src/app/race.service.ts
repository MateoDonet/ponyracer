import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { RaceModel } from './models/race.model';

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  constructor(private http: HttpClient) {}

  list(): Observable<Array<RaceModel>> {
    const apiURL = 'http://ponyracer.ninja-squad.com';
    const params = { 
      status: 'PENDING' 
    };
    return this.http.get<Array<RaceModel>>(apiURL + '/api/races', { params });
  }

}