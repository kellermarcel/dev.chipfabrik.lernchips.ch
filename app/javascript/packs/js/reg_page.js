var mobe = mobe || {};

mobe.setChoice = new function() {

    this.type = "person";

    this.init = function() {
        const wrapper = document.getElementById('btnChoice');
        const links = wrapper.querySelectorAll('.btn');

        for (var i = 0; i <links.length; i++) {
            links[i].addEventListener('click', function(ev) {
                ev.preventDefault();
                var current = wrapper.querySelectorAll('.active');
                if (current.length > 0) {
                    current[0].classList.remove('active');
                }
                this.classList.add('active');
            });
        }
    };

    this.goWeiter = function() {
        let self = this;

        let btn = document.getElementById('btnWeiter'),
        wrChoice = document.getElementById('btnChoice'),
        choices = wrChoice.querySelectorAll('.btn');
        btn.addEventListener('click', function(ev) {
            ev.preventDefault();
            for (var i = 0; i < choices.length; i++) {
                if(choices[i].classList.contains('active')) {
                    window.location.href = window.location.origin + choices[i].getAttribute("href");
                }
            }
        });
    };
};

document.addEventListener('DOMContentLoaded', function() {
	mobe.setChoice.init();
	mobe.setChoice.goWeiter();
}, false);
