const previewImgs = document.getElementsByClassName('preview');
var openImg = document.querySelectorAll('.open');
var prev = document.querySelectorAll('.lightbox-preview');

for(i=0; i<previewImgs.length; i++){
    previewImgs[i].addEventListener('click', openLightbox);
}

function openLightbox(event){
    window.scrollTo(0, 0);
    const target = event.currentTarget;
    document.querySelector('.lightbox-open').style.display = 'block';
    for(i=0; i<document.getElementsByClassName('open').length; i++){
        openImg[i].style.display = 'none';
        prev[i].style.marginTop = '50px';
    }
    document.querySelector("." + target.getAttribute('id')).style.display = 'block';
    document.querySelector('html').style.overflow = 'hidden';
}

function closeLightbox(){
    document.querySelector('html').style.overflow = 'initial';
    document.querySelector('.lightbox-open').style.display = 'none';
    for(i=0; i<document.getElementsByClassName('open').length; i++){
        prev[i].style.marginTop = '0px';
    }
}