import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';
import { CounterComponent } from "../components/counter/counter.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GreetingComponent, CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  messagetoGreeting = signal("Message To Greeting");

  keyUpHandler(event: KeyboardEvent) {
    console.log(`Event from Home ts,, clicked ${event.key} key`);
  }
}
