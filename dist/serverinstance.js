"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerInstance = void 0;
const net_1 = __importDefault(require("net"));
const dgram_1 = __importDefault(require("dgram"));
/**
 * 服务器主函数类
 * @class ServerInstance
 */
class ServerInstance {
    constructor(options) {
        //设置服务器参数
        this.serverName = options.ServerName;
        this.serverPort = options.ServerPort;
        this.serverUDPPort = options.ServerUDPPort;
        //设置服务器TCP/UDP
        this.server = net_1.default.createServer();
        this.udpserver = dgram_1.default.createSocket('udp4');
        this.server
            .on('connection', (socket) => {
            this.onHandleConnection(socket);
        })
            .on('close', () => {
            this.onServerClose();
        })
            .on('error', (err) => {
            this.onServerError(err);
        })
            .on('listening', () => {
            this.onListening();
        });
        this.udpserver
            .on('error', (err) => {
            this.onUDPServerError(err);
        })
            .on('message', (msg, rinfo) => {
            this.onUDPPacket();
        })
            .on('listening', () => {
            this.onUDPListening();
        });
    }
    /**
     * prepare to listening
     * @returns void
     */
    listen() {
        console.log("Warcraft III Server " + version + " ,developer:KouKouChan");
        console.log("This server supports classical warcraft 3.");
        console.log("Thx to bnetd for source code ,and L-leite for cso2-master-server.");
        console.log("This is a free open source software.");
        console.log("Please follow the GPL v3 permit to use it.\n");
        this.server.listen(this.serverPort, this.serverName);
        this.udpserver.bind(this.serverUDPPort, this.serverName);
    }
    /**
     * stop current server
     * @returns void
     */
    stop() {
        this.server.close();
        process.exit(0);
    }
    /**
     * server start info
     * @returns void
     */
    onListening() {
        const address = this.server.address();
        console.log('server tcp is now listening at ' +
            address.address + ':' + address.port);
    }
    onUDPListening() {
        const address = this.udpserver.address();
        console.log('server udp is now listening at ' +
            address.address + ':' + address.port);
    }
    /**
     * calls when server stops
     * @returns void
     */
    onServerClose() {
        console.log('server closed');
        this.udpserver.close();
    }
    /**
     * Called when a server error occurs
     * @param err - the server error
     * @returns void
     */
    onServerError(err) {
        console.log('server error: ' + err.message);
        throw err;
    }
    onUDPServerError(err) {
        console.log('udp server error: ' + err.message);
        throw err;
    }
    /**
     * calls when get a new connection
     * @returns void
     */
    onHandleConnection(socket) {
        console.log('new client connected ' +
            socket.remoteAddress + ':' + socket.remotePort);
        this.onPacket();
    }
    /**
     * handle incoming packet
     * @param
     */
    onPacket() {
    }
    onUDPPacket() {
    }
}
exports.ServerInstance = ServerInstance;
//# sourceMappingURL=serverinstance.js.map