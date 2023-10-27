import Client from "../client/Client";
import { MessageSendOptions } from "../constants/Constants";
import GuildChannel from "./Channels/GuildChannel";

export default class Message {

    /**
     * The application client
     */

    public client: Client;


    /**
     * The Message ID
     */

    public id: string;

    /**
     * The Message Content
     */

    public content: string;

    /**
     * The Type of Message
     */

    public type: number;

    /**
     * The ID of the channel of the message
     */

    public channelId: string;

    /**
     * The ID of the Guild of the message
     */

    public guildId: string;

    /**
     * Whether this message is pinned
     */
    
    public pinned: boolean;
    
    /**
     * The Timestamp the message was sent at
     */

    public createdTimestamp: number;

    /**
     * The timestamp the message was last edited at
     */

    public editedTimestamp: Date;

    /**
     * A generally increasing integer (there may be gaps or duplicates) that represents the approximate position of the message in a thread.
     */

    public position: number;

    /**
     * Whether or not the message was Text-To-Speech
     */

    public tts: boolean;

    /**
     * The channel that the message was sent in
     */

    public channel: GuildChannel;

    /**
     * An array of of action rows in the message.
     */

    public components: string[];

    /**
     * An array of embeds in the message - e.g. YouTube Player.
     */

    public embeds: string[]

    /**
     * The URL to jump to this message
     */

    public get url(): string {
        return `https://discord.com/channels/${this.guildId}/${this.channelId}/${this.id}`;
    }

    /**
     * The time the message was sent at
     */

    public get createdAt(): number {
        return new Date(this.createdTimestamp).getTime();
    }

    public constructor(client: Client, data: any) {
        this.client = client;
        this.id = data.id;
        this.content = data.content;
        this.type = data.type;
        this.channelId = data.channel_id;
        this.guildId = data.guild_id;
        this.pinned = data.pinned;
        this.createdTimestamp = data.timestamp;
        this.editedTimestamp = data.edited_timestamp;
        this.position = 0;
        this.tts = data.tts;
        this.channel = new GuildChannel(this.client, data.channel_id);
        this.components = data.components;
        this.embeds = data.embeds;
    }

    public async reply(options: MessageSendOptions) {
        options.messageReference = { id: this.id };
        return this.client.rest.createMessage(this.channelId, options)
    };

    /**
     * The time the message was last edited at 
     */

    public get editedAt(): number {
        return new Date(this.editedTimestamp).getTime();
    }


    public async delete(options?: { reason: string }): Promise<Message> {
        await this.client.rest.deleteMessage(this.channelId, this.id, options?.reason)
        return this;
    }

    public async pin(options?: { reason: string; }): Promise<Message> {
        await this.client.rest.pinMessage(this.channelId, this.id, options?.reason)
        return this;
    }

    public async unpin(options?: { reason: string }): Promise<Message> {
        await this.client.rest.unpinMessage(this.channelId, this.id, options?.reason);
        return this;
    }
}

// {
//     type: 0,
//     tts: false,
//     timestamp: '2023-10-16T13:54:42.967000+00:00',
//     referenced_message: null,
//     pinned: false,
//     nonce: '1163475107830562816',
//     mentions: [],
//     mention_roles: [],
//     mention_everyone: false,
//     member: {
//       roles: [
//         '1148553135435030619',
//         '1139718729836527716',
//         '1140662757809725500',
//         '1140953810244743239'
//       ],
//       premium_since: null,
//       pending: false,
//       nick: null,
//       mute: false,
//       joined_at: '2023-08-10T22:36:39.178000+00:00',
//       flags: 0,
//       deaf: false,
//       communication_disabled_until: null,
//       avatar: null
//     },
//     id: '1163475111765094441',
//     flags: 0,
//     embeds: [],
//     edited_timestamp: null,
//     content: '505',
//     components: [],
//     channel_id: '1142058506590093312',
//     author: {
//       username: '5_5y',
//       public_flags: 4194560,
//       id: '779034600415428608',
//       global_name: 'Boda',
//       discriminator: '0',
//       avatar_decoration_data: null,
//       avatar: '429067f7db347e3dd1182ba7b2c8b049'
//     },
//     attachments: [],
//     guild_id: '1139326473900134430'
//   }