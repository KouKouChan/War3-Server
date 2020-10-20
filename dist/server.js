"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
//将源目录的模块加进搜索目录
require("app-module-path/register");
const serverinstance_1 = require("serverinstance");
const version = "0.0.1";
const port_tcp = 6112;
const port_track = 6114;
const server_host = "192.168.3.30";
function startserver() {
    return __awaiter(this, void 0, void 0, function* () {
        const mainserver = new serverinstance_1.ServerInstance({
            ServerName: server_host,
            ServerPort: port_tcp,
            ServerUDPPort: port_tcp,
        });
        mainserver.listen();
    });
}
startserver();
//# sourceMappingURL=server.js.map