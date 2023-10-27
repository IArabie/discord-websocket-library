// const FLAGS = {};
// const DEFAULT_BITS = 0;

import { Colors } from "../constants/Constants";

// export function resolvePermissions(bits: number) {
//     if(typeof DEFAULT_BITS === typeof bits && bits >= DEFAULT_BITS) return bits;
//     if(Array.isArray(bits)) {
//         return bits.map((bit) => resolvePermissions(bit)).reduce((a, b) => a | b, DEFAULT_BITS);
//     }
//     if(typeof bits === 'string') {
//         if(!isNaN(bits)) return typeof DEFAULT_BITS === 'bigint' ? BigInt(bits) : Number(bits);
//         if(FLAGS[bits] !== undefined) return FLAGS[bits];
//     }
//     throw new TypeError('[BITFIELD_INVALID] : ' + bits);
// }


export function getCreatedAt(id: any) {
    const DiscordEpoch = Math.floor(id / 4194304);
    return DiscordEpoch + 1420070400000;
}

export function resolveColor(color: number) {
    if(typeof color === 'string') {
        if(color === 'RANDOM') return Math.floor(Math.random() * (0xffffff + 1));
        if(color === 'DEFAULT') return 0;
        color = Colors[color];
    } else if(Array.isArray(color)) {
        color = (color[0] << 16) + (color[1] << 8) + color[2];
    }

    if(color < 0 || color > 0xffffff) throw new RangeError('COLOR_RANGE')
    else if((Number.isNaN(color))) throw new TypeError('COLOR_CONVERT');

    return color;
}