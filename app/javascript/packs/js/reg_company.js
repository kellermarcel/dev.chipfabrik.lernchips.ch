var mobe = mobe || {};

mobe = new function() {

    this.checkedForm = false;

    this.checkPolicy = () => document.getElementById('haveRead').checked;

    this.setFocusComp = function() {

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

    this.lostFocusComp = function() {
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
            case 'phone':
                if (item.validity.patternMismatch) {
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
        let regWeiter = document.getElementById('regWeiter'),
        showMessage = document.querySelectorAll('.show-warn');
        regWeiter.addEventListener('click', function() {
            if(self.checkedForm && self.checkPolicy()) {
                self.regCompany();
                showMessage[0].textContent = "";
            } else {
                showMessage[0].textContent = "Alle Felder sind erforderlich, bitte überprüfe dein Eingaben."
            }
        });
    };

    this.regCompany = function() {
        // registrieren company here please
        console.log('registrieren company here please');
    }

}

document.addEventListener('DOMContentLoaded', function() {
	mobe.setFocusComp();
	mobe.lostFocusComp();
    mobe.checkFormWeiter();
}, false);
