import {Injectable, OnInit} from '@angular/core';
import { Socket } from 'ngx-socket-io';

// class TestClass {
//
//   constructor(socketService: SocketService) {
//
//     socketService.fromMessage();
//
//   }//
//
//
// }
//
// class ChatComponent implements OnInit{
//
//   constructor(
//     private socketService: SocketService
//   ) {
//
//     const testObject: TestClass = new TestClass(socketService);
//
//   }
//
//   ngOnInit(): void {
//   }
//
//
// }

@Injectable()
export class SocketService {

  constructor(
    private socket: Socket
  ) {

    console.log('SocketService was created!');

  }//constructor

  sendMessage(message: string , data: any){
    this.socket.emit(message, data );
  }//sendMessage

  getMessage(message: string) {
    return this.socket
      .fromEvent(message);
  }//getMessage

}//SocketService
