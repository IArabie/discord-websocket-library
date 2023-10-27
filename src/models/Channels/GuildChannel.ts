import Client from "../../client/Client";
import { CreateInviteOptions } from "../../constants/Constants";
import { ChannelTypes } from "../../constants/Enums";

export default class GuildChannel {

    /**
     * The client of application
     */

    public client: Client;

    /**
     * The ID of the Channel
     */

    public id: string;

    /**
     * The type of channel
     */

    public type: number;

    /**
     * The name of channel
     */

    public name: string;

    public constructor(client: Client, data: any) {
        this.client = client;;
        this.id = data.id;
        this.type = data.type;
        this.name = data.name;
    };

    public createChannelInvite(options?: CreateInviteOptions) {
        return this.client.rest.createChannelInvite(this.id, options);
    };
}