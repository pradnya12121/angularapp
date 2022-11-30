import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { College } from '../models/student';

@Component({
  selector: 'app-childout',
  templateUrl: './childout.component.html',
  styleUrls: ['./childout.component.css']
})
export class ChildoutComponent implements OnInit {
  @Output() collegeDetail:EventEmitter<object>=new EventEmitter<object>();
  
  constructor() { }

  college:College[]=[{college_code:10001,college_name:"Ruiea",college_address:"Matunga",college_intake:400,college_grade:"A"},
  {college_code:10001,college_name:"RJ",college_address:"Matunga",college_intake:500,college_grade:"A"},
  {college_code:10002,college_name:"Ratanam",college_address:"Bhandup",college_intake:600,college_grade:"B"},
  {college_code:10003,college_name:"Menon",college_address:"Milund",college_intake:300,college_grade:"A"},
  {college_code:10004,college_name:"MCC",college_address:"Thane",college_intake:600,college_grade:"A"},
  {college_code:10005,college_name:"Kelkar",college_address:"Ghatkopar",college_intake:400,college_grade:"B"}
  ]

  getObject(){
    this.collegeDetail.emit(this.college)
  }
  ngOnInit() {
  }

}
