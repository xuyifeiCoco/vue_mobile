Date.prototype.Format = function (fmt) { //
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
/**
 * 
 * @param {*} val 
 * @param {*} arr 
 * @param {*} key 需要比较的key
 */
function getLabel(val, arr, key) {
    let obj = {}, ar;
    if (arr instanceof Array) {
        ar = arr.filter(item => {
            return item[key] == val;
        })
    }
    if (ar && ar.length == 1) {
        obj = ar[0]
    }
    return obj
}


export default {
    // Vue.js的插件应当有一个公开方法 install。这个方法的第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象。
    install: function (Vue) {
        Vue.prototype.$getLabel = (val, arr, key = 'code') => getLabel(val, arr, key)

    },
}