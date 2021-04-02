import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

export enum NativeMessageType {
    TOGGLE_PHONE = 'sentry://ui/phone/toggleDisplay'
}

export function sleepPromise(millis: number) {
    return new Promise(resolve => setTimeout(resolve, millis));
}

@Injectable({providedIn: 'root'})
export class NativeService {
    showPhone = false;

    constructor(private httpClient: HttpClient, private router: Router) {
        window.addEventListener('message', this.handleNativeEvent.bind(this));
        window.addEventListener('keyup', this.closePhone.bind(this));
    }

    async closePhone(event: KeyboardEvent) {
        if (event.key === 'Escape') {
            this.showPhone = false;
            await this.httpClient.post('https://sentry-phone/onPhoneToggled', JSON.stringify({
                showPhone: this.showPhone
            })).toPromise();
            await this.router.navigate(['/']);
        }
    }

    async handleNativeEvent(event: MessageEvent<any>) {
        switch (event?.data?.message) {
            case NativeMessageType.TOGGLE_PHONE:
                this.showPhone = !this.showPhone;
                await this.httpClient.post('https://sentry-phone/onPhoneToggled', JSON.stringify({
                    showPhone: this.showPhone
                })).toPromise();
                if (this.showPhone) {
                    await this.router.navigate(['/phone']);
                }
                else {
                    await this.router.navigate(['/']);
                }
                break;

            default:
                throw new Error(`Event is invalid or event handler is missing for event message: ${event.data.message}`);
        }
    }

    shouldShowPhone() {
        return this.showPhone;
    }    
}