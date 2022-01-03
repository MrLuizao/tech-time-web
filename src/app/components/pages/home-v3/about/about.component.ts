import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }
  list = [
    {text:"Business & Consulting Agency"},
    {text:"Awards Winning Business Comapny"},
    {text:"Business & Consulting Agency"},
    {text:"Awards Winning Business Comapny"},
  ];

  ngOnInit(): void {
  }

}
