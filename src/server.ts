
//将源目录的模块加进搜索目录
import 'app-module-path/register'

import {ServerInstance} from 'serverinstance'
 
const version:string = "0.0.1"
const port_tcp:number = 6112
const port_track:number = 6114
const server_host:string = "192.168.3.30"

async function startserver(){
    console.log("Warcraft III Server "+version+" ,developer:KouKouChan")
    console.log("This server supports classical warcraft 3.")
    console.log("Thx to bnetd for source code ,and L-leite for cso2-master-server.")
    console.log("This is a free open source software.")
    console.log("Please follow the GPL v3 permit to use it.\n")

    const mainserver:ServerInstance = new ServerInstance({
        ServerName:server_host,
        ServerPort:port_tcp,
        ServerUDPPort:port_tcp,
    })

    mainserver.listen()
}

startserver() 