import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice-template-form',
  templateUrl: './practice-template-form.component.html',
  styleUrls: ['./practice-template-form.component.css']
})
export class PracticeTemplateFormComponent implements OnInit {
  defaultValue:string="Mumbai";
  constructor() { }

  ngOnInit() {
  }

}
