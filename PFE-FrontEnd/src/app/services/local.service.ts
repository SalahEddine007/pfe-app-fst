import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Redevable} from '../Models/redevable';
import {Local} from '../Models/local';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LocalService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public local: Local[];

  public getLocals(): Observable<Local[]> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `${token}`);

    return this.http.get<Local[]>(
      `${this.apiServerUrl}/app-communel/local/all-local`
      , {headers});
  }

  public getRedevables(): Observable<Redevable[]> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `${token}`);

    return this.http.get<Redevable[]>(
      `${this.apiServerUrl}/app-communel/redevable/all-redevable`, {headers}
    );
  }

  public addLocal(local: Local): Observable<Local> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `${token}`);

    return this.http.post<Local>(
      `${this.apiServerUrl}/app-communel/local/add-local`,
      local, {headers}
    );
  }

  public updateLocal(local: Local): Observable<Local> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `${token}`);

    return this.http.put<Local>(
      `${this.apiServerUrl}/app-communel/local/update-local`,
      local
      , {headers});
  }

  public deleteLocal(localId: number): Observable<void> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `${token}`);

    return this.http.delete<void>(
      `${this.apiServerUrl}/app-communel/local/delete-local/id/${localId}`
      , {headers});
  }

  public getLocalByRedevable(ref: string): Observable<void> {

    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `${token}`);

    return this.http.get<void>(`${this.apiServerUrl}/app-communel/local/get-local-by-redevable/${ref}`,
      {headers});
  }
}
