import Client from "../client/Client";
import APIApplicationCommand from "./APIApplicationCommand";

export default class ClientApplication {
    public id: string;

    public flags: number;
    
    public client: Client;

    public constructor(client: Client, data: any) {
        this.id = data.application.id;
        this.client = client;
        this.flags = data.application.flags;

    };

    public get commands(): APIApplicationCommand {
        return new APIApplicationCommand(this.client);
    }
};