import { Component, OnInit } from '@angular/core';
import service from '../../../../data/service.json';

@Component({
  selector: 'app-styleone',
  templateUrl: './styleone.component.html',
  styleUrls: ['./styleone.component.css']
})
export class StyleoneComponent implements OnInit {

  constructor() { }
  public service = service;

  ngOnInit(): void {
  }

}
