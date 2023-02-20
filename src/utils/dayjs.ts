import dayjs from 'dayjs';
/**
 * 格式化时间
 */
export function dayjsFormat(
    date?: string | number | Date | dayjs.Dayjs | null | undefined,
    template?: string | undefined
) {
    return dayjs(date).format(template);
}