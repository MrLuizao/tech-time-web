import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-v2',
  templateUrl: './portfolio-v2.component.html',
  styleUrls: ['./portfolio-v2.component.css']
})
export class PortfolioV2Component implements OnInit {

  constructor() { }
  // Footer style
  classname = "";
  ftlogo = "assets/img/logo-2.png";
  ftshape = "assets/img/lines/01.png";
  ftshape2 = "assets/img/lines/02.png";
  ftshapeclass = "line-one";
  ftshape2class = "line-two";

  ngOnInit(): void {
  }

}
