function swapImg(image, manga_image, anime_image, scroll, width) {
    if (image.src != manga_image) {
        image.src = manga_image;
        image.style.width = width;
        if (scroll == 1){
            window.scrollBy(0, window.innerHeight);
        }
        if (scroll == 0)
            window.scrollBy(0, window.innerHeight/7);
    } else{
        image.src = anime_image;
        window.scrollTo(0,0);
    }

}

