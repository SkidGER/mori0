!function(){"use strict";function e(e){try{if("undefined"==typeof console)return;"error"in console?console.error(e):console.log(e)}catch(e){}}function t(e,t){var r=e.substr(t,2);return parseInt(r,16)}function r(r,n){for(var c="",o=t(r,n),a=n+2;a<r.length;a+=2){var l=t(r,a)^o;c+=String.fromCharCode(l)}try{c=decodeURIComponent(escape(c))}catch(t){e(t)}return function(e){return i.innerHTML='<a href="'+e.replace(/"/g,"&quot;")+'"></a>',i.childNodes[0].getAttribute("href")||""}(c)}function n(t){try{(function(t){for(var n=t.querySelectorAll("a"),o=0;o<n.length;o++)try{var a=n[o],i=a.href.indexOf(c);i>-1&&(a.href="mailto:"+r(a.href,i+c.length))}catch(t){e(t)}})(t),function(t){for(var n=t.querySelectorAll(o),c=0;c<n.length;c++)try{var i=n[c],l=i.parentNode,u=i.getAttribute(a);if(u){var f=r(u,0),d=document.createTextNode(f);l.replaceChild(d,i)}}catch(t){e(t)}}(t),function(t){for(var r=t.querySelectorAll("template"),c=0;c<r.length;c++)try{n(r[c].content)}catch(t){e(t)}}(t)}catch(t){e(t)}}var c="/cdn-cgi/l/email-protection#",o=".__cf_email__",a="data-cfemail",i=document.createElement("div");n(document),function(){var e=document.currentScript||document.scripts[document.scripts.length-1];e.parentNode.removeChild(e)}()}();

function killCopy(e){
    return false
    }
    function reEnable(){
    return true
    }
    document.onselectstart=new Function ("return false")
    if (window.sidebar){
    document.onmousedown=killCopy
    document.onclick=reEnable
    }