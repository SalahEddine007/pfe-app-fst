import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import {ProgressbarModule} from 'ngx-bootstrap/progressbar';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NavComponent} from './nav/nav.component';
import {HomeComponent} from './home/home.component';
import {RedevableComponent} from './redevable/redevable.component';
import {LocalComponent} from './local/local.component';
import {CategorieComponent} from './categorie/categorie.component';
import {TaxeBoissonComponent} from './taxe-boisson/taxe-boisson.component';
import {LoginComponent} from './login/login.component';
import {CommonModule} from "@angular/common";
import {SharedModule} from "./shared/shared.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxSpinnerModule} from "ngx-spinner";

@NgModule({
  declarations: [AppComponent, NavComponent, HomeComponent, RedevableComponent, LocalComponent, CategorieComponent, TaxeBoissonComponent, LoginComponent,],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    ProgressbarModule,
    SharedModule,
    NgxSpinnerModule,
    BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}


