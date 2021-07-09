import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TextInputComponent} from "./components/text-input/text-input.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [TextInputComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    TextInputComponent]
})
export class SharedModule { }
