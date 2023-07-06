import { format,register } from 'timeago.js';
import Ko from 'timeago.js/lib/lang/ko';

// timeago.js 라이브러리 사용
register('ko', Ko);

export function formatAgo(date, lang = 'en_US') {
    return format(date, lang);
}