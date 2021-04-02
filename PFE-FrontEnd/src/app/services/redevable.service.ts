import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    return this.http.get<Redevable[]>(
      `${this.apiServerUrl}/app-communel/redevable/all-redevable`
    );
  }

  public addRedevabale(redevable: Redevable): Observable<Redevable> {
    return this.http.post<Redevable>(
      `${this.apiServerUrl}/app-communel/redevable/add-redevable`,
      redevable
    );
  }

  public updateRedevable(redevable: Redevable): Observable<Redevable> {
    return this.http.put<Redevable>(
      `${this.apiServerUrl}/app-communel/redevable/update-redevable`,
      redevable
    );
  }

  public deleteRedevable(redevableId: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiServerUrl}/app-communel/redevable/delete-redevable/id/${redevableId}`
    );
  }
}
