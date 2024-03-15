import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environments';
import { User } from '../interfaces/user.interface';
import { state } from '../interfaces/state.interface';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private myAppUrl: string;
  constructor(private http: HttpClient) {
    this.myAppUrl = environment.TasationRoute
  }

  getAllStates(): Observable<state[]> {
    return this.http.get<state[]>(`${this.myAppUrl}/states`)
  }
}
