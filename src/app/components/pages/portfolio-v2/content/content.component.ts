import { Component, OnInit } from '@angular/core';
import products from "../../../../data/portfolio.json";
import productcategory from "../../../../data/portfoliocategory.json";
import { Category } from '../../portfolio/category';
import { Item } from '../../portfolio/item';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }
  items: Item[] = products;
  categories: Category[] = productcategory;
  filteredItems: Item[] = [...this.items];
  filterItemsByCategory(category: Category) {
    this.filteredItems = this.items.filter((item: Item) => {
      return item.category.includes(category.id);
    })
  }
  reset() {
    this.filteredItems = [...this.items];
  }

  ngOnInit(): void {
  }

}
