import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { RootRoutingModule } from './root.routing.module';
import { RootComponent } from './root.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NativeService } from './core/native/native.service';
import { LoaderModule } from './core/native/loader/loader.module';

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    RootRoutingModule,
    LoaderModule
  ],
  providers: [NativeService],
  bootstrap: [RootComponent]
})
export class RootModule { }
