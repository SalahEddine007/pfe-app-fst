import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [NotFoundComponent, ServerErrorComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: []
})
export class CoreModule { }
