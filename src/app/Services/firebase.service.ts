import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { userData } from '../models/templatedriven';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private httpClient:HttpClient) { }
  url = 'https://crud-operation-cdfec-default-rtdb.firebaseio.com/'
  createPost(): Observable <any>{
    let postData={
      title:'This is angular curd',
      content:'This is firebase curd opreation with post'

    }
    return this.httpClient.post(this.url + 'post.json',postData)

  }
  createPostFirebase(userData:userData){
    return this.httpClient.post(this.url + 'post.json',userData)
  }
  getFireData():Observable<any>{
    return this.httpClient.get(this.url + 'post.json')
  }
}
