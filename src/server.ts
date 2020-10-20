import {ServerInstance} from './serverinstance'

const version:string = "0.0.1"
const port_tcp:number = 6112
const port_track:number = 6114
const server_name:string = "War3-Server"

async function startserver(){
    console.log("Warcraft III Server "+version+" , author:KouKouChan")
    console.log("This server supports classical warcraft 3 , thx to bnetd for their source code.")
    console.log("This is a free open source software.")
    console.log("Please follow the GPL v3 permit to use it.")

    const mainserver:ServerInstance = new ServerInstance({
        ServerName:server_name,
        ServerPort:port_tcp,
        ServerUDPPort:port_track,
    })

    //mainserver.stop()
}

startserver()