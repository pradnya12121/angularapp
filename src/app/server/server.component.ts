import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  name:string='Codemind technology';
  serverId:number=37;
  serverStatus:string='Offline';
  allowNewServer=false;
  imgUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201'
  serverCreationStatus:string="server not created";
  serverName:string="codemind.com"
  getServerStatus(){
    return this.serverStatus;
  }
  onCreateServer(){
    this.serverCreationStatus="Server started"
  }

  constructor() { 
    setTimeout(()=>{
      this.allowNewServer= true

    },5000);
  }

  ngOnInit() {
  }

}
