import net from 'net'
import dgram from 'dgram'


declare let process: any;

export interface ServerOption{
    ServerName:string
    ServerPort: number
    ServerUDPPort: number
}

/**
 * 服务器主函数类
 * @class ServerInstance
 */
export class ServerInstance{
    private server: net.Server
    private udpserver: dgram.Socket
    private serverName: string
    private serverPort: number
    private serverUDPPort: number

    constructor(options:ServerOption){
        //设置服务器参数
        this.serverName = options.ServerName
        this.serverPort = options.ServerPort
        this.serverUDPPort = options.ServerUDPPort
        
        //设置服务器TCP/UDP
        this.server = net.createServer()
        this.udpserver = dgram.createSocket('udp4')

        this.server
            .on('connection', (socket: net.Socket) => {
                this.onHandleConnection(socket)
            })
            .on('close', () => {
                this.onServerClose()
            })
            .on('error', (err: Error) => {
                this.onServerError(err)
            })
            .on('listening', () => {
                this.onListening()
            })

        this.udpserver
            .on('error', (err: Error) => {
                this.onUDPServerError(err)
            })
            .on('message', (msg: Buffer, rinfo: net.AddressInfo) => {
                this.onUDPPacket()
            })
            .on('listening', () => {
                this.onUDPListening()
            })
    }

    /**
     * prepare to listening
     * @returns void 
     */
    public listen(): void {
        this.server.listen(this.serverPort, this.serverName)
        this.udpserver.bind(this.serverUDPPort, this.serverName)
    }

    /**
     * stop current server
     * @returns void
     */
    public stop(): void {
        this.server.close()
        process.exit(0)
    }

    /**
     * server start info
     * @returns void
     */
    private onListening():void {
        const address: net.AddressInfo =
            this.server.address() as net.AddressInfo
        console.log('server tcp is now listening at ' +
            address.address + ':' + address.port)
    }

    private onUDPListening(): void {
        const address: net.AddressInfo = this.udpserver.address() as net.AddressInfo
        console.log('server udp is now listening at ' + 
            address.address + ':' + address.port)
    }

    /**
     * calls when server stops
     * @returns void
     */
    private onServerClose():void{
        console.log('server closed')
        this.udpserver.close()
    }

    /**
     * Called when a server error occurs
     * @param err - the server error
     * @returns void
     */
    private onServerError(err: Error): void {
        console.log('server error: ' + err.message)
        throw err
    }

    private onUDPServerError(err: Error): void {
        console.log('udp server error: ' + err.message)
        throw err
    }

    /**
     * calls when get a new connection
     * @returns void
     */
    private onHandleConnection(socket: net.Socket):void{
        console.log('new client connected ' +
        socket.remoteAddress + ':' + socket.remotePort)

        this.onPacket()
    }

    /**
     * handle incoming packet
     * @param
     */
    private onPacket():void {

    } 

    private onUDPPacket():void {

    } 

}