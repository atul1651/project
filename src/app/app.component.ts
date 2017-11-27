import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public posts: Post[];
  constructor(private dataService: DataService) {
  }
  title: String = 'app';
  ngOnInit() {
    this.dataService.fetch().subscribe(post => {
      this.posts = post;
    });
  }

}

interface Post {
  name: string;
  email: string;
  body: string;

}
