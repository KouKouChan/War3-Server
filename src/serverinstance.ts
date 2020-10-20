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

    }

    /**
     * prepare to listen port
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

}