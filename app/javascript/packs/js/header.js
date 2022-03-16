var mobe = mobe || {};

mobe.loadPage = new function() {
    this.init = function() {
        let isInner = window.location.pathname,
        currentOrigin = window.location.origin;
        if(mobe.checkUserLogin()) {
            mobe.changeMenu.init();
            mobe.addAdminMenu.init();
        } else if(isInner === '/test-preview.html' || isInner === '/test-edit.html') {
            window.location.href = currentOrigin;
        }
    }
};

mobe.makeMenu = new function() {

    this.init = function() {
        const mb = document.querySelector('.mobtn'),
            hd = document.querySelector('.top-menu');

        mb.addEventListener('click', function() {
            this.classList.toggle('open');
            hd.classList.toggle('open');
        });
    };
};

mobe.logForm = new function() {

    let self = this;

    this.ma = document.getElementById('menuAdmin');

    this.init = function() {
        if(self.ma) {
            self.ma.addEventListener('click', function(ev) {
                if(ev.target.classList.contains('user-login')) {
                    self.createLogin();
                }
            });
        }
    };

    this.createLogin = function() {
        const foote = document.getElementById("pageFooter");
        const newBlanket = `
            <div id="newBlanket" class="new-blanket open">
                <div class="popup">
                    <form id="loginForm" name="login_form">
                        <span class="modal-close abbrechen">&#43;</span>
                        <h5 class="bl-title">Login</h5>
                        <p class="inp-email">
                            <span class="email-ico"></span><input type="text" id="logEmail" name="log_email" value="" placeholder="mail@example.com">
                        </p>
                        <p class="inp-pwd">
                            <span class="pwd-ico"></span><input type="password" id="logPass" name="log_pass" value="" placeholder="enter password">
                        </p>
                        <p class="remember-me">
                        <input type="checkbox" id="rememberMe" value>
                        <label class="fcheck-rme" for="rememberMe">Remember me</label>&nbsp;|
                        &nbsp;<a href="javascript:void(0);">Password vergessen?</a></p>
                        <p class="btn-login">
                            <a href="javascript:void(0);" id="loginUser" class="btn-small btn-green log-user">Anmelden</a>
                        </p>
                        <p class="link-register">Noch nicht Mitglied?
                            <a href="/reg-page.html" id="newReg" class="link-green new-reg">Registrieren</a>
                        </p>
                    </form>
                </div>
            </div>`;
        foote.insertAdjacentHTML('afterend', newBlanket);
    }
};

mobe.closeNewBlanket = new function() {

    this.db = document.body;
    let self = this;

    this.init = function() {
        console.log ("hier");
        self.db.addEventListener('click', function(ev){
            if(document.querySelector(".abbrechen") && ev.target.classList.contains('abbrechen')){
                mobe.closeNewBlanket.closeBlanket();
            }
        });
    };

    this.closeBlanket = function() {

        const bl = document.getElementById("newBlanket");

        bl.animate([
            {opacity: 1},
            {opacity: 0}
        ], {
            duration: 450,
            fill: 'forwards'
        });

        setTimeout(function() {
            bl.remove();
        }, 450);
    };
};

mobe.regUser = new function() {

    this.db = document.body;
    let self = this;

    this.init = function() {
        self.db.addEventListener('click', function(ev){
            if(document.getElementById("registerUser") && ev.target.classList.contains('reg-user')){
                var regForm = document.forms.register_form,
                formData = new FormData(regForm);
                //ev.preventDefault();
                self.checkData(formData);
            }
        });
    };

    this.checkData = function(formData) {

        if( !formData.get('login_email') ) {
            console.log('email is obligate '); //check please this value
        } else if ( !formData.get('login_pass') ) {
            console.log('pass is obligate'); //check please this value
        } else if ( !formData.get('repeat_pass') ) {
            console.log('repeat pass is obligate'); //check please this value
        } else {
            self.saveData(formData);
        }
    };

    this.saveData = function(formData) {
        const mail = formData.get('login_email'),
        pass = formData.get('login_pass'),
        r_pass = formData.get('repeat_pass');

        localStorage.setItem('em', mail);
        localStorage.setItem('pa', pass);
        localStorage.setItem('rpa', r_pass);

        mobe.closeNewBlanket.closeBlanket();
    };
};

mobe.logUser = new function() {

    this.db = document.body;
    let self = this;

    this.init = function() {
        self.db.addEventListener('click', function(ev){

            if(document.getElementById("loginUser") && ev.target.classList.contains('log-user')){
                var logForm = document.forms.login_form,
                formData = new FormData(logForm);
                //ev.preventDefault();
                self.checkData(formData);
            }
        });
    };

    this.checkData = function(formData) {

        if( !formData.get('log_email') ) {
            console.log('email is obligate fix please'); //check please this value
        } else if ( !formData.get('log_pass') ) {
            console.log('pass is obligate'); //check please this value
        } else {
            self.makeLogin(formData);
        }
    };

    this.makeLogin = function(formData) {
        let hashCode = s => s.split('').reduce((a,b)=>{a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);

        if ( formData.get('log_email') !== localStorage.getItem('em') ) {
            console.log('check your email please');
        } else if (  formData.get('log_pass') !== localStorage.getItem('pa') ) {
            console.log('check your pass');
        } else {
            let str = formData.get('log_email') + ' ' + formData.get('log_pass')
            sessionStorage.setItem('logged', hashCode(str));
            mobe.closeNewBlanket.closeBlanket();
            // let or = window.location.origin,
            // pt = "/lernchips.html";
            // window.location.href = or + pt;
            mobe.changeMenu.init();
            mobe.addAdminMenu.init();
        }
    };
};

mobe.changeMenu = new function() {

    this.init = function() {
        let tm = document.querySelector('.top-menu > ul'),
        firstLi = `
            <li><a href="/lernchips.html">Lernchips</a></li>
        `;
        tm.insertAdjacentHTML('afterbegin', firstLi);
    };
};

mobe.addAdminMenu = new function() {

    this.ma = document.getElementById('menuAdmin');

    let self = this;

    this.init = function() {
        let name = self.name();
        let userLinko = `
        <nav class="user-link">
            <span class="user-avatar"><img src="img/avatar.png" alt=""></span>
            <span class="user-name">${name}</span>
        </nav>
        <div class="wr-account-nav">
            <ul class="account-nav">
                <li class="accout-nav-item">
                    <span class="item-ico bg-einstellungen"></span><a href="javascript:void(0)">Kontoeinstellungen</a></li>
                <li class="accout-nav-item">
                    <span class="item-ico bg-abo"></span><a href="javascript:void(0)">Meine Abonnements</a></li>
                <li class="accout-nav-item">
                    <span class="item-ico bg-rechnungen"></span><a href="javascript:void(0)">Rechnungen</a></li>
                <li class="accout-nav-item">
                    <span class="item-ico bg-abmelden"></span><a class="exit-adminpart" href="javascript:void(0)">Abmelden</a></li>
            </ul>
        </div>
        `;

        self.ma.innerHTML = userLinko;
    };

    this.name = function() {
        let res = localStorage.getItem('em').split('@');
        return res[0];
    };
};

mobe.checkUserLogin = function() {
    let userCan = sessionStorage.getItem('logged');
    return userCan ? "autorized" : false;
};

mobe.makeAdminMenu = new function() {

    this.tn = document.querySelector('.top-nav');
    let self = this;

    this.init = function() {
        self.tn.addEventListener('click', function(ev){
            let mn = document.querySelector('.wr-account-nav'),
            or = window.location.origin;
            if(document.getElementById("menuAdmin") && ev.target.classList.contains('user-name')) {
                mn.classList.toggle('open');
            } else if( ev.target.classList.contains('exit-adminpart') ) {
                mn.classList.toggle('open');
                sessionStorage.removeItem('logged');
                window.location.href = or;
            }
        });
    };
};

document.addEventListener('DOMContentLoaded', function() {
    mobe.loadPage.init();
    mobe.makeMenu.init();
    mobe.logForm.init();
    mobe.closeNewBlanket.init();
    mobe.regUser.init();
    mobe.logUser.init();
    mobe.makeAdminMenu.init();
}, false);
