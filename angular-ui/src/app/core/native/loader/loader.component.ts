import { Component, Input } from '@angular/core';

@Component({
    selector: 'sentryui-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
    @Input('diameter')
    diameter: number = 40;

    constructor() {
    }
}
