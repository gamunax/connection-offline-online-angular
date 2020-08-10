import { Component } from '@angular/core';

import { ConnectionService } from './lib/connection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  status = 'ONLINE';
  isConnected = true;

  constructor(private connectionService: ConnectionService) {
    this.connectionService.monitor().subscribe(isConnected => {
      // this.isConnected = isConnected;
      console.log(isConnected);
      this.isConnected = isConnected?.hasInternetAccess;

      if (this.isConnected) {
        this.status = "ONLINE";
      }
      else {
        this.status = "OFFLINE";
      }
    });
  }
}
