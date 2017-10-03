import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = ['Angular 4', 'React', 'Underscore'];
  newItem = null;
  pushItem = function () {
    if (this.newItem != null) {
      this.items.push(this.newItem);
      this.newItem = null;
    }
  };
  removeItem = function (index) {
    this.items.splice(index, 1);
  };
}
