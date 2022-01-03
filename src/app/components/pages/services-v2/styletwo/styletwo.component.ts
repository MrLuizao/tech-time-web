import { Component, OnInit } from '@angular/core';
import service from '../../../../data/service.json';

@Component({
  selector: 'app-styletwo',
  templateUrl: './styletwo.component.html',
  styleUrls: ['./styletwo.component.css']
})
export class StyletwoComponent implements OnInit {

  constructor() { }
  public service = service;

  ngOnInit(): void {
  }

}
