function setRem() {
    var ui_w = 375;
    var client_w = document.documentElement.clientWidth || document.body.clientWidth;
    client_w = client_w > 650 ? 650 : client_w;
    client_w = client_w < 320 ? 320 : client_w;
    var html = document.getElementsByTagName('html')[0];
    html.style.fontSize = (client_w / ui_w) * 10 + 'px';
}
setRem();
var timer = null;
window.onresize = function () {
    clearTimeout(timer);
    timer = setTimeout(setRem, 200)
}