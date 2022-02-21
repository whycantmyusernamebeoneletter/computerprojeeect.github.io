const hamburger=document.querySelector('.hamburger');

hamburger.addEventListener('click' , function () {
    this.classlist.toggle('is-active');
});