const copy = source => {
    let target, i;
    if (typeof source !== 'object' || source === null) {
        target = source;
    } else if (Object.prototype.toString.call(source) === '[object Array]') {
        target = [];
        for (i in source) {
            target.push(copy(source[i]));
        }
    } else {
        target = {};
        for (i in source) {
            target[i] = copy(source[i]);
        }
    }
    return target;
};

const getTimeStr = (time, isShort = false) => {
    if (isNumber(time)) time = new Date(time);
    if (!isDate(time)) return '';
    let format = isShort ? 'YYYY-MM-dd' : 'YYYY-MM-dd hh:mm:ss';
    const date = {
        'M+': time.getMonth() + 1,
        'd+': time.getDate(),
        'h+': time.getHours(),
        'm+': time.getMinutes(),
        's+': time.getSeconds(),
        'q+': Math.floor((time.getMonth() + 3) / 3),
        'S+': time.getMilliseconds()
    };
    if (/(y+)/i.test(format)) {
        format = format.replace(RegExp.$1, (time.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in date) {
        if (new RegExp('(' + k + ')').test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? date[k] : ('00' + date[k]).substr(('' + date[k]).length));
        }
    }
    return format;
};


export {
    copy,
    getTimeStr
}
