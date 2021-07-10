import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Categorie} from '../Models/categorie';
// import { Local } from '../Models/local';
import {TaxeBoisson} from '../Models/taxe-boisson';

import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TaxeBoissonService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public TaxeBoisson: TaxeBoisson[];

  public getCategories(): Observable<Categorie[]> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `${token}`);
    return this.http.get<Categorie[]>(
      `${this.apiServerUrl}/app-communel/categorie/all-categories`
      , {headers});
  }

  public getTaxeBoisson(): Observable<TaxeBoisson[]> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `${token}`);

    return this.http.get<TaxeBoisson[]>(
      `${this.apiServerUrl}/app-communel/taxe-boisson/allTaxeBoisson`
      , {headers});
  }

  public addTaxeBoisson(taxeBoisson: TaxeBoisson): Observable<TaxeBoisson> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `${token}`);

    return this.http.post<TaxeBoisson>(
      `${this.apiServerUrl}/app-communel/taxe-boisson/add-taxe-boisson`,
      taxeBoisson , {headers});
  }

  public updateTaxeBoisson(taxeBoisson: TaxeBoisson): Observable<TaxeBoisson> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `${token}`);

    return this.http.put<TaxeBoisson>(
      `${this.apiServerUrl}/app-communel/taxe-boisson/update-taxe-boisson`,
      taxeBoisson, {headers});
  }
}
