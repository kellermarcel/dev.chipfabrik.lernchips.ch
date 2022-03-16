//set filter on home page down
function setFilter () {
	const wrapper = document.getElementById('wrFilter');
	const links = wrapper.querySelectorAll('.filter-tag a');
	links[0].classList.add('active');

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

document.addEventListener('DOMContentLoaded', function() {
	setFilter();
}, false);
