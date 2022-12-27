import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { divApiUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Demoservice2Service {
 

  constructor(private httpClient:HttpClient) { }
  getPosts():Observable<any>{
   return  this.httpClient.get(`${divApiUrl}posts`);
  }
getPostsById(id){
  return this.httpClient.get(`${divApiUrl}posts/`+ id )
}
}
