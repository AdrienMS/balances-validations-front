import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '@environments/environment';

import { Balance, Movement } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovementService {
  private _url = `${environment.api}movements`;

  constructor(private http: HttpClient) { }

  public validation(balances: Partial<Balance>[], movements: Partial<Movement>[]): Observable<Response> {
    return this.http.post<Response>(`${this._url}/validation`, {balances, movements});
  }
}
