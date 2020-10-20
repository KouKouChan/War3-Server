"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerInstance = void 0;
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
    }
    /**
     * prepare to listen port
     * @returns void
     */
    listen() {
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
}
exports.ServerInstance = ServerInstance;
//# sourceMappingURL=serverinstance.js.map