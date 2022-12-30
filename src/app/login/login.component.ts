import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _route:Router, private _auth:AuthService) { }

  ngOnInit() {
  }

  checkuser(uname,password){

    var output = this._auth.checkUserNameandPassword(uname,password)
    if(output == true){
      this._route.navigate(['product'])
      window.alert("Login sucess fully")
    
    }
    else{
   window.alert("incorrect username and password")
    }
    // if(uname=='admin' && password == 'admin'){
    //   this._route.navigate(['product/washingMachine'])
    // }
  }
}
