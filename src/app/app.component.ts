import { Component, VERSION } from '@angular/core';
import { Car } from './Car';
import { CarServiceService } from './car-service.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showFiller = false;
}
