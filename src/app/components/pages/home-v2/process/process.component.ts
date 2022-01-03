import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit {

  constructor() { }
  list = [
    {
      icon:"fal fa-coffee",
      title:"Have A Coffee",
      text:"Doloremque laudantium totam raperiaeaqu ipsa quae ab illo inventore veritatis et quasi"
    },
    {
      icon:"fal fa-users",
      title:"Meet With Advisors",
      text:"Doloremque laudantium totam raperiaeaqu ipsa quae ab illo inventore veritatis et quasi"
    },
    {
      icon:"fal fa-trophy-alt",
      title:"Achieve Your Goals",
      text:"Doloremque laudantium totam raperiaeaqu ipsa quae ab illo inventore veritatis et quasi"
    }
  ];

  ngOnInit(): void {
  }

}
