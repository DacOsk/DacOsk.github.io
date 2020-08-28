const upBtn = document.querySelector(".up-button");

window.onscroll = function() { showUpBtn() };

function showUpBtn() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        upBtn.classList.remove('hide');
    } else {
        upBtn.classList.add('hide');
    }
}

upBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

upBtn.addEventListener('keypress', e => {
    if (e.keyCode === 13) {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
});