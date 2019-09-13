import { Component } from '@angular/core';
import{SocketService} from '../app/socket.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chatApplication';
  // chat;
  // constructor(private cService:SocketService){
  //   this.cService.getData().subscribe(data=>console.log(data));
  // }

  // send(e:string){
  //   this.cService.pushData(e);
  //   this.chat='';
  // }
  constructor(private socketService: SocketService) {}
 incomingmsg = [];
  msg = 'First Protocol';
  ngOnInit() {
    this.socketService
        .getMessage()
        .subscribe(msg => {
          console.log('Incoming msg', msg);
        });
        this.send(this.msg);
  }
  send(m:string) {
    console.log('sdsd', m);
    this.socketService.sendMessage(m);
 }
}
