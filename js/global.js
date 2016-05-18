/**
 * Created by wangwangstar on 2016/5/17.
 */
function addLoadEvent(func) {
    var oldownload = window.onload;
    if(typeof  window.onload !='function'){
        window.onload = func;
    }else {
        window.onload = function () {
            oldownload();
            func();
        }
    }

}
function interAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement){
        parent.appendChild(newElement);
    }else {
        parent.insertBefore(newElement,targetElement,nextSibling);
    }
}
function addclass(element,value) {
    if (!element.className){
        element.className = value;
    }else {
        newClassName = element.className;
        newClassName+= "";
        newClassName+= value;
        element.className = newClassName;
    }
}
//取得导航列表中所有的链接，循环遍历这些链接
function highLightPage() {
    if (!document.getElementsByTagName)return false;
    if (!document.getElementById)return false;
    var headers =document.getElementsByTagName('header');
    if (headers.length == 0)return false;
    var navs = headers[0].getElementsByTagName('nav');
    if(navs.length == 0)return false;
    var links = navs[0].getElementsByTagName('a');
    var linkurl;
    for (var i=0;i<links.length;i++){
        linkurl = links[i].getAttribute("here");
        if(window.location.href.indexOf(linkurl) != -1){
            links[i].className = "href";
        }
    }
}
addLoadEvent(highLightPage);