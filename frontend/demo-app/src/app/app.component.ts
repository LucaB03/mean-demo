import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import { GreetingService } from "./greeting.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  greetingService: GreetingService = inject(GreetingService);
  greetForm = new FormGroup({
    name: new FormControl('')
  });
  greeting: string = "";
  constructor() {
    this.greetingService.greet().then((phrase: string) => {
      this.greeting = phrase;
    });
  }
  greet() {
    this.greetingService.greet().then((phrase: string) => {
      this.greeting = phrase;
    });
  }
}
