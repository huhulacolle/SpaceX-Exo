import { Capsule } from './../models/capsule';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Launch } from "../models/launch";
import { DetailCaps } from '../models/detail-caps';

@Injectable({
  providedIn: 'root'
})
export class SpaceXApiService {

  private _apiUrl = 'https://api.spacexdata.com/v3';

  constructor(
    private http: HttpClient
  ) { }

  getAllCapsule(): Observable<Capsule[]> {
    return this.http.get<Capsule[]>(`${this._apiUrl}/capsules`);
  }

  public getAllLaunches(): Observable<Launch[]> {
    return this.http.get<Launch[]>(`${this._apiUrl}/launches`);
  }
  
  public getdetailcaps(id: string): Observable<DetailCaps> {
    return this.http.get<DetailCaps>(`${this._apiUrl}/capsules/${id}`);
  }
}
