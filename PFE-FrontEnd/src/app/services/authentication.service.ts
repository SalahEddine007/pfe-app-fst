import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {map} from "rxjs/operators";
import {User} from "../Models/user";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient, private router: Router) {
  }

  login(values: any) {
    return this.http.post(this.apiServerUrl + 'authenticate', values).pipe(
      map((user: User) => {
        if (user) {
          localStorage.setItem('token', user.token);
        }
      })
    )
  }
}
