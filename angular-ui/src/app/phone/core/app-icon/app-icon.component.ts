import { Component, Input } from '@angular/core';

@Component({
    selector: 'sentryui-phone-app-icon',
    templateUrl: './app-icon.component.html',
    styleUrls: ['./app-icon.component.scss']
})
export class AppIconComponent {
    @Input()
    text: string;
    @Input()
    icon: string;

    constructor() {
    }
}
