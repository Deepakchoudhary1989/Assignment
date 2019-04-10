import { Component, OnInit } from '@angular/core';
import { INCIDENTRECORD } from '../mock-data';
import { SummaryService } from '../summary.service';
import { Incident } from '../incident';
@Component({
  selector: 'app-display-one',
  templateUrl: './display-one.component.html',
  styleUrls: ['./display-one.component.css']
})
export class DisplayOneComponent implements OnInit {
  incidentRecord: Incident[];
  constructor(private summaryService: SummaryService) { }

  ngOnInit() {
    this.getRecords();
  }
  getRecords():void {
    //this.incidentRecord = this.summaryService.getRecords();
    this.summaryService.getRecords().subscribe(incidentRecord=> this.incidentRecord=incidentRecord);
  }
}
