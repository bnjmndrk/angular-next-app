import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
//  templateUrl: './servers.component.html',                        // example of using html template
//  template: '<app-server></app-server><app-server></app-server>', // example of using in-line templating
  template: `
          <app-server></app-server>
          <app-server></app-server>`,                               // example of using in-line templating with back-tics for multi-line entry

  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
