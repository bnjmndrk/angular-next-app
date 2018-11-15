import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',      // unlike css styles, only 1 template can be listed here
  // styleUrls: ['./app.component.css']    // this is an array which allows for pointing to multiple stylesheets
  styles: [`                               
  h3 {
    color:dodgerblue;
  }
  `]                                      // example of inline style array with backtics for multiple strings 
})
export class AppComponent {
}
