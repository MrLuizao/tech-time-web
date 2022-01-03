import { Component, OnInit } from '@angular/core';
import service from '../../../../data/service.json';

@Component({
  selector: 'app-serviceblock',
  templateUrl: './serviceblock.component.html',
  styleUrls: ['./serviceblock.component.css']
})
export class ServiceblockComponent implements OnInit {

  constructor() { }
  public service = service;

  ngOnInit(): void {
  }

}
