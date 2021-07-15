const closePopUp = document.querySelector('.modal-close');
const modal = document.querySelector('.modal');
const openPopUp = document.querySelector('.rules-button');
const mask =  document.querySelector('.mask');
const playButton = document.querySelector('.info-button');

playButton.addEventListener('click', function(){
    console.log('Button clicked');
});

openPopUp.addEventListener('click', function(){
    modal.classList.add('modal-show');
    mask.classList.add('modal-show');

});

closePopUp.addEventListener('click', function(){
    modal.classList.remove('modal-show');
    mask.classList.remove('modal-show');
})