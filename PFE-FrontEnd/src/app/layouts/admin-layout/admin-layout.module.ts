import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {AdminLayoutRoutes} from './admin-layout.routing';

import {DashboardComponent} from '../../pages/dashboard/dashboard.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from '../../shared/shared.module';
import {NgxSpinnerModule} from 'ngx-spinner';
import {MatTreeModule} from '@angular/material/tree';
import {HomeComponent} from "../../pages/home/home.component";
import {RedevableComponent} from "../../pages/redevable/redevable.component";
import {LocalComponent} from "../../pages/local/local.component";
import {CategorieComponent} from "../../pages/categorie/categorie.component";
import {TaxeBoissonComponent} from "../../pages/taxe-boisson/taxe-boisson.component";
import {NgxPaginationModule} from "ngx-pagination";
import {ProgressbarModule} from "ngx-bootstrap/progressbar";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    CommonModule,
    SharedModule,
    NgxSpinnerModule,
    MatTreeModule,
    NgxSpinnerModule,
    NgxPaginationModule,
    NgxPaginationModule,
    ProgressbarModule
  ],
  declarations: [
    DashboardComponent, HomeComponent, RedevableComponent, LocalComponent, CategorieComponent, TaxeBoissonComponent
  ]
})

export class AdminLayoutModule {
}
