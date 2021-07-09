import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {map} from "rxjs/operators";
import {User} from "../Models/user";
import {of, ReplaySubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiServerUrl = environment.apiBaseUrl;

  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient, private router: Router) {
  }

  loadCurrentUser(token: string) {
    if (token == null) {
      this.currentUserSource.next(null);
      return of(null);
    }

    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);
    return this.http.get(this.apiServerUrl + '/loadUser', {headers}).pipe(
      map((user: User) => {
        if (user) {
          localStorage.setItem('token', user.token);
          this.currentUserSource.next(user);

          return user;
        }
      })
    )
  }

  login(values: any) {

    return this.http.post(this.apiServerUrl + '/authenticate', values).pipe(
      map((user: User) => {
        if (user) {

          localStorage.setItem('token', user.token);

        }
      })
    )
  }

  logout() {
    console.log('logged out');
    localStorage.removeItem('token');
    this.currentUserSource.next(null);
    location.reload();
    this.router.navigate(['/login'])
  }

}
