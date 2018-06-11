toggleMenu = function () {
  var header = document.getElementsByTagName('header')[0];
  header.classList.toggle("closed");
};

document.getElementById("menuButton").addEventListener("click", function (e) {
  e.preventDefault();
  toggleMenu();
});

toggleMenu();


// Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]"
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;

// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

// Chrome 1+
var isChrome = !!window.chrome && !!window.chrome.webstore;

// Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;

if(isIE){
  document.getElementsByTagName("BODY")[0].className += " ie";
}

if(isSafari){
  document.getElementsByTagName("BODY")[0].className += " safari";
}

if(isChrome){
  document.getElementsByTagName("BODY")[0].className += " chrome";
}
