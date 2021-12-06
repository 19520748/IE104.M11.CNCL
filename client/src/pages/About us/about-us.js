var btnOpen = document.querySelector('.open-model-btn');
var model = document.querySelector('.model');
var iconClose = document.querySelector('.model__header');
var btnClose = document.querySelector('.model__footer button');

function toggleModel(e) {
    console.log(e.target);
    model.classList.toggle('hide');
}

btnOpen.addEventListener('click', toggleModel)
btnClose.addEventListener('click', toggleModel)
iconClose.addEventListener('click', toggleModel)
model.addEventListener('click', function (e) {
    if (e.target == e.currentTarget) {
        toggleModel();
    }
})