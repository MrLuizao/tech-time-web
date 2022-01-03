import { Component, OnInit } from '@angular/core';
import service from '../../../../data/service.json';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor() { }
  public service = service;

  ngOnInit(): void {
  }

}
