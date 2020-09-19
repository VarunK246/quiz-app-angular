import {
  Component,
  Output,
  ElementRef,
  AfterViewInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title: 'varun';
  constructor(private elementRef: ElementRef) {}
}
