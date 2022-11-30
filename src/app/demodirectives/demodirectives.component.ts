import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Movie } from '../models/movies';

@Component({
  selector: 'app-demodirectives',
  templateUrl: './demodirectives.component.html',
  styleUrls: ['./demodirectives.component.css']
})
export class DemodirectivesComponent implements OnInit {
isShow:boolean=true;
 @Output() foodevent:EventEmitter<string> =new EventEmitter<string>();


addtofood(value) {
// foodevent is nothing but your custom event (foodevent)
    this.foodevent.emit(value);
  }


title : string = "Top 3 Movies";
  movies: Movie[] = [
    { title: '3 Idiots', director: 'Rajkumar', cast: 'Amir', releaseDate: '2007' },
    { title: 'Kantara', director: 'Rishab', cast: 'Rishab', releaseDate: '2022'},
    { title: 'KGF', director: 'RockBhai', cast:'Yash', releaseDate: '2019'}
  ]
// 
  constructor() { }

  ngOnInit() {
  }

}
