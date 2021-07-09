import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar.component';
import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
    imports: [RouterModule, CommonModule, NgbDropdownModule],
    declarations: [ SidebarComponent ],
    exports: [ SidebarComponent ]
})

export class SidebarModule {}
