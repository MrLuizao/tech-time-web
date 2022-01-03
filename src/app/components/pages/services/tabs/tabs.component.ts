import { Component, OnInit } from '@angular/core';
import list from '../../../../data/aboutlist.json';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  constructor() { }
  public list = list;

  ngOnInit(): void {
  }

}
