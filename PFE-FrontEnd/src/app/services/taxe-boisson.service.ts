import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Categorie } from '../Models/categorie';
// import { Local } from '../Models/local';
import { TaxeBoisson } from '../Models/taxe-boisson';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TaxeBoissonService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public TaxeBoisson: TaxeBoisson[];

  public getCategories(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(
      `${this.apiServerUrl}/app-communel/categorie/all-categories`
    );
  }

  public getTaxeBoisson(): Observable<TaxeBoisson[]> {
    return this.http.get<TaxeBoisson[]>(
      `${this.apiServerUrl}/app-communel/taxe-boisson/allTaxeBoisson`
    );
  }

  public addTaxeBoisson(taxeBoisson: TaxeBoisson): Observable<TaxeBoisson> {
    return this.http.post<TaxeBoisson>(
      `${this.apiServerUrl}/app-communel/taxe-boisson/add-taxe-boisson`,
      taxeBoisson
    );
  }

  public updateTaxeBoisson(taxeBoisson: TaxeBoisson): Observable<TaxeBoisson> {
    return this.http.put<TaxeBoisson>(
      `${this.apiServerUrl}/app-communel/taxe-boisson/update-taxe-boisson`,
      taxeBoisson
    );
  }
}
