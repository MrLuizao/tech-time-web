import { Component, OnInit } from '@angular/core';
import service from '../../../../data/service.json';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  constructor() { }
  public service = service;

  ngOnInit(): void {
  }

}
