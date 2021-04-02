import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { NativeService } from '../core/native/native.service';

@Component({
    selector: 'sentryui-phone',
    templateUrl: './phone.component.html',
    styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit {
    showLoader = true;
    apps = [
        {
            icon: 'call'
        },
        {
            icon: 'contacts'
        },
        {
            icon: 'settings'
        },
        {
            icon: 'camera'
        },
        {
            icon: 'videocam'
        },
        {
            icon: 'account_balance'
        }
    ];

    constructor(private httpClient: HttpClient, private nativeService: NativeService) {
    }

    ngOnInit() {
        this.showLoader = false;
    }

    isShown() {
        return this.nativeService.shouldShowPhone();
    }
}
