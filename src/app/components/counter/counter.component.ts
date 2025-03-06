import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  countervalue = signal(0);
  increment() {
    this.countervalue.update((val) => val + 1)
  }
  decrement() {
    this.countervalue.update((val) => val - 1)
  }
  reset() {
    this.countervalue.set(0)
  }
}
