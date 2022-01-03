import { Component, AfterContentInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import blogpost from '../../../../data/blog/blog.json';
import blogtags from '../../../../data/tags.json';
import authors from '../../../../data/team.json';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements AfterContentInit {

  constructor(private router: ActivatedRoute) { }
  public blogdetails = blogpost;
  public tags = blogtags;
  public authors = authors;

  public getAuthor(items: string | any[]) {
    var elems = authors.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  public getBlogTags(items: string | any[]) {
    var elems = blogtags.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }

  public setPost(id: any) {
    this.blogdetails = blogpost.filter((item: { id: any; }) => { return item.id == id });
  }
  ngAfterContentInit(): void {
    this.setPost(this.router.snapshot.params.id);
  }

}
