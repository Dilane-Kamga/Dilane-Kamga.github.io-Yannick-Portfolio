'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}


/*<![CDATA[*/
(function(){var gtConstEvalStartTime = new Date();
var c="Translate",g=this||self;function h(a,b){a=a.split(".");var d=g;a[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+a[0]);for(var e;a.length&&(e=a.shift());)a.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b}
function k(a,b){function d(){}d.prototype=b.prototype;a.ka=b.prototype;a.prototype=new d;a.prototype.constructor=a;a.ja=function(e,f,v){for(var w=Array(arguments.length-2),n=2;n<arguments.length;n++)w[n-2]=arguments[n];return b.prototype[f].apply(e,w)}}function l(a){return a};function m(){return"[msg_undefined]"}var p={};
(function(){if(void 0==window.CLOSURE_DEFINES||window.CLOSURE_DEFINES["te.msg.EMBED_MESSAGES"]){p={Y:function(){return MSG_TRANSLATE},m:function(){return MSG_CANCEL},s:function(){return MSG_CLOSE},K:function(){return MSGFUNC_PAGE_TRANSLATED_TO},Z:function(){return MSGFUNC_TRANSLATED_TO},B:function(){return MSG_GENERAL_ERROR},D:function(){return MSG_LANGUAGE_UNSUPPORTED},F:function(){return MSG_LEARN_MORE},L:function(){return MSGFUNC_POWERED_BY},ba:function(){return MSG_TRANSLATE_PRODUCT_NAME},da:function(){return MSG_TRANSLATION_IN_PROGRESS},
aa:function(){return MSGFUNC_TRANSLATE_PAGE_TO},ia:function(){return MSGFUNC_VIEW_PAGE_IN},M:function(){return MSG_RESTORE},U:function(){return MSG_SSL_INFO_LOCAL_FILE},V:function(){return MSG_SSL_INFO_SECURE_PAGE},T:function(){return MSG_SSL_INFO_INTRANET_PAGE},N:function(){return MSG_SELECT_LANGUAGE},fa:function(){return MSGFUNC_TURN_OFF_TRANSLATION},ea:function(){return MSGFUNC_TURN_OFF_FOR},l:function(){return MSG_ALWAYS_HIDE_AUTO_POPUP_BANNER},I:function(){return MSG_ORIGINAL_TEXT},J:function(){return MSG_ORIGINAL_TEXT_NO_COLON},
A:function(){return MSG_FILL_SUGGESTION},W:function(){return MSG_SUBMIT_SUGGESTION},S:function(){return MSG_SHOW_TRANSLATE_ALL},R:function(){return MSG_SHOW_RESTORE_ALL},O:function(){return MSG_SHOW_CANCEL_ALL},ca:function(){return MSG_TRANSLATE_TO_MY_LANGUAGE},$:function(){return MSGFUNC_TRANSLATE_EVERYTHING_TO},P:function(){return MSG_SHOW_ORIGINAL_LANGUAGES},H:function(){return MSG_OPTIONS},ga:function(){return MSG_TURN_OFF_TRANSLATION_FOR_THIS_SITE},G:function(){return MSG_MANAGE_TRANSLATION_FOR_THIS_SITE},
j:function(){return MSG_ALT_SUGGESTION},h:function(){return MSG_ALT_ACTIVITY_HELPER_TEXT},i:function(){return MSG_ALT_AND_CONTRIBUTE_ACTIVITY_HELPER_TEXT},ha:function(){return MSG_USE_ALTERNATIVES},v:function(){return MSG_DRAG_TIP},o:function(){return MSG_CLICK_FOR_ALT},u:function(){return MSG_DRAG_INSTUCTIONS},X:function(){return MSG_SUGGESTION_SUBMITTED},C:function(){return MSG_LANGUAGE_TRANSLATE_WIDGET}};for(var a in p)if(p[a]!==Object.prototype[p[a]])try{p[a]=p[a].call(null)}catch(b){p[a]=m}}else a=
function(b){return function(){return b}},p={Y:a(0),m:a(1),s:a(2),K:a(3),Z:a(4),B:a(5),D:a(45),F:a(6),L:a(7),ba:a(8),da:a(9),aa:a(10),ia:a(11),M:a(12),U:a(13),V:a(14),T:a(15),N:a(16),fa:a(17),ea:a(18),l:a(19),I:a(20),A:a(21),W:a(22),S:a(23),R:a(24),O:a(25),ca:a(26),$:a(27),P:a(28),H:a(29),ga:a(30),j:a(32),h:a(33),ha:a(34),v:a(35),o:a(36),u:a(37),X:a(38),G:a(39),i:a(40),J:a(41),C:a(46)}})();var q={},MSG_TRANSLATE=c;q[0]=MSG_TRANSLATE;var MSG_CANCEL="Cancel";q[1]=MSG_CANCEL;var MSG_CLOSE="Close";q[2]=MSG_CLOSE;function MSGFUNC_PAGE_TRANSLATED_TO(a){return"Google has automatically translated this page to: "+a}q[3]=MSGFUNC_PAGE_TRANSLATED_TO;function MSGFUNC_TRANSLATED_TO(a){return"Translated to: "+a}q[4]=MSGFUNC_TRANSLATED_TO;var MSG_GENERAL_ERROR="Error: The server could not complete your request. Try again later.";q[5]=MSG_GENERAL_ERROR;var MSG_LEARN_MORE="Learn more";q[6]=MSG_LEARN_MORE;
function MSGFUNC_POWERED_BY(a){return"Powered by "+a}q[7]=MSGFUNC_POWERED_BY;var MSG_TRANSLATE_PRODUCT_NAME=c;q[8]=MSG_TRANSLATE_PRODUCT_NAME;var MSG_TRANSLATION_IN_PROGRESS="Translation in progress";q[9]=MSG_TRANSLATION_IN_PROGRESS;function MSGFUNC_TRANSLATE_PAGE_TO(a){return"Translate this page to: "+(a+" using Google Translate?")}q[10]=MSGFUNC_TRANSLATE_PAGE_TO;function MSGFUNC_VIEW_PAGE_IN(a){return"View this page in: "+a}q[11]=MSGFUNC_VIEW_PAGE_IN;var MSG_RESTORE="Show original";q[12]=MSG_RESTORE;
var MSG_SSL_INFO_LOCAL_FILE="The content of this local file will be sent to Google for translation using a secure connection.";q[13]=MSG_SSL_INFO_LOCAL_FILE;var MSG_SSL_INFO_SECURE_PAGE="The content of this secure page will be sent to Google for translation using a secure connection.";q[14]=MSG_SSL_INFO_SECURE_PAGE;var MSG_SSL_INFO_INTRANET_PAGE="The content of this intranet page will be sent to Google for translation using a secure connection.";q[15]=MSG_SSL_INFO_INTRANET_PAGE;
var MSG_SELECT_LANGUAGE="Select Language";q[16]=MSG_SELECT_LANGUAGE;function MSGFUNC_TURN_OFF_TRANSLATION(a){return"Turn off "+(a+" translation")}q[17]=MSGFUNC_TURN_OFF_TRANSLATION;function MSGFUNC_TURN_OFF_FOR(a){return"Turn off for: "+a}q[18]=MSGFUNC_TURN_OFF_FOR;var MSG_ALWAYS_HIDE_AUTO_POPUP_BANNER="Always hide";q[19]=MSG_ALWAYS_HIDE_AUTO_POPUP_BANNER;var MSG_ORIGINAL_TEXT="Original text:";q[20]=MSG_ORIGINAL_TEXT;var MSG_FILL_SUGGESTION="Contribute a better translation";q[21]=MSG_FILL_SUGGESTION;
var MSG_SUBMIT_SUGGESTION="Contribute";q[22]=MSG_SUBMIT_SUGGESTION;var MSG_SHOW_TRANSLATE_ALL="Translate all";q[23]=MSG_SHOW_TRANSLATE_ALL;var MSG_SHOW_RESTORE_ALL="Restore all";q[24]=MSG_SHOW_RESTORE_ALL;var MSG_SHOW_CANCEL_ALL="Cancel all";q[25]=MSG_SHOW_CANCEL_ALL;var MSG_TRANSLATE_TO_MY_LANGUAGE="Translate sections to my language";q[26]=MSG_TRANSLATE_TO_MY_LANGUAGE;function MSGFUNC_TRANSLATE_EVERYTHING_TO(a){return"Translate everything to "+a}q[27]=MSGFUNC_TRANSLATE_EVERYTHING_TO;
var MSG_SHOW_ORIGINAL_LANGUAGES="Show original languages";q[28]=MSG_SHOW_ORIGINAL_LANGUAGES;var MSG_OPTIONS="Options";q[29]=MSG_OPTIONS;var MSG_TURN_OFF_TRANSLATION_FOR_THIS_SITE="Turn off translation for this site";q[30]=MSG_TURN_OFF_TRANSLATION_FOR_THIS_SITE;q[31]=null;var MSG_ALT_SUGGESTION="Show alternative translations";q[32]=MSG_ALT_SUGGESTION;var MSG_ALT_ACTIVITY_HELPER_TEXT="Click on words above to get alternative translations";q[33]=MSG_ALT_ACTIVITY_HELPER_TEXT;var MSG_USE_ALTERNATIVES="Use";
q[34]=MSG_USE_ALTERNATIVES;var MSG_DRAG_TIP="Drag with shift key to reorder";q[35]=MSG_DRAG_TIP;var MSG_CLICK_FOR_ALT="Click for alternative translations";q[36]=MSG_CLICK_FOR_ALT;var MSG_DRAG_INSTUCTIONS="Hold down the shift key, click, and drag the words above to reorder.";q[37]=MSG_DRAG_INSTUCTIONS;var MSG_SUGGESTION_SUBMITTED="Thank you for contributing your translation suggestion to Google Translate.";q[38]=MSG_SUGGESTION_SUBMITTED;var MSG_MANAGE_TRANSLATION_FOR_THIS_SITE="Manage translation for this site";
q[39]=MSG_MANAGE_TRANSLATION_FOR_THIS_SITE;var MSG_ALT_AND_CONTRIBUTE_ACTIVITY_HELPER_TEXT="Click a word for alternative translations, or double-click to edit directly";q[40]=MSG_ALT_AND_CONTRIBUTE_ACTIVITY_HELPER_TEXT;var MSG_ORIGINAL_TEXT_NO_COLON="Original text";q[41]=MSG_ORIGINAL_TEXT_NO_COLON;q[42]=c;q[43]=c;q[44]="Your correction has been submitted.";var MSG_LANGUAGE_UNSUPPORTED="Error: The language of the webpage is not supported.";q[45]=MSG_LANGUAGE_UNSUPPORTED;
var MSG_LANGUAGE_TRANSLATE_WIDGET="Language Translate Widget";q[46]=MSG_LANGUAGE_TRANSLATE_WIDGET;function r(a){if(Error.captureStackTrace)Error.captureStackTrace(this,r);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}k(r,Error);r.prototype.name="CustomError";function t(a,b){a=a.split("%s");for(var d="",e=a.length-1,f=0;f<e;f++)d+=a[f]+(f<b.length?b[f]:"%s");r.call(this,d+a[e])}k(t,r);t.prototype.name="AssertionError";function u(a,b){throw new t("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var x;function y(a,b){this.g=b===z?a:""}y.prototype.toString=function(){return this.g+""};var z={};function _exportMessages(){h("google.translate.m",q)}function A(a){var b=document.getElementsByTagName("head")[0];b||(b=document.body.parentNode.appendChild(document.createElement("head")));b.appendChild(a)}
function _loadJs(a){var b=document;var d="SCRIPT";"application/xhtml+xml"===b.contentType&&(d=d.toLowerCase());d=b.createElement(d);d.type="text/javascript";d.charset="UTF-8";if(void 0===x){b=null;var e=g.trustedTypes;if(e&&e.createPolicy){try{b=e.createPolicy("goog#html",{createHTML:l,createScript:l,createScriptURL:l})}catch(v){g.console&&g.console.error(v.message)}x=b}else x=b}a=(b=x)?b.createScriptURL(a):a;a=new y(a,z);a instanceof y&&a.constructor===y?a=a.g:(b=typeof a,u("expected object of type TrustedResourceUrl, got '"+
a+"' of type "+("object"!=b?b:a?Array.isArray(a)?"array":b:"null")),a="type_error:TrustedResourceUrl");d.src=a;var f;a=(d.ownerDocument&&d.ownerDocument.defaultView||window).document;(f=(a=null===(f=a.querySelector)||void 0===f?void 0:f.call(a,"script[nonce]"))?a.nonce||a.getAttribute("nonce")||"":"")&&d.setAttribute("nonce",f);A(d)}function _loadCss(a){var b=document.createElement("link");b.type="text/css";b.rel="stylesheet";b.charset="UTF-8";b.href=a;A(b)}
function _isNS(a){a=a.split(".");for(var b=window,d=0;d<a.length;++d)if(!(b=b[a[d]]))return!1;return!0}function _setupNS(a){a=a.split(".");for(var b=window,d=0;d<a.length;++d)b.hasOwnProperty?b.hasOwnProperty(a[d])?b=b[a[d]]:b=b[a[d]]={}:b=b[a[d]]||(b[a[d]]={});return b}h("_exportMessages",_exportMessages);h("_loadJs",_loadJs);h("_loadCss",_loadCss);h("_isNS",_isNS);h("_setupNS",_setupNS);
window.addEventListener&&"undefined"==typeof document.readyState&&window.addEventListener("DOMContentLoaded",function(){document.readyState="complete"},!1);
if (_isNS('google.translate.Element')){return}(function(){var c=_setupNS('google.translate._const');c._cest = gtConstEvalStartTime;gtConstEvalStartTime = undefined;c._cl='en-GB';c._cuc='googleTranslateElementInit';c._cac='';c._cam='';c._ctkk='450465.1037093230';var h='translate.googleapis.com';var s=(true?'https':window.location.protocol=='https:'?'https':'http')+'://';var b=s+h;c._pah=h;c._pas=s;c._pbi=b+'/translate_static/img/te_bk.gif';c._pci=b+'/translate_static/img/te_ctrl3.gif';c._pli=b+'/translate_static/img/loading.gif';c._plla=h+'/translate_a/l';c._pmi=b+'/translate_static/img/mini_google.png';c._ps=b+'/translate_static/css/translateelement.css';c._puh='translate.google.com';_loadCss(c._ps);_loadJs(b+'/translate_static/js/element/main_en-GB.js');})();})();
function googleTranslateElementInit(){new google.translate.TranslateElement({pageLanguage:'vi',includedLanguages:'en,fr',layout:google.translate.TranslateElement.InlineLayout.SIMPLE},'google_translate_element')}$(".hover").mouseleave(function (){$(this).removeClass("hover")});
/*]]>*/