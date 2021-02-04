import { Component } from '@angular/core'
import { SocketService } from './services/socket.service'

@Component({
	selector: 'tcc-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'chattious';

	constructor(private socket: SocketService) {}
}
