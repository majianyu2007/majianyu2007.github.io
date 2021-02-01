//判断F12审查元素
function fuckyou() {
    window.close(); //关闭当前窗口(防抽)
    window.location = "about:blank"; //将当前窗口跳转置空白页
}
 
function ck() {
    console.profile();
    console.profileEnd();
    //判断profiles里有无内容,若有,则说明按下了F12
    if(console.clear) {
        console.clear()
    };
    if(typeof console.profiles == "object") {
        return console.profiles.length > 0;
    }
}
 
function hehe() {
    if((window.console && (console.firebug || console.table && /firebug/i.test(console.table()))) || (typeof opera == 'object' && typeof opera.postError == 'function' && console.profile.length > 0)) {
        fuckyou();
    }
    if(typeof console.profiles == "object" && console.profiles.length > 0) {
        fuckyou();
    }
}
hehe();
window.onresize = function() {
    if((window.outerHeight - window.innerHeight) > 200)
        //判断当前窗口内页高度和窗口高度,如果差值大于200，那么则说明浏览器调试框已被打开
        fuckyou();
    }