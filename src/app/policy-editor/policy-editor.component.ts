import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-policy-editor',
  templateUrl: './policy-editor.component.html',
  styleUrls: ['./policy-editor.component.css']
})
export class PolicyEditorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  name = new FormControl('');
  formCreator=[
    {
      "type": "text",
      "label": "First Name",
      "name": "FirstName",
      "required": true,
      "datatype": "string"
    },
    {
      "type": "date",
      "label": "Date of Birth",
      "name": "DateofBirth",
      "required": true,
      "datatype": "date"
    },
    {
      "type": "text",
      "label": "Policy Number",
      "name": "PolicyNumber",
      "required": true,
      "datatype": "numeric"
    }
  ]
  
}
