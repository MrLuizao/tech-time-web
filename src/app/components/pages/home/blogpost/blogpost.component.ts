import { Component, OnInit } from '@angular/core';
import blogpost from '../../../../data/blog/blog.json';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.css']
})
export class BlogpostComponent implements OnInit {

  constructor() { }
  public blogpost = blogpost;

  ngOnInit(): void {
  }

}
