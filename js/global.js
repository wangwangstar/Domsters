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
            //用JavaScript的toLowerCase方法把该文本转化成小写形式
            var linktext = links[i].lastChild.nodeValue.toLowerCase();
            //把变量的值设置为body元素的id属性，相当于在<body>标签中添加了id="home"
            document.body.setAttribute("id",linktext);
        }
    }
}
addLoadEvent(highLightPage);
// Home

function moveElement(elementID,final_x,final_y,interval) {
    if (!document.getElementById) return false;
    if (!document.getElementById(elementID)) return false;
    var elem = document.getElementById(elementID);
    if (elem.movement) {
        clearTimeout(elem.movement);
    }
    if (!elem.style.left) {
        elem.style.left = "0px";
    }
    if (!elem.style.top) {
        elem.style.top = "0px";
    }
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    if (xpos == final_x && ypos == final_y) {
        return true;
    }
    if (xpos < final_x) {
        var dist = Math.ceil((final_x - xpos)/10);
        xpos = xpos + dist;
    }
    if (xpos > final_x) {
        var dist = Math.ceil((xpos - final_x)/10);
        xpos = xpos - dist;
    }
    if (ypos < final_y) {
        var dist = Math.ceil((final_y - ypos)/10);
        ypos = ypos + dist;
    }
    if (ypos > final_y) {
        var dist = Math.ceil((ypos - final_y)/10);
        ypos = ypos - dist;
    }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
    elem.movement = setTimeout(repeat,interval);
}
function prepareSlideshow() {
    if(!document.getElementsByTagName)return false;
}