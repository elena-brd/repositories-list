const btnShow = document.querySelector('.btn-show-more');
const btnClose = document.querySelector('.close-btn');
const wrapper = document.querySelector('#wrapper');
const btnCreate = document.querySelector('.create-card');

const createCard = document.querySelector('.create-card')


btnShow.addEventListener('click', () => {
    btnShow.textContent = 'No more repositories to show.';
    btnShow.style.border = 'none';
    btnShow.style.color = '#181818';
})

btnClose.addEventListener('click', () => {
    wrapper.remove();
})

btnCreate.addEventListener('click', () => {
    const title = document.createElement('h3');
    title.textContent = 'Please return back later';
    title.style.color = '#fff'
    btnCreate.textContent = ''
    createCard.appendChild(title);

    btnCreate.appendChild(wrapper)
})