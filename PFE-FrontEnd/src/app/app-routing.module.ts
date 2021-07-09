import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {NotFoundComponent} from "./Core/not-found/not-found.component";
import {ServerErrorComponent} from "./Core/server-error/server-error.component";
import {AdminLayoutComponent} from "./layouts/admin-layout/admin-layout.component";
import {LoggedGuard} from "./Core/guards/logged.guard";
import {AuthGuard} from "./Core/guards/auth.guard";

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'server-error', component: ServerErrorComponent, data: {breadcrumb: 'Server Error'}},
  {path: 'not-found', component: NotFoundComponent, data: {breadcrumb: 'Not found'}},
  {path: 'login', component: LoginComponent,canActivate:[LoggedGuard] }, {

    path: 'dashboard',
    runGuardsAndResolvers:'always',
    component: AdminLayoutComponent,
    loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(mod => mod.AdminLayoutModule),
    canActivate: [AuthGuard]
  },

  {path: '**', redirectTo: 'not-found', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
