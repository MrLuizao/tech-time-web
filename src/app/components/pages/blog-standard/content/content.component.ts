import { Component, OnInit } from '@angular/core';
import blog from '../../../../data/blog/blog.json';
import author from '../../../../data/team.json';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  // pagination
  page: number = 1;
  constructor() { }
  public blogpost = blog;
  public author = author;
  public getAuthor(items: string | any[]) {
    var elems = author.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }

  ngOnInit(): void {
  }

}
