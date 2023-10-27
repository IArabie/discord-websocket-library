import { EventEmitter } from 'events';
import ClientEvents from './ClientEvents';
import ClientUser from './ClientUser';
import RestAPIHandler from './RestAPIHandler';
import { ClientOptions, Intents } from '../constants/Constants';
import WSConnect from './ws/WSConnect';
import ClientApplication from '../models/ClientApplication';
import Collection from '../models/Collection';
import User from '../models/User';

export default interface Client {
    user: ClientUser;
    on<Event extends keyof ClientEvents>(event: Event, listener: ClientEvents[Event]): this;
    rest: RestAPIHandler;
    options: ClientOptions;
    readyAt: Date;
    readyTimestamp: number;
    token: string;
    users: Collection<string, User>;
}

export default class Client extends EventEmitter {
    public constructor(token: string, options: ClientOptions) {
        super();
        this.rest = new RestAPIHandler(this);
        this.token = token;
        this.options = options;
        this.users = new Collection();
        this.rest.token = token;

        if(this.options.hasOwnProperty('intents')) {
            if(Array.isArray(this.options.intents)) {
                let bigints = 0;
                for (const intent of this.options.intents) {
                    if(typeof intent === 'number') {
                        bigints |= intent;
                    } else if(Intents[intent]) {
                        bigints |= Intents[intent];
                    } else {
                        this.emit('debug', `Unknown Intent: ${intent}`)
                    }
                }

                this.options.intents = bigints;
            }
        }

        WSConnect(this, this.token, this.options.intents);
    }

    public get application(): ClientApplication {
        return new ClientApplication(this, '');
    }
}