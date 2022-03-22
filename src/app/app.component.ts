import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  collection: { id: number }[];
  constructor() {
    this.collection = [{ id: 1 }, { id: 2 }, { id: 3 }];
  }

  getItems() {
    this.collection = this.getItemsFromServer();
  }

  getItemsFromServer() {
    return [...this.collection, { id: Math.random()}];
  }

  trackByFn(index, item) {
    return index; // or item.id
  }
}
