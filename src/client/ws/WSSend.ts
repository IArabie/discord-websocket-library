import { WebSocket } from "ws";
import { grey } from 'chalk';
import Client from "../Client";

export default async function(client: Client, ws: WebSocket) {

    client.emit('debug', grey('Sending Identify Request to WebSocket Server'))

    const Payload = {
        op: 2,
        d: {
            token: client.token,
            intents: client.options.intents,
            properties: {
                os: process.platform,
                browser: client.options.phoneStatus ? 'Discord iOS': 'ArabieDev',
                device: process.platform
            }
        }
    }

    client.emit('debug', `Provided token: ${client.token}`);


    ws.send(JSON.stringify(Payload));

    client.emit('debug', grey('✔ WebSocket has been connected'));
};
