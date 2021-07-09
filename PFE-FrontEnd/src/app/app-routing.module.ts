import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {NotFoundComponent} from "./Core/not-found/not-found.component";
import {ServerErrorComponent} from "./Core/server-error/server-error.component";
import {AdminLayoutComponent} from "./layouts/admin-layout/admin-layout.component";

const routes: Routes = [
  {path: '', redirectTo: '/account/login', pathMatch: 'full'},
  {path: 'server-error', component: ServerErrorComponent, data: {breadcrumb: 'Server Error'}},
  {path: 'not-found', component: NotFoundComponent, data: {breadcrumb: 'Not found'}},
  {path: 'login', component: LoginComponent}, {

    path: 'dashboard',
    component: AdminLayoutComponent,
    loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(mod => mod.AdminLayoutModule),

  },

  {path: '**', redirectTo: 'not-found', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
