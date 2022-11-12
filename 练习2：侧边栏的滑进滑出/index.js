function setRem() {
    var ui_w = 375;
    var client_w = document.documentElement.clientWidth || document.body.clientWidth;
    client_w = client_w < 300 ? 300 : client_w;
    client_w = client_w > 600 ? 600 : client_w;
    var html = document.getElementsByTagName('html')[0];
    html.style.fontSize = (client_w / ui_w) * 10 + 'px';
}
setRem();
var timer = null;
window.onresize = function () {
    clearTimeout(timer);
    timer = setTimeout(setRem, 200);
}
// 蒙版
var user = document.getElementsByClassName('user')[0];
var ban = document.getElementsByClassName('ban')[0];
user.onclick = function () {
    ban.style.display = 'block';
    window.event ? window.event.cancelBubble = true : event.stopPropagation();
}
document.onclick = function () {
    ban.style.display = 'none';
}
ban.onclick = function () {
    window.event ? window.event.cancelBubble = true : window.event.stopPropagation();
    ban.style.display = 'block';
}
