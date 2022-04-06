//########################## Start Banner Script ##########################
var slideIndex = 1;
banner(slideIndex);

function plus(slide) 
{
    banner(slideIndex += slide);
}

function current(slide) 
{
    banner(slideIndex = slide);
}

function banner(slide) 
{
    var i;
    
    var slides = document.getElementsByClassName("banner__item");
    var dots = document.getElementsByClassName("unit__item");

    if (slide > slides.length) 
    {
        slideIndex = 1;
    } 

    if (slide < 1) 
    {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) 
    {
        slides[i].style.display = "none";  
    }

    for (i = 0; i < dots.length; i++) 
    {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";

    // setTimeout(banner,1000,slide)

}
// window.addEventListener("load", banner(slideIndex));

//########################## End Banner Script ##########################

