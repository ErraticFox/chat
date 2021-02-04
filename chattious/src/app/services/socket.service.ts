import { Injectable } from '@angular/core'
import * as io from 'socket.io-client';

@Injectable({
	providedIn: 'root'
})
export class SocketService {

	private io: SocketIOClient.Socket

	constructor() {
		this.io = io('http://localhost:3000')
	}

	sendMessage() {
		this.io.emit('test')
	}


}
