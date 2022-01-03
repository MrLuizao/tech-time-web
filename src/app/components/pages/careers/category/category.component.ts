import { Component, OnInit } from '@angular/core';
import categories from '../../../../data/jobcategory.json';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }
  public categories = categories;

  ngOnInit(): void {
  }

}
