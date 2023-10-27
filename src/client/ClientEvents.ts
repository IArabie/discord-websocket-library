import GuildMember from '../models/GuildMember';
import Message from '../models/Message';

export default interface ClientEvents {
    ready: (user: any) => void;
    debug: (message: string) => void;
    interactionCreate: (interaction: any) => void;
    messageCreate: (message: Message) => void;
    messageDelete: (message: Message) => void;
    messageUpdate: (message: Message) => void;
    messageReactionAdd: (reaction: any) => void;
    messageReactionRemove: (reaction: any) => void;
};