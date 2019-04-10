import { Component, OnInit,Input } from '@angular/core';
import { Incident } from '../incident';

@Component({
  selector: 'app-display-two',
  templateUrl: './display-two.component.html',
  styleUrls: ['./display-two.component.css']
})
export class DisplayTwoComponent implements OnInit {
 
  constructor() { }
  @Input() incidentRecord:Incident;
  ngOnInit() {
    
  }

}
