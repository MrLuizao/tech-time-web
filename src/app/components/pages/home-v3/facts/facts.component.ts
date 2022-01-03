import { Component, OnInit } from '@angular/core';
import list from '../../../../data/aboutlist.json';
import counter from '../../../../data/counter.json';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.css']
})
export class FactsComponent implements OnInit {

  constructor() { }
  public list = list;
  public counter = counter;

  ngOnInit(): void {
  }

}
