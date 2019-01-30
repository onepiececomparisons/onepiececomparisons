
function swapImg(image, manga_image, anime_image, scroll, width) {
    var current = image.src;
    current_name = current.split('/').reverse()[0];
    manga_image_name = manga_image.split('/').reverse()[0];
    anime_image_name = anime_image.split('/').reverse()[0];
    
    if (current_name !=manga_image_name) {
        image.src = manga_image;
        image.style.width = width;
        if (scroll == 1) {
            window.scrollBy(0, window.innerHeight);
        }
        if (scroll == 0)
            window.scrollBy(0, window.innerHeight / 7);
    } else {
        image.src = anime_image;
        window.scrollTo(0, 0);
    }
    document.getElementById("title3").outerHTML = "";
    document.getElementById("counter").style.display = 'block';

}