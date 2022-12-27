import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { divApiUrl } from 'src/environments/environment';
import { Demoservice2Service } from '../Services/demoservice2.service';

@Component({
  selector: 'app-demo-details',
  templateUrl: './demo-details.component.html',
  styleUrls: ['./demo-details.component.css']
})
export class DemoDetailsComponent implements OnInit {

  constructor(private demoservice2:Demoservice2Service, private route:ActivatedRoute  ) { }
 array=[];
 displayStyle = "none";
  ngOnInit() {
     let id=this.route.snapshot.params['id']
   this.demoservice2.getPostsById(id).subscribe(result=>{
        console.log(result)
        this.array.push(result)
     })
  }
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
}


