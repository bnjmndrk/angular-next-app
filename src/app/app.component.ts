import { Component } from '@angular/core';

/*
Components have 3 parts:
  1) a selector - this is the html tag name which will represent the logic
  2) where the file which contains the html for this component is located
  3) the ccs styles to apply to this component
*/
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
