import md5 from 'md5';


/**
 * md5加密
 */
export default function md5Encryption(
    message: string | Buffer | number[] | Uint8Array
) {
    const KEY = md5('chenguzhen87');
    return md5(KEY + md5(message));
}