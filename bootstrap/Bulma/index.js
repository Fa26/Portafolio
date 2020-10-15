

const burger = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burger.addEventListener('click',() =>{

	navbarMenu.classList.toggle('is-active');
})

/**tabs */
const tabs = document.querySelectorAll('.tabs li');
const tabContentBoxes=document.querySelectorAll('#tab-content > div');

tabs.forEach((tab) => {
	tab.addEventListener('click', () => {
		tabs.forEach(item => item.classList.remove('is-active'))
		tab.classList.add('is-active');

		const target = tab.dataset.target;
		tabContentBoxes.forEach(box => {
			if(box.getAttribute('id') === target){
				box.classList.remove('is-hidden');
			}else{
				box.classList.add('is-hidden');
			}
		});

	})
})

//Modal
const button=document.querySelector('#sing');
const modal = document.querySelector('.modal-background');
const modalAp=document.querySelector('.modal');

button.addEventListener('click',()  => {
	modalAp.classList.add('is-active');


});


modal.addEventListener('click',() => {

	modalAp.classList.remove('is-active');
});