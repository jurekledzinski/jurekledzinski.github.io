const btn = document.querySelector('.btn');
const wrapper = document.querySelector('.wrapper');


function loadedPage() {
    let flagBtn = false;
    const changeColorWrapper = (e) => {
        if (flagBtn) {
            flagBtn = false;
            e.target.innerHTML = 'Hide';
            wrapper.classList.remove('disabled');
        } else {
            flagBtn = true;
            e.target.innerHTML = 'Show';
            wrapper.classList.add('disabled');
        }
    }


    btn.addEventListener('click', changeColorWrapper);
}


window.addEventListener('DOMContentLoaded', loadedPage);