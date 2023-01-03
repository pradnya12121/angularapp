import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userData } from '../models/templatedriven';

@Injectable({
  providedIn: 'root'
})
export class FireService {
  user:any[]=[{id:1,name:'Jack'} ,{id:2,
  name:'Harry'},
{id:3,name:'Poter'}]
url='https://crud-operation-cdfec-default-rtdb.firebaseio.com/';
  constructor(private httpClient:HttpClient) { }
  postFireData(studata:userData){
    return this.httpClient.post(this.url + 'post.json', studata)

  }
  getDataFire():Observable <any>{
    return this.httpClient.get(this.url + 'post.json')
  }

}
