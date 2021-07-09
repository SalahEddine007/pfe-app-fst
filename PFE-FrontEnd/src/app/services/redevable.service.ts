import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import { Redevable } from '../Models/redevable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RedevableService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getRedevables(): Observable<Redevable[]> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `${token}`);
    return this.http.get<Redevable[]>(
      `${this.apiServerUrl}/app-communel/redevable/all-redevable`,{headers});
  }

  public addRedevabale(redevable: Redevable): Observable<Redevable> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `${token}`);

    return this.http.post<Redevable>(
      `${this.apiServerUrl}/app-communel/redevable/add-redevable`,
      redevable, {headers});
  }

  public updateRedevable(redevable: Redevable): Observable<Redevable> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `${token}`);

    return this.http.put<Redevable>(
      `${this.apiServerUrl}/app-communel/redevable/update-redevable`,
      redevable, {headers});
  }

  public deleteRedevable(redevableId: number): Observable<void> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `${token}`);

    return this.http.delete<void>(
      `${this.apiServerUrl}/app-communel/redevable/delete-redevable/id/${redevableId}`
    ,{headers});
  }
}
