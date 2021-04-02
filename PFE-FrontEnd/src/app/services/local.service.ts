import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Redevable } from '../Models/redevable';
import { Local } from '../Models/local';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LocalService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public local: Local[];

  public getLocals(): Observable<Local[]> {
    return this.http.get<Local[]>(
      `${this.apiServerUrl}/app-communel/local/all-local`
    );
  }

  public getRedevables(): Observable<Redevable[]> {
    return this.http.get<Redevable[]>(
      `${this.apiServerUrl}/app-communel/redevable/all-redevable`
    );
  }

  public addLocal(local: Local): Observable<Local> {
    return this.http.post<Local>(
      `${this.apiServerUrl}/app-communel/local/add-local`,
      local
    );
  }

  public updateLocal(local: Local): Observable<Local> {
    return this.http.put<Local>(
      `${this.apiServerUrl}/app-communel/local/update-local`,
      local
    );
  }

  public deleteLocal(localId: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiServerUrl}/app-communel/local/delete-local/id/${localId}`
    );
  }
}
