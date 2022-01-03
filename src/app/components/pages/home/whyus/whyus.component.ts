import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whyus',
  templateUrl: './whyus.component.html',
  styleUrls: ['./whyus.component.css']
})
export class WhyusComponent implements OnInit {

  constructor() { }
  list = [
    {title:"Specialist Company Advisor Team"},
    {title:"Understanding Machines Open Standard"},
    {title:"Can Data Visualization Improve Mobile"},
  ];

  ngOnInit(): void {
  }

}
