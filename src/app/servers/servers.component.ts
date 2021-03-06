import { Component, OnInit } from '@angular/core';

/*
The selector can be written as:
  1) a selector name (e.g. 'app-servers') -> use the <app-servers> as html tags -or-
  2) as an element attribute (e.g. '[app-servers]') -> use app-servers inside an html tag as an attribute
  3) as a class (e.g. '.app-servers') -> use app-servers class inside an html tag
*/
@Component({
  selector: '.app-servers',                   // as a class
//  selector: '[app-servers]',                // as an element attribute
//  selector: 'app-servers',                  // as an html tag - most common
  templateUrl: './servers.component.html',                        // example of using html template
  // template: `
  //         <app-server></app-server>
  //         <app-server></app-server>`,                               // example of using in-line templating with back-tics for multi-line entry

  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverCreated:boolean = false;
  allowNewServer:boolean = false;
  serverCreationStatus:string = 'No server was created!';
  serverName:string = "Test Server Name"; // initial value of server name

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    console.log("You are in create");
    this.serverCreationStatus = 'Server was created';
  }

  onMouseUp(){
    console.log("You are in mouse up");
    this.serverCreationStatus = 'Server off';
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onMouseOver(){
    return "This is a tool tip message";
  }

}
