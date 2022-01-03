import { Component, AfterContentInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import portfolio from '../../../../data/portfolio.json';
import client from '../../../../data/team.json';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements AfterContentInit {

  constructor(private router: ActivatedRoute) { }
  public portfoliodetails = portfolio;
  public client = client;

  public getClient(items: string | any[]) {
    var elems = client.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }

  public setPost(id: any) {
    this.portfoliodetails = portfolio.filter((item: { id: any; }) => { return item.id == id });
  }

  ngAfterContentInit(): void {
    this.setPost(this.router.snapshot.params.id);
  }

}
