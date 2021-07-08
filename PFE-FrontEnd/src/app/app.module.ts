import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import {ProgressbarModule} from 'ngx-bootstrap/progressbar';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeService } from './employee.service';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RedevableComponent } from './redevable/redevable.component';
import { LocalComponent } from './local/local.component';
import { CategorieComponent } from './categorie/categorie.component';
import { TaxeBoissonComponent } from './taxe-boisson/taxe-boisson.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [AppComponent, NavComponent, HomeComponent, RedevableComponent, LocalComponent, CategorieComponent, TaxeBoissonComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule,NgxPaginationModule,ProgressbarModule],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
