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
require("app-module-path/register");
const serverinstance_1 = require("serverinstance");
const version = "0.0.1";
const port_tcp = 6112;
const port_track = 6114;
const server_name = "War3-Server";
function startserver() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Warcraft III Server " + version + " , author:KouKouChan");
        console.log("This server supports classical warcraft 3 , thx to bnetd for their source code.");
        console.log("This is a free open source software.");
        console.log("Please follow the GPL v3 permit to use it.");
        const mainserver = new serverinstance_1.ServerInstance({
            ServerName: server_name,
            ServerPort: port_tcp,
            ServerUDPPort: port_track,
        });
        //mainserver.stop()
    });
}
startserver();
//# sourceMappingURL=server.js.map