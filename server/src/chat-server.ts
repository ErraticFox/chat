import { createServer } from 'http'
import path from 'path'
import express from 'express'
import { Server } from 'socket.io'

import { Message } from './model/chat-model'

export class ChatServer {
	public static readonly PORT: number = 3000;
	private app: express.Application
	private server: Server
	private io: SocketIO.Server
	private port: string | number

	constructor() {
		this.createApp()
		this.config()
		this.createServer()
		this.middleware()
		this.sockets()
		this.listen()
	}

	private createApp(): void {
		this.app = express()
	}

	private createServer(): void {
		// @ts-ignore
		this.server = createServer(this.app)
	}

	private config(): void {
		this.port = process.env.PORT || ChatServer.PORT
	}

	private sockets(): void {
		// @ts-ignore
		this.io = new Server(this.server, {
			cors: {
				origin: "http://localhost:4200",
				credentials: true
			}
		})
	}

	private middleware() {
		this.app.use(express.static(path.join(__dirname, '../', '../', 'chattious', 'dist')))
	}

	private listen(): void {
		// @ts-ignore
		this.server.listen(this.port, () => {
			console.log('Running server on port %s', this.port)
		})

		this.io.on('connection', (socket: any) => {
			console.log('Connected client on port %s.', this.port)
		})

		this.io.on('connect', (socket: any) => {
			console.log('Connected client on port %s.', this.port)
			socket.on('message', (m: Message) => {
				console.log('[server](message): %s', JSON.stringify(m))
				this.io.emit('message', m)
			})

			socket.on('test', () => console.log('test'))

			socket.on('disconnect', () => {
				console.log('Client disconnected')
			})
		})
	}

	public getApp(): express.Application {
		return this.app
	}
}