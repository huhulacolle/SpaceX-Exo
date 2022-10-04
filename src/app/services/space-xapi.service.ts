import { Capsule } from './../models/capsule';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpaceXApiService {

  constructor(
    private http: HttpClient
  ) { }

  getAllCapsule(): Observable<Capsule[]> {
    return this.http.get<Capsule[]>("https://api.spacexdata.com/v3/capsules");
  }
}
