import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Categorie} from '../Models/categorie';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategorieService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getCategories(): Observable<Categorie[]> {

    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZnFzZHNxZHNkIiwiZXhwIjoxNjI1ODcyMDYzLCJpYXQiOjE2MjU4NTQwNjN9.e4nB3VQIPxAtIlx4gfk3vW9Zn6GdezlnqfatXZSmB1k4Dj5YpzswLjNvjVpnHMzzLYzOUZH05w47sPye4CA9VQ`);

    return this.http.get<Categorie[]>(`${this.apiServerUrl}/app-communel/categorie/all-categories`, {headers});
  }

  public addCategorie(categorie: Categorie): Observable<Categorie> {

    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `${token}`);

    return this.http.post<Categorie>(
      `${this.apiServerUrl}/app-communel/categorie/add-categorie`,
      categorie
      , {headers});
  }

  public updateCategorie(categorie: Categorie): Observable<Categorie> {

    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `${token}`);

    return this.http.put<Categorie>(
      `${this.apiServerUrl}/app-communel/categorie/update-categorie`,
      categorie
      , {headers});
  }

  public deleteCategorie(categorieId: number): Observable<void> {

    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `${token}`);

    return this.http.delete<void>(
      `${this.apiServerUrl}/app-communel/categorie/delete-categorie/id/${categorieId}`
      , {headers});
  }

}
