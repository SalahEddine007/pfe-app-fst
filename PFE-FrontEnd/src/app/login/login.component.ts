import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../services/authentication.service";
import {ActivatedRoute, Router} from "@angular/router";
import {SnackBarService} from "../services/snack-bar.service";
import {NgxSpinnerService} from "ngx-spinner";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [SnackBarService]
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private spinner: NgxSpinnerService,
              public SnackBar: SnackBarService) {
  }

  loginForm: FormGroup;

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', Validators.required),
    })
  }

  onSubmit() {
    this.spinner.show('myspin');
    this.authenticationService.login(this.loginForm.value).subscribe(() => {

      this.spinner.hide('myspin');
      this.router.navigateByUrl('dashboard/main');

    }, error => {
      console.log(error)
      this.spinner.hide('myspin');
      this.SnackBar.open('danger', error.error.message);
    }, () => {
      this.spinner.hide('myspin');
    });
  }
}
