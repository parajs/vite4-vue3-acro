
export const successResponseWrap = (data: unknown) => {
    return {
        data,
        msg: '请求成功',
        code: 200,
    };
};

export const failResponseWrap = (data: unknown, msg: string, code = 500) => {
    return {
        data,
        msg,
        code,
    };
};