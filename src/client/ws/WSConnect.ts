import { WebSocket } from 'ws';
import { grey } from 'chalk';
import Client from '../Client';
import { GatewayURL } from '../../constants/Payload';
import WSSend from './WSSend';
import WSError from './WSError';
import WSMessage from './WSMessage';


export default async function(client: Client, token: string, intents: any) {


    client.emit('debug', grey('Connecting to Discord Gateway'));

    const Response = await fetch('https://discord.com/api/v10/gateway/bot', {
        method: 'GET',
        headers: {
            Authorization: `Bot ${client.token}`
        }
    })

    const response = await Response.json();

    client.emit('debug', (`${JSON.stringify(response, null, 4)}`));

    const ws = new WebSocket('wss://gateway.discord.gg/?v=10&encoding=json');

    /**
     * # WebSocket Open
     */

    ws.on('open', async() => await WSSend(client, ws));

    /**
     * # WebSocket Message
     */

    ws.on('message', async(message: string) => await WSMessage(client, message, ws));

    /**
     * # WebSocket Error Catch
     */

    ws.on('close', async(code, reason: string) => await WSError(client, code, reason));
}