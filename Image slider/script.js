const previous = document.querySelector("#previous");
const next = document.querySelector("#next");
const closeBtn = document.querySelector("#close");
const images = document.querySelectorAll(".item");
const totalImages = images.length;
let index = 0;

next.addEventListener("click", moveRight)

previous.addEventListener("click", moveLeft)

function moveLeft() {
    nextImage("previous")
}
function moveRight() {
    nextImage("next");
}
function nextImage(direction) {
    if(direction == 'next') {
      index++;
      if(index == totalImages) {
        index = 0;
      }
    } else {
      if(index == 0) {
        index = totalImages - 1;
      } else {
        index--;
      }
    }
  
    for(let i = 0; i < images.length; i++) {
      images[i].classList.remove('block');
    }
    images[index].classList.add('block');
}
document.addEventListener("keydown",(e) => {    
    switch(e.keyCode) {
        case 37:
            moveLeft();
            break;
        case 39:
            moveRight();
        break;    
    }    
}) 
function clicked() {
    document.querySelector(".slider").style.width = "90vw";
    document.querySelector(".slider").style.height = "90vh";
    closeBtn.style.display = "block";
}
closeBtn.addEventListener("click", () => {
    document.querySelector(".slider").style.width = "500px";
    document.querySelector(".slider").style.height = "100vh";
    closeBtn.style.display = "none";
})

 
    
    
  
