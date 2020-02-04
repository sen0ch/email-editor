import { Component, OnInit } from '@angular/core';
import { RestApiService } from './shared/rest-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular Email Editor';

  Item: any = [];

  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    return this.restApi.getItems().subscribe((data: {}) => {
      this.Item = data;
    });
  }

  deleteItem(id) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.restApi.deleteItem(id).subscribe(data => {
        this.loadItems();
      });
    }
  }
}
