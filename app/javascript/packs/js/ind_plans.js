var mobe = mobe || {};

mobe.choosePlan = new function() {

    this.plans = document.querySelectorAll('.plans-item');

    this.init = function() {
        let self = this;

        self.plans.forEach(function(item){
            item.addEventListener('click', function() {
                self.removeSelected();
                item.classList.add('selected');
            });
        });
    };

    this.removeSelected = function() {
        let self = this;
        
        self.plans.forEach(function(item){
            item.classList.remove('selected');
        });
    };
}

document.addEventListener('DOMContentLoaded', function() {
	mobe.choosePlan.init();
}, false);
