import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ConnectionServiceOptions, ConnectionServiceOptionsToken} from './lib/connection.service';
import { ConnectionServiceModule } from './lib/connection-service.module';

// import { ConnectionServiceModule } from 'ng-connection-service';

const date = new Date().getTime();

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ConnectionServiceModule
  ],
  providers: [
    {
      provide: ConnectionServiceOptionsToken,
      useValue: {
        enableHeartbeat: true,
        // heartbeatUrl: `/favicon.ico?t=${date}`,
        requestMethod: 'get',
        heartbeatInterval: 3000,
        heartbeatRetryInterval: 1000
      } as ConnectionServiceOptions
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
