import { Component, OnInit } from '@angular/core';
import jobs from '../../../../data/jobs.json';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  constructor() { }
  public jobs = jobs;

  ngOnInit(): void {
  }

}
