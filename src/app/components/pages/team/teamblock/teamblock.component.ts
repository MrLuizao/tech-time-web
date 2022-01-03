import { Component, OnInit } from '@angular/core';
import teamblock from '../../../../data/team.json';

@Component({
  selector: 'app-teamblock',
  templateUrl: './teamblock.component.html',
  styleUrls: ['./teamblock.component.css']
})
export class TeamblockComponent implements OnInit {

  constructor() { }
  public teamblock = teamblock;

  ngOnInit(): void {
  }

}
