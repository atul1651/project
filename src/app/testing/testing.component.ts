import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
  public posts: Post[];

  constructor(private dataService: DataService) { }

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
