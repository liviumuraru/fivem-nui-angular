import { Component } from '@angular/core';
import { NativeService } from './core/native/native.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent {
  constructor(private nativeService: NativeService) {
  }  
}
