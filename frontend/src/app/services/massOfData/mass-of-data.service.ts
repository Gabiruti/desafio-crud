import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MassOfDataService {

  readonly apiURL!: string;

  constructor(private http : HttpClient) {
    this.apiURL = 'http://127.0.0.1:8000/api'
   }

  get(url: String): Observable<any>{
    return this.http.get(`${ this.apiURL }${url}`)
  }

  post(url: String, dataToSend: object): Observable<any>{
    return this.http.post(`${ this.apiURL }${url}`, dataToSend)}

  put(url: String, dataToUpdate: object): Observable<any>{
    return this.http.put(`${ this.apiURL }${url}`, dataToUpdate)}

  delete(url: String): Observable<any>{
    return this.http.delete(`${ this.apiURL }${url}`)}
}
