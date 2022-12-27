import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { Demoservice2Service } from '../Services/demoservice2.service';

@Component({
  selector: 'app-demopost',
  templateUrl: './demopost.component.html',
  styleUrls: ['./demopost.component.css']
})
export class DemopostComponent implements OnInit {

  constructor(private demoservice2:Demoservice2Service) { }
  arrayPost:Post[]=[];
  ngOnInit() {
    this.demoservice2.getPosts().subscribe((result)=>{
      // console.log(result)
      this.arrayPost=result;
    })
  }

}
