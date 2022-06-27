import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-ngrx-threejs';
  counter: number = 0;

  constructor(private store: Store<{ counter: { counter: number } }>) {}

  ngOnInit(): void {
    this.store.select('counter').subscribe((data) => {
      this.counter = data.counter;
    });
  } 
  
  
}
