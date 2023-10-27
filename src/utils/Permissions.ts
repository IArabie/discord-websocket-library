export default class Permissions {
    public bitfield: any;
    public constructor(bits: number = 0) {
        this.bitfield = Permissions.resolve(bits);
    }
    public static FLAGS = {
        ADMINISTRATOR: 1 << 3,
        MANAGE_CHANNELS: 1 << 4
    };
    public static DEFAULT_BITS: number = 0;
    public static resolve(bits: number) {
        const { DEFAULT_BITS, FLAGS } = this;
        if(typeof DEFAULT_BITS === typeof bits && bits >= DEFAULT_BITS) return bits;
        if(Array.isArray(bits)) {
            return bits.map((bit) => new Permissions(bit)).reduce((a: any, b: any) => a | b, DEFAULT_BITS);
        }
        if(typeof bits === 'string') {
            if(!isNaN(bits)) return typeof DEFAULT_BITS === 'bigint' ? BigInt(bits) : Number(bits);
            if(FLAGS[bits] !== undefined) return FLAGS[bits];
        }
        throw new TypeError('[BITFIELD_INVALID] : ' + bits);
    }

    public has(bits: any) {
        bits = Permissions.resolve(bits);
        (this.bitfield & bits) === bits;
    }
}