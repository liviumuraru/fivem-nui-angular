import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppIconComponent } from './app-icon.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
      AppIconComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    AppIconComponent
  ]
})
export class AppIconModule { }
