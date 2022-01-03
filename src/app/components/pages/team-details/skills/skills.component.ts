import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }
  skills = [
    {
      title:"Marketing Strategy",
      value:85
    },
    {
      title:"Digital Marketing",
      value:95
    },
    {
      title:"Web Design",
      value:72
    },
    {
      title:"IT Consulting",
      value:79
    }
  ];

  ngOnInit(): void {
  }

}
