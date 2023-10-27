import createEnumeration from './createEnumeration';

export const ChannelTypes = createEnumeration([
    'GUILD_TEXT',
    'PRIVATE_CHANNEL',
    'GUILD_VOICE',
    'GROUP_DM',
    'GUILD_CATEGORY',
    'GUILD_ANNOUNCEMENT',
    null,
    null,
    null,
    null,
    'ANNOUNCEMENT_THREAD',
    'PUBLIC_THREAD',
    'PRIVATE_THREAD',
    'GUILD_STAGE_VOICE',
    'GUILD_DIRECTORY',
    'GUILD_FORUM',
    'GUILD_MEDIA'
])

export const InviteTargetTypes = createEnumeration([null, 'STREAM', 'EMBEDDED_APPLICATION'])