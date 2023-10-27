import { ImageOptions } from "../constants/Constants";
import { getCreatedAt } from "../utils/resolvers";
import Client from "./Client";

export default class ClientUser {

    /**
     * The client of application
     */

    public client: Client;

    /**
     * The ID of bot
     */

    public id: string;

    /**
     * The username of bot
     */

    public username: string;

    /**
     * The discriminator of bot 
     */

    public discriminator: string;

    /**
     * Whether the user belongs to an OAuth2 application
     */

    public bot: boolean;

    /**
     * Whether the email on this account has been verified	
     */

    public verified: boolean;

    /**
     * Whether the user has two factor enabled on their account	
     */

    public mfaEnabled: boolean;

    /**
     * The public flags on a user's account	
     */

    public flags: number;

    /**
     * The bot avatar hash	
     */

    public avatar: string;

    /**
     * The user's display name, if it is set. For bots, this is the application name
    */

    public globalName: string;

    /**
     * The application flags
     */

    public applicationFlags: number;

    /**
     * The session type
     */

    public sessionType: string;

    /**
     * The Session ID
     */

    public sessionId: string;

    public constructor(client: Client, data: any) {
        this.client = client;
        this.id = data.user.id;
        this.username = data.user.username;
        this.discriminator = data.user.discriminator;
        this.bot = data.user.bot;
        this.verified = data.user.verified;
        this.mfaEnabled = data.user.mfa_enabled
        this.flags = data.user.flags;
        this.avatar = data.user.avatar;
        this.globalName = data.user.global_name;
        this.applicationFlags = data.application.flags;
        this.sessionType = data.session_type;
        this.sessionId = data.session_id;
    }

    public avatarURL(options?: ImageOptions) {
        if(this.avatar === null) {
            return null;
        }
        return `https://cdn.discordapp.com/avatars/${this.id}/${this.avatar}${this.avatar.startsWith('a_') ? '.gif' : '.png'}?size=${options?.size ? options?.size : 4096}`;
    }

    public get createdAt(): Date {
        return new Date(this.createdTimestamp);
    }

    public get createdTimestamp(): number {
        return getCreatedAt(this.id);
    }
};