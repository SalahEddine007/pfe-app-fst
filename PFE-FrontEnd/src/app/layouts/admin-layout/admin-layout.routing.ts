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
  {path: 'redevables', component: RedevableComponent},
  {path: 'locals', component: LocalComponent},
  {path: 'categories', component: CategorieComponent},
  {path: 'taxeBoisson', component: TaxeBoissonComponent},
  {path: '', component: DashboardComponent},
];
