import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { PhoneComponent } from './phone.component';
import { LoaderModule } from '../core/native/loader/loader.module';
import { PhoneRoutingModule } from './phone.routing.module';
import { CommonModule } from '@angular/common';
import { AppIconModule } from './core/app-icon/app-icon.module';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    PhoneComponent
  ],
  imports: [
    PhoneRoutingModule,
    CommonModule,
    HttpClientModule,
    LoaderModule,
    AppIconModule,
    MatGridListModule
  ]
})
export class PhoneModule { }
