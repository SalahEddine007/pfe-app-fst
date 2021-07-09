import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import {ProgressbarModule} from 'ngx-bootstrap/progressbar';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NavComponent} from './nav/nav.component';
import {HomeComponent} from './pages/home/home.component';
import {RedevableComponent} from './pages/redevable/redevable.component';
import {LocalComponent} from './pages/local/local.component';
import {CategorieComponent} from './pages/categorie/categorie.component';
import {TaxeBoissonComponent} from './pages/taxe-boisson/taxe-boisson.component';
import {LoginComponent} from './login/login.component';
import {CommonModule} from "@angular/common";
import {SharedModule} from "./shared/shared.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxSpinnerModule} from "ngx-spinner";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {CoreModule} from "./Core/core.module";
import {ErrorInterceptor} from "./Core/interceptors/error.interceptor";
import {JwtInterceptor} from "./Core/interceptors/jwt.interceptor";
import {LayoutModule} from "@angular/cdk/layout";
import {SidebarModule} from "./sidebar/sidebar.module";
import {FixedPluginModule} from "./shared/fixedplugin/fixedplugin.module";

@NgModule({
  declarations: [AppComponent, NavComponent, LoginComponent,],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,

    BrowserAnimationsModule,
    MatSnackBarModule,
    CoreModule,
    LayoutModule,
    SidebarModule, FixedPluginModule, NgxSpinnerModule],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}


