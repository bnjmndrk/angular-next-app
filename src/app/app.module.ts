import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';  

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,   // registers the new component with this module
    ServersComponent   // registers the new component with this module
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
