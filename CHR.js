const cursor=document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top:'+(e.pageY - 20)+"px; left:"+(e.pageX)+"px;")
    


})


document.addEventListener('click', ()=>{
    cursor.classList.add('expand');

    setTimeout(()=>{
        cursor.classList.remove("expand");
    },500);
})
const imageContainer = document.getElementById("image-container");

function scrollImages() {
  const scrollAmount = 1;
  imageContainer.scrollLeft += scrollAmount;
}


setInterval(scrollImages, 2000);



document.addEventListener("DOMContentLoaded", function () {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    }

    function scrollToTop() {
        var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;

        if (currentPosition > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, currentPosition - currentPosition / 8);
        }
    }

    scrollToTopBtn.addEventListener("click", scrollToTop);
});
document.addEventListener("DOMContentLoaded", function () {
    var myButton = document.getElementById("myButton");

    myButton.addEventListener("click", function () {
        
        window.location.href = "SurNous.html";
    });
});



