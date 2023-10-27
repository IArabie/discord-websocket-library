import Message from '../../../models/Message';
import Client from '../../Client';

export default async function(client: Client, data: any) {
    client.emit('messageCreate', new Message(client, data));
}