var mobe = mobe || {};

mobe = new function() {

    this.checkedForm = false;

    this.checkPolicy = () => document.getElementById('haveRead').checked;

    this.setFocus = function() {

        const elem = document.getElementById("regForm");
        let inputo = elem.querySelectorAll('.block-text input');
        inputo.forEach(function(item, i, arr){
            item.addEventListener("focus", function() {
                this.parentNode.classList.add('focused');
            }, true);
            item.addEventListener("blur", function() {
                this.parentNode.classList.remove('focused');
            }, true);
        });
    };

    this.clickInput = function() {
        var self = this;

        let blockText = document.querySelectorAll('.block-text input');
        for (let i = 0; i < blockText.length; i++) {
            let type = blockText[i].getAttribute('type');

            blockText[i].addEventListener("input", function(ev) {
                self.check(type, blockText[i]);
            });
        }
    };

    this.check = function(type, item) {
        self = this;

        switch (type) {
            case 'text':
                if (!item.validity.valid) {
                    item.parentNode.classList.remove('valid');
                    item.parentNode.classList.add('novalid');
                    self.checkedForm = false;
                } else {
                    item.parentNode.classList.remove('novalid');
                    item.parentNode.classList.add('valid');
                    self.checkedForm = true;
                }
                break;
            case 'email':
                if (item.validity.typeMismatch) {
                    item.parentNode.classList.remove('valid');
                    item.parentNode.classList.add('novalid');
                    self.checkedForm = false;
                } else {
                    item.parentNode.classList.remove('novalid');
                    item.parentNode.classList.add('valid');
                    self.checkedForm = true;
                }
                break;
            case 'password':
                if (!item.validity.valid) {
                    item.parentNode.classList.remove('valid');
                    item.parentNode.classList.add('novalid');
                    self.checkedForm = false;
                } else {
                    item.parentNode.classList.remove('novalid');
                    item.parentNode.classList.add('valid');
                    self.checkedForm = true;
                }
                break;
            default:
                break;
        };
    };

    this.checkFormWeiter = function() {
        var self = this;
        let regIndWeiter = document.getElementById('regIndWeiter'),
        showMessage = document.querySelectorAll('.show-warn');
        regIndWeiter.addEventListener('click', function(ev) {
            if(self.checkedForm && self.checkPolicy()) {
                self.regIndividual();
                showMessage[0].textContent = "";
            } else {
                showMessage[0].textContent = "Alle Felder sind erforderlich, bitte überprüfe dein Eingaben."
            }
        });
    };

    this.regIndividual = function() {
        var self = this;
        var regForm = document.forms.reg_form;
        const elem = document.getElementById("regForm");
        var formData = new FormData(elem);

        const name = formData.get('log_user'),
        mail = formData.get('log_email'),
        pass = formData.get('reg_pass');

        localStorage.setItem('nm', name);
        localStorage.setItem('em', mail);
        localStorage.setItem('pa', pass);
//console.log(localStorage.getItem('pa'));
        self.goWeiter();
    };

    this.goWeiter = function() {
        let origi = window.location.origin;
        window.location.href = origi + "/individual-plans.html"
    }
};

document.addEventListener('DOMContentLoaded', function() {
	mobe.setFocus();
	mobe.clickInput();
    mobe.checkFormWeiter();
}, false);
