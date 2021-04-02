import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderComponent } from './loader.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        LoaderComponent
    ],
    imports: [
        CommonModule,
        MatProgressSpinnerModule
    ],
    exports: [
        LoaderComponent
    ]
})
export class LoaderModule { }
