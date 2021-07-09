import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component';
import {CommonModule} from "@angular/common";
import {SharedModule} from "./shared/shared.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxSpinnerModule} from "ngx-spinner";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {CoreModule} from "./Core/core.module";
import {ErrorInterceptor} from "./Core/interceptors/error.interceptor";
import {JwtInterceptor} from "./Core/interceptors/jwt.interceptor";
import {LayoutModule} from "@angular/cdk/layout";
import {SidebarModule} from "./sidebar/sidebar.module";
import {FixedPluginModule} from "./shared/fixedplugin/fixedplugin.module";
import {FooterModule} from "./shared/footer/footer.module";
import {NavbarModule} from "./shared/navbar/navbar.module";
import {AdminLayoutComponent} from "./layouts/admin-layout/admin-layout.component";

@NgModule({
  declarations: [AppComponent, LoginComponent, AdminLayoutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    CoreModule,
    LayoutModule, FixedPluginModule,
    NgxSpinnerModule, FooterModule, NavbarModule, SidebarModule, SharedModule],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}


