import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whyus',
  templateUrl: './whyus.component.html',
  styleUrls: ['./whyus.component.css']
})
export class WhyusComponent implements OnInit {

  constructor() { }
  list = [
    { text: "Best Services" },
    { text: "Professional Advisor" },
    { text: "Responsive Design" },
    { text: "Awesome Pricing" },
    { text: "Online Support" },
    { text: "Best Services" },
    { text: "Professional Advisor" },
    { text: "Responsive Design" },
    { text: "Awesome Pricing" },
    { text: "Online Support" },
  ];

  ngOnInit(): void {
  }

}
