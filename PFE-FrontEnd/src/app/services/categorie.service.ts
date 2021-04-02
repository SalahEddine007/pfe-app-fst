import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Categorie } from '../Models/categorie';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategorieService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getCategories(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(
      `${this.apiServerUrl}/app-communel/categorie/all-categories`
    );
  }

  public addCategorie(categorie: Categorie): Observable<Categorie> {
    return this.http.post<Categorie>(
      `${this.apiServerUrl}/app-communel/categorie/add-categorie`,
      categorie
    );
  }

  public updateCategorie(categorie: Categorie): Observable<Categorie> {
    return this.http.put<Categorie>(
      `${this.apiServerUrl}/app-communel/categorie/update-categorie`,
      categorie
    );
  }

  public deleteCategorie(categorieId: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiServerUrl}/app-communel/categorie/delete-categorie/id/${categorieId}`
    );
  }
}
