function setRem() {
    var ui_w = 375;
    var client_w = document.documentElement.clientWidth || document.body.clientWidth;
    // client_w = client_w < 253 ? 253 : client_w;
    client_w = client_w < 347 ? 347 : client_w;
    var html = document.getElementsByTagName('html')[0];
    html.style.fontSize = (client_w / ui_w) * 10 + 'px';
}
setRem();
var timer = null;
window.onresize = function () {
    clearTimeout(timer);
    timer = setTimeout(setRem, 200);
}
// 图片懒加载
function load() {
    var scrool_t = document.documentElement.scrollTop || document.documentElement.scrollTop;

    var client_h = document.documentElement.clientHeight || document.body.clientHeight;
    var imgs = document.getElementsByClassName('images');
    for (var img of imgs) {
        if ((img.offsetTop - 100 <= (scrool_t + client_h)) && img.getAttribute('data-realSrc')) {
            var realSrc = img.getAttribute('data-realSrc');
            img.src = realSrc;
            img.removeAttribute('data-realSrc');
        }
    }
}
load();
window.onscroll = load;