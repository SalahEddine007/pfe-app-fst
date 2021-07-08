import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RedevableComponent } from './redevable/redevable.component';
import { LocalComponent } from './local/local.component';
import { CategorieComponent } from './categorie/categorie.component';
import { TaxeBoissonComponent } from './taxe-boisson/taxe-boisson.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'all-redevables', component: RedevableComponent },
  { path: 'all-local', component: LocalComponent },
  { path: 'all-categories', component: CategorieComponent },
  { path: 'all-taxe-boisson', component: TaxeBoissonComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
