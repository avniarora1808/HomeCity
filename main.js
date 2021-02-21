
class Typewriter{
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
    // Current index of word
    const current = this. wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words [current];

    // Check if deleting
    if(this.isDeleting) {
    //remove char
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    }else {
        //Add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Type Speed
    let typeSpeed = 300;

    if(this.isDeleting) {
    typeSpeed = typeSpeed/= 2; 
    }

    // If word is complete
    if(!this.isDeleting&& this.txt === fullTxt) {
        // Make a pause at end
        typeSpeed = this.wait;
        // Set delete to true
        this.isDeleting = true;
    } else if(this.isDeleting && this.txt ===''){
        this.isDeleting = false;
        // Move to the next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 500;
    }

        setTimeout(() => this.type(), typeSpeed)
    }
}


// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    //Init Typewriter
    new Typewriter(txtElement, words, wait);

}

function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

// var slideIndex = 0;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
  
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// } 


var slideIndex = 0;
showSlides();

// Next/previous controls
function plusSlides(n) {
    showpSlides(slideIndex += n);
}
function subSlides(n) {
    showsSlides(slideIndex -= n);
}
 
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }   
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// var ProdImg=document.getElementbyId("ProdImg");
// var SmallImg = document.getElementsByClassName("small-img");

// SmallImg[0].onclick=function(){
//     ProdImg.src=smallImg[0].src;
// }
// SmallImg[1].onclick =  function(){
//     ProdImg.src=smallImg[1].src;
// }
// SmallImg[2].onclick=function(){
//     ProdImg.src=smallImg[2].src;
// }
// SmallImg[3].onclick=function(){
//     pPodImg.src=smallImg[3].src;
// }

// const popup = document.querySelector('.chat-popup');
// const chatBtn = document.querySelector('.chat-btn');
// const submitBtn = document.querySelector('.submit');
// const chatArea = document.querySelector('.chat-area');
// const inputElm = document.querySelector('input');
// const emojiBtn = document.querySelector('#emoji-btn');
// const picker = new EmojiButton();
// know = {
//     "hello" : "hi",
//     "how are you?" : "good",
//     "ok" : ":)"
// };
// // Emoji selection  
// window.addEventListener('DOMContentLoaded', () => {

//     picker.on('emoji', emoji => {
//       document.querySelector('input').value += emoji;
//     });
  
//     emojiBtn.addEventListener('click', () => {
//       picker.togglePicker(emojiBtn);
//     });
// });        

// //   chat button toggler 
// chatBtn.onclick{
//     popup.classList.toggle('show');
// })

// // send msg 
// submitBtn.addEventListener('click', ()=>{
//     let userInput = inputElm.value;

//     let temp = `<div class="out-msg">
//     <span class="my-msg">${userInput}</span>
//     <img src="img/me.jpg" class="avatar">
//     </div>`;

//     chatArea.insertAdjacentHTML("beforeend", temp);
//     inputElm.value = '';
//     if (userInput in know) {
//         chatArea.insertAdjacentHTML("beforeend", `<div class="income-msg">
//         <span class="msg">${know[userInput]}</span>
//         <img src="img/me.jpg" class="avatar">
//         </div>`);
//     } else {
//         chatArea.insertAdjacentHTML("beforeend", `<div class="income-msg">
//         <span class="msg">${"i don't understand..."}</span>
//         <img src="img/me.jpg" class="avatar">
//         </div>`);
//     }
    

// })