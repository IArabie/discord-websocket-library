import Client from "../client/Client";

export default class APIApplicationCommand {
    public client: Client;
    public constructor(client: Client) {
        this.client = client;
    };
    public set(commands = []) {};
    public delete(commandId: string) {};
    public update(commandId: string, command = {}) {};
}