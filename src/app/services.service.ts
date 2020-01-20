import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmp } from './emp';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private _url : string = 'http://localhost:5000/employees/';

  constructor(private http : HttpClient) { }

  getdatas(): Observable<IEmp[]>{
    return this.http.get<IEmp[]>(this._url);
  }
}
