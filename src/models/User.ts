import Client from "../client/Client";

export default class User {

    public id: string;

    public constructor(client: Client, data: any) {
        this.id = data.id;
    }
}