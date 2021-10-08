import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Item } from './item';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const items = [
      { id: 0, name: '0', headline: 'Headline or description here', description: 'Description 0', image: 'anchor.jpg', url: 'url 0'},
      { id: 1, name: '1', headline: 'Headline 1', description: 'Description 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: 'item1.jpg', url: 'url 1' },
      { id: 2, name: '2', headline: 'Headline 2', description: 'Description 2. Faucibus a pellentesque sit amet porttitor eget dolor morbi non. Elementum curabitur vitae nunc sed.', image: 'item2.jpg', url: 'url 2'},
      { id: 3, name: '3', headline: 'Headline 3', description: 'Description 3. At erat pellentesque adipiscing commodo elit at imperdiet dui.', image: 'item3.jpg', url: 'url 3'}
    ];
    return {items};
  }

  // Overrides the genId method to ensure that a item always has an id.
  // If the items array is empty,
  // the method below returns the initial number (11).
  // if the items array is not empty, the method below returns the highest
  // id id + 1.
  genId(items: Item[]): number {
    return items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1;
  }
}
