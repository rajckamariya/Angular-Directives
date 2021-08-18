import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSecret = false;
  log = [];
  onDisplayToggle() {
    this.showSecret = !this.showSecret;
    this.log.push(new Date());
  }
}
