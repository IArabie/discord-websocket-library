import Client from '../Client';
import InteractionCreate from './WSEvents/InteractionCreate';
import MessageCreate from './WSEvents/MessageCreate';
import MessageDelete from './WSEvents/MessageDelete';
import MessageReactionAdd from './WSEvents/MessageReactionAdd';
import MessageReactionRemove from './WSEvents/MessageReactionRemove';
import MessageUpdate from './WSEvents/MessageUpdate';
import ClientReady from './WSEvents/Ready';

export default async function(client: Client, event: string, data: any) {

    /**
     * Ready
     * 
     * https://discord.com/developers/docs/topics/gateway#ready
     */


    if(event === 'READY') return ClientReady(client, data);
    

    /**
     * Message Create
     * 
     * https://discord.com/developers/docs/topics/gateway#message-create
     */

    else if(event === 'MESSAGE_CREATE') return MessageCreate(client, data);

    /**
     * Message Delete
     * 
     * https://discord.com/developers/docs/topics/gateway#message-delete
     */

    else if(event === 'MESSAGE_DELETE') return MessageDelete(client, data);

    /**
     * Message Update
     * 
     * https://discord.com/developers/docs/topics/gateway#message-update
     */

    else if(event === 'MESSAGE_UPDATE') return MessageUpdate(client, data);

    /**
     * Message Reaction Add
     * 
     * https://discord.com/developers/docs/topics/gateway#message-reaction-add
     */

    else if(event === 'MESSAGE_REACTION_ADD') return MessageReactionAdd(client, data);

    /**
     * Message Reaction Remove
     * 
     * https://discord.com/developers/docs/topics/gateway#message-reaction-remove
     */

    else if(event === 'MESSAGE_REACTION_REMOVE') return MessageReactionRemove(client, data);


    /**
     * Interaction Create
     *
     * https://discord.com/developers/docs/topics/gateway#interaction-create
     */

    else if(event === 'INTERACTION_CREATE') return InteractionCreate(client, data);

}