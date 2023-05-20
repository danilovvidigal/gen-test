import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {
  animateTitle = false;
  animateLoop = false;

  constructor() {}

  ngOnInit(): void {
    interval(500)
      .pipe(takeWhile((value) => value <= 20))
      .subscribe((value) => {
        if (value % 2 === 0) {
          this.animateTitle = true;
          this.animateLoop = true;
        } else {
          this.animateTitle = false;
          this.animateLoop = false;
        }
      });
  }
}
