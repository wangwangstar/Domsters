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