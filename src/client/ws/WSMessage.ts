import { WebSocket } from 'ws';
import { Payload } from '../../constants/Payload';
import Client from '../Client';
import WSEvents from './WSEvents';

export default async function(client: Client, message: string, ws: WebSocket) {

    const payload: Payload = JSON.parse(message.toString());
    
    const heartbeat = async(ms: number) => {
        return setInterval(() => {
            ws.send(JSON.stringify({
                op: 1,
                d: null,
            }))
        }, ms)
    }

    if(payload.op === 0) await WSEvents(client, payload.t, payload.d);
    else if(payload.op === 10) {
        const { heartbeat_interval } = payload.d;
        heartbeat(heartbeat_interval);
    }
};
