import Client from '../Client';

export default async function(client: Client, code: number, reason: string) {
    switch(code) {
        case 4000 :
            throw new TypeError('[UNKNOWN_ERROR] : We\'re not sure what went wrong. Try reconnecting?')
        break;
        case 4001:
            throw new TypeError('[UNKNOWN_OPCODE] : You sent an invalid Gateway opcode or an invalid payload for an opcode. Don\'t do that!');
        break;
        case 4004: 
            throw new TypeError('[TOKEN_INVALID] : The account token sent with your identify payload is incorrect.');
        break;
        case 4005:
            throw new TypeError('[ALREADY_AUTHENTICATED] : You sent more than one identify payload. Don\'t do that!');
        break;
        case 4012: 
            throw new TypeError('[INVALID_VERSION] : You sent an invalid version for the gateway.');
        break;
        case 4013: 
            throw new TypeError('[INVALID_INTENT] : You sent an invalid intent for a Gateway Intent');
        break;
        case 4014:
            throw new TypeError('[DISALLOWED_INTENT] : You sent a disallowed intent for a Gateway Intent. You may have tried to specify an intent that you have not enabled or are not approved for.')
    }
} 