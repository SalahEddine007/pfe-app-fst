import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeService } from './employee.service';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RedevableComponent } from './redevable/redevable.component';
import { LocalComponent } from './local/local.component';
import { CategorieComponent } from './categorie/categorie.component';
@NgModule({
  declarations: [AppComponent, NavComponent, HomeComponent, RedevableComponent, LocalComponent, CategorieComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
