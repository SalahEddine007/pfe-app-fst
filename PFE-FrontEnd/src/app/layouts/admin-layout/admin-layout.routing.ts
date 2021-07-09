import {Routes} from '@angular/router';

import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {AdminLayoutComponent} from "./admin-layout.component";
import {LocalComponent} from "../../pages/local/local.component";
import {RedevableComponent} from "../../pages/redevable/redevable.component";
import {CategorieComponent} from "../../pages/categorie/categorie.component";
import {TaxeBoissonComponent} from "../../pages/taxe-boisson/taxe-boisson.component";
import {LoginComponent} from "../../login/login.component";

export const AdminLayoutRoutes: Routes = [
  {path: 'main', component: DashboardComponent},
  {path: 'all-redevables', component: RedevableComponent},
  {path: 'all-local', component: LocalComponent},
  {path: 'all-categories', component: CategorieComponent},
  {path: 'all-taxe-boisson', component: TaxeBoissonComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: DashboardComponent},
];
