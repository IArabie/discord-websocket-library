import Client from "../../Client";
import ClientUser from "../../ClientUser";

export default async function(client: Client, data: any) {
    client.readyAt = new Date();
    client.readyTimestamp = new Date().getTime();
    client.user = new ClientUser(client, data);
    client.emit('ready', data);
}