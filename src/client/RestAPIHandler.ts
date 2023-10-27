import { CreateInviteOptions, MessageSendOptions } from '../constants/Constants';
import { InviteTargetTypes } from '../constants/Enums';
import { headers } from '../constants/Payload';
import Message from '../models/Message';
import Client from './Client';

export default class RestAPIHandler {

    /**
     * The token of application
     */

    private _token = '';

    public constructor(private client: Client) {};

    public set token(Token: string) {
        this._token = Token;
        headers.Authorization = `Bot ${this._token}`;
    }

    public async createMessage(channelId: string, options: MessageSendOptions) {
        const MessageOptions = {
            content: options?.content,
            nonce: options?.nonce,
            tts: options?.tts,
            embeds: options?.embeds,
            message_reference: options?.messageReference,
            components: options?.components,
            flags: options?.flags,
            files: options?.files,
            sticker_ids: options?.stickers
        }
        const response = await fetch(`https://discord.com/api/v10/channels/${channelId}/messages`, {
            method: 'POST',
            headers,
            body: JSON.stringify(MessageOptions)
        })
        
        return await response.json();
    }

    public async createChannelInvite(channelId: string, options?: CreateInviteOptions) {
        const InviteOptions = {
            max_age: options?.maxAge,
            max_uses: options?.maxUses,
            temporary: options?.temporary,
            unique: options?.unique,
            target_type: options?.targetType,
            target_user_id: options?.targetUserID,
            target_application_id: options?.targetApplicationID
        }

        const response = await fetch(`https://discord.com/api/v10/channels/${channelId}/invites`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bot ${this._token}`,
                'X-Audit-Log-Reason': `${options?.reason ?? 'No reason was entered.'}`
            },
            body: JSON.stringify(InviteOptions)
        })

        return await response.json();
    }

    public async pinMessage(channelId: string, messageId: string, reason?: string) {
        await fetch(`https://discord.com/api/v10/channels/${channelId}/pins/${messageId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bot ${this._token}`,
                'X-Audit-Log-Reason': `${reason ?? 'No reason was entered.'}`
            }
        })
    }

    public async unpinMessage(channelId: string, messageId: string, reason?: string) {
        await fetch(`https://discord.com/api/v10/channels/${channelId}/pins/${messageId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bot ${this._token}`,
                'X-Audit-Log-Reason': `${reason ?? 'No reason was entered.'}`
            }
        })
    }

    public async deleteMessage(channelId: string, messageId: string, reason?: string) {
        await fetch(`https://discord.com/api/v10/channels/${channelId}/messages/${messageId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bot ${this._token}`,
                'X-Audit-Log-Reason': `${reason ?? 'No reason was entered.'}`
            }
        })
    }
}