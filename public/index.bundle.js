(()=>{var e={1724:()=>{var e=e||{};e.loadPage=new function(){this.init=function(){var t=window.location.pathname,n=window.location.origin;e.checkUserLogin()?(e.changeMenu.init(),e.addAdminMenu.init()):"/test-preview.html"!==t&&"/test-edit.html"!==t||(window.location.href=n)}},e.makeMenu=new function(){this.init=function(){var e=document.querySelector(".mobtn"),t=document.querySelector(".top-menu");e.addEventListener("click",(function(){this.classList.toggle("open"),t.classList.toggle("open")}))}},e.logForm=new function(){var e=this;this.ma=document.getElementById("menuAdmin"),this.init=function(){e.ma&&e.ma.addEventListener("click",(function(t){t.target.classList.contains("user-login")&&e.createLogin()}))},this.createLogin=function(){document.getElementById("pageFooter").insertAdjacentHTML("afterend",'\n            <div id="newBlanket" class="new-blanket open">\n                <div class="popup">\n\n\n                    <form class="new_user" id="new_user" action="/users/sign_in" accept-charset="UTF-8" method="post">\n                        <span class="modal-close abbrechen">&#43;</span>\n                        <h5 class="bl-title">Login</h5>\n\n                        <p class="inp-email">\n                            <span class="email-ico"></span><input type="email" name="user[email]" id="user_email" value="" placeholder="mail@example.com">\n                        </p>\n  \n                        <p class="inp-pwd">\n                            <span class="pwd-ico"></span><input type="password" id="user_password" name="user[password]" value="" placeholder="Passwort">\n                        </p>\n\n\n                        <div class="field">\n                            <input name="user[remember_me]" type="hidden" value="0" autocomplete="off" /><input type="checkbox" value="1" name="user[remember_me]" id="user_remember_me" />\n                            <label for="user_remember_me">Erinnere dich...</label>\n                        </div>\n                        <p class="btn-login">\n                                <input type="submit" class="btn-small btn-green log-user" name="commit" value="Anmelden" data-disable-with="Anmelden" />\n                        </p>\n                        <p class="link-register">Noch nicht Mitglied?\n                            <a href="/reg-page.html" id="newReg" class="link-green new-reg">Registrieren</a>\n                        </p>\n\n                    </form>\n                </div>\n            </div>')}},e.closeNewBlanket=new function(){this.db=document.body;var t=this;this.init=function(){t.db.addEventListener("click",(function(t){document.querySelector(".abbrechen")&&t.target.classList.contains("abbrechen")&&e.closeNewBlanket.closeBlanket()}))},this.closeBlanket=function(){var e=document.getElementById("newBlanket");e.animate([{opacity:1},{opacity:0}],{duration:450,fill:"forwards"}),setTimeout((function(){e.remove()}),450)}},e.regUser=new function(){this.db=document.body;var t=this;this.init=function(){t.db.addEventListener("click",(function(e){if(document.getElementById("registerUser")&&e.target.classList.contains("reg-user")){var n=document.forms.register_form,i=new FormData(n);t.checkData(i)}}))},this.checkData=function(e){e.get("login_email")?e.get("login_pass")?e.get("repeat_pass")?t.saveData(e):console.log("repeat pass is obligate"):console.log("pass is obligate"):console.log("email is obligate ")},this.saveData=function(t){var n=t.get("login_email"),i=t.get("login_pass"),s=t.get("repeat_pass");localStorage.setItem("em",n),localStorage.setItem("pa",i),localStorage.setItem("rpa",s),e.closeNewBlanket.closeBlanket()}},e.logUser=new function(){this.db=document.body;var t=this;this.init=function(){t.db.addEventListener("click",(function(e){if(document.getElementById("loginUser")&&e.target.classList.contains("log-user")){var n=document.forms.login_form,i=new FormData(n);t.checkData(i)}}))},this.checkData=function(e){e.get("log_email")?e.get("log_pass")?t.makeLogin(e):console.log("pass is obligate"):console.log("email is obligate fix please")},this.makeLogin=function(t){if(t.get("log_email")!==localStorage.getItem("em"))console.log("check your email");else if(t.get("log_pass")!==localStorage.getItem("pa"))console.log("check your pass");else{var n=t.get("log_email")+" "+t.get("log_pass");sessionStorage.setItem("logged",n.split("").reduce((function(e,t){return(e=(e<<5)-e+t.charCodeAt(0))&e}),0)),e.closeNewBlanket.closeBlanket(),e.changeMenu.init(),e.addAdminMenu.init()}}},e.changeMenu=new function(){this.init=function(){document.querySelector(".top-menu > ul").insertAdjacentHTML("afterbegin",'\n            <li><a href="/lernchips.html">Lernchips</a></li>\n        ')}},e.addAdminMenu=new function(){this.ma=document.getElementById("menuAdmin");var e=this;this.init=function(){var t=e.name(),n='\n        <nav class="user-link">\n            <span class="user-avatar"><img src="img/avatar.png" alt=""></span>\n            <span class="user-name">'.concat(t,'</span>\n        </nav>\n        <div class="wr-account-nav">\n            <ul class="account-nav">\n                <li class="accout-nav-item">\n                    <span class="item-ico bg-einstellungen"></span><a href="javascript:void(0)">Kontoeinstellungen</a></li>\n                <li class="accout-nav-item">\n                    <span class="item-ico bg-abo"></span><a href="javascript:void(0)">Meine Abonnements</a></li>\n                <li class="accout-nav-item">\n                    <span class="item-ico bg-rechnungen"></span><a href="javascript:void(0)">Rechnungen</a></li>\n                <li class="accout-nav-item">\n                    <span class="item-ico bg-abmelden"></span><a class="exit-adminpart" href="javascript:void(0)">Abmelden</a></li>\n            </ul>\n        </div>\n        ');e.ma.innerHTML=n},this.name=function(){return localStorage.getItem("em").split("@")[0]}},e.checkUserLogin=function(){return!!sessionStorage.getItem("logged")&&"autorized"},e.makeAdminMenu=new function(){this.tn=document.querySelector(".top-nav");var e=this;this.init=function(){e.tn.addEventListener("click",(function(e){var t=document.querySelector(".wr-account-nav"),n=window.location.origin;document.getElementById("menuAdmin")&&e.target.classList.contains("user-name")?t.classList.toggle("open"):e.target.classList.contains("exit-adminpart")&&(t.classList.toggle("open"),sessionStorage.removeItem("logged"),window.location.href=n)}))}},document.addEventListener("DOMContentLoaded",(function(){e.loadPage.init(),e.makeMenu.init(),e.logForm.init(),e.closeNewBlanket.init(),e.regUser.init(),e.logUser.init(),e.makeAdminMenu.init()}),!1)},5950:()=>{document.addEventListener("DOMContentLoaded",(function(){!function(){var e=document.getElementById("wrFilter"),t=e.querySelectorAll(".filter-tag a");t[0].classList.add("active");for(var n=0;n<t.length;n++)t[n].addEventListener("click",(function(t){t.preventDefault();var n=e.querySelectorAll(".active");n.length>0&&n[0].classList.remove("active"),this.classList.add("active")}))}()}),!1)},8940:(e,t,n)=>{"use strict";e.exports=n.p+"img/AlleLernchiptypen.svg"},1087:(e,t,n)=>{"use strict";e.exports=n.p+"img/Bildreihenfolge.svg"},1909:(e,t,n)=>{"use strict";e.exports=n.p+"img/Dialogkarten.svg"},4983:(e,t,n)=>{"use strict";e.exports=n.p+"img/DragDrop.svg"},9818:(e,t,n)=>{"use strict";e.exports=n.p+"img/Hotspot.svg"},1811:(e,t,n)=>{"use strict";e.exports=n.p+"img/InteraktivesVideo.svg"},6292:(e,t,n)=>{"use strict";e.exports=n.p+"img/KombinierteAnsicht.svg"},1050:(e,t,n)=>{"use strict";e.exports=n.p+"img/Kurspräsentation.svg"},9496:(e,t,n)=>{"use strict";e.exports=n.p+"img/MultipleChoice.svg"},5118:(e,t,n)=>{"use strict";e.exports=n.p+"img/Worte-einfügen.svg"},6418:(e,t,n)=>{"use strict";e.exports=n.p+"img/Worte-markieren.svg"},3572:(e,t,n)=>{"use strict";e.exports=n.p+"img/audio.svg"},3589:(e,t,n)=>{"use strict";e.exports=n.p+"img/avatar.png"},390:(e,t,n)=>{"use strict";e.exports=n.p+"img/cards.svg"},6804:(e,t,n)=>{"use strict";e.exports=n.p+"img/css_sprites.png"},4445:(e,t,n)=>{"use strict";e.exports=n.p+"img/finden.svg"},9317:(e,t,n)=>{"use strict";e.exports=n.p+"img/interaction.svg"},1045:(e,t,n)=>{"use strict";e.exports=n.p+"img/live-feedback.png"},6240:(e,t,n)=>{"use strict";e.exports=n.p+"img/logo-w.svg"},7800:(e,t,n)=>{"use strict";e.exports=n.p+"img/organisiere.png"},2289:(e,t,n)=>{"use strict";e.exports=n.p+"img/quizes.svg"},9213:(e,t,n)=>{"use strict";e.exports=n.p+"img/schnell.png"},6222:(e,t,n)=>{"use strict";e.exports=n.p+"img/select.svg"},8457:(e,t,n)=>{"use strict";e.exports=n.p+"img/sharing.png"},8272:(e,t,n)=>{"use strict";e.exports=n.p+"img/star-b.png"},1144:(e,t,n)=>{"use strict";e.exports=n.p+"img/star-w.png"},1666:(e,t,n)=>{"use strict";e.exports=n.p+"img/text.svg"},110:(e,t,n)=>{"use strict";e.exports=n.p+"img/top-img.png"},1737:(e,t,n)=>{"use strict";e.exports=n.p+"img/verknupfe.png"},6297:(e,t,n)=>{"use strict";e.exports=n.p+"img/zusammen.png"}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var a=t[i]={exports:{}};return e[i](a,a.exports,n),a.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");i.length&&(e=i[i.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{"use strict";n(3589),n(6804),n(6240),n(110),n(6222),n(3572),n(1666),n(390),n(2289),n(4445),n(9317),n(8272),n(1144),n(1045),n(7800),n(9213),n(8457),n(1737),n(6297),n(1087),n(1909),n(4983),n(9818),n(1811),n(6292),n(1050),n(9496),n(5118),n(6418),n(8940),n(5950),n(1724)})()})();
//# sourceMappingURL=index.bundle.js.map