const arr = ['Number', 'String', 'Function', 'Array', 'Object', 'Date'];
arr.forEach((item, i) => {
    window[`is${item}`] = (str2) => {
        return Object.prototype.toString.call(str2) === `[object ${item}]`;
    }
})
