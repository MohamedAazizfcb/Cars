import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationCardsComponent } from './navigation-cards/navigation-cards.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationCardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
