export const GatewayURL = 'wss://gateway.discord.gg/?v=10&encoding=json';

export const headers = {
    'Content-Type': 'application/json',
    Authorization: ''
};

export interface Payload {
    op: number;
    s: number;
    t: string;
    d: any;
}