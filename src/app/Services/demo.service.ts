import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  product=[
    {id:102,name:'Laptop'},
  {id:103,name:'TV'},
{id:104,name:'AC'}]
apiURL='https://jsonplaceholder.typicode.com/users'


  constructor(private http:HttpClient) {
   
   }
  display(){
    alert('subscribe sucessfully')
  }
  getUsersData(){
    return this.http.get(this.apiURL)
      }
}
