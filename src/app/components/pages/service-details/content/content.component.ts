import { Component, AfterContentInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import service from '../../../../data/service.json';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements AfterContentInit {

  constructor(private router: ActivatedRoute) { }
  public servicedetails = service;

  public setPost(id: any) {
    this.servicedetails = service.filter((item: { id: any; }) => { return item.id == id });
  }

  ngAfterContentInit(): void {
    this.setPost(this.router.snapshot.params.id);
  }

}
