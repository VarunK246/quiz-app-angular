import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css'],
})
export class FrontComponent implements OnInit {
  constructor(private router: Router, private renderer: Renderer2) {
    this.renderer.setStyle(document.body, 'background', '#FFF');
  }

  ngOnInit() {}
  ButtonClick() {
    this.router.navigate(['/Start']);
  }
}
