import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';  
//  import {Observer} from 'rxjs';
// import { Observable } from 'rxjs';
// import * as Rx from 'rxjs';
// import * as io from 'socket.io-client';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SocketService {
//   observable:Observable<string>;
//   socket;
//   constructor() {
//     this.socket=io('http://localhost:7000');     
//    }

//    getData():Observable<string>{
//     return  this.observable=new Observable((observer)=>{
//       this.socket.on('hello',(data)=>observer.next(data)
//     );}) 
//   }
// //This one is for send data from angular to node 
//   pushData(e){
//     this.socket.emit('hello',e);
//   }

constructor(public socket: Socket) { }
getMessage() {
  console.log('response')
  return this.socket
      .fromEvent<any>('msg').pipe(data => data);
}

sendMessage(msg: string) {
  this.socket.emit('msg', msg);
}
}
