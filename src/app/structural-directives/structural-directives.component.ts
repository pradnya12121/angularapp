import { Component, OnInit } from '@angular/core';
import { Courses } from '../courseM/course';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {
     isShow:boolean=true;
     show:boolean=false;
     title:string="Top Three Courses";
     course:Courses[]=[
      {Id:1, CourseName:"Data Science",Syllabus:"R,Python,Hadoop,Tableau",Fees:40000},
      {Id:2, CourseName:"Angular Developer",Syllabus:"HTML,Css3,JS,TS,Angular", Fees:30000},
      {Id:3, CourseName:"Oracle",Syllabus:"Sql,PL/Sql,Oracle Database",Fees:40000}
     ]
    
  constructor() { }

  ngOnInit() {
  }

}
