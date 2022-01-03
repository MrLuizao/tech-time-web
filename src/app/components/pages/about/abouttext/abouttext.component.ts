import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abouttext',
  templateUrl: './abouttext.component.html',
  styleUrls: ['./abouttext.component.css']
})
export class AbouttextComponent implements OnInit {

  constructor() { }
  list = [
    {text:"Business & Consulting Agency"},
    {text:"Awards Winning Business Comapny"},
  ];

  ngOnInit(): void {
  }

}
