import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { SocketService } from './services/socket.service'

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io'

const config: SocketIoConfig = { url: 'http://localhost:3000', options: { 'transports': ['websocket', 'polling'] } }

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		// SocketIoModule.forRoot(config)
	],
	providers: [SocketService],
	bootstrap: [AppComponent]
})
export class AppModule { }
