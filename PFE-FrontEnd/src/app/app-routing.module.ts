import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RedevableComponent } from './redevable/redevable.component';
import { LocalComponent } from './local/local.component';
import { CategorieComponent } from './categorie/categorie.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'all-redevables', component: RedevableComponent },
  { path: 'all-local', component: LocalComponent },
  { path: 'all-categories', component: CategorieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
