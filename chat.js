const popup = document.querySelector('.chat-popup');
const chatBtn = document.querySelector('.chat-btn');
const submitBtn = document.querySelector('.submit');
const chatArea = document.querySelector('.chat-area');
const inputElm = document.querySelector('input');

know = {
    "I'm looking for something":"You can click the |Shopping| button at the top right to access all the products. Is there anything else I can help with today?",
    "hello" : "hi, is there anything I can help with today?",
    "how are you?" : "good, is there anything else I can help with today?",
    "I don't understand how to navigate" : "To get started, you can find our products under |Shopping|, the items you choose to buy will be in your cart under the cart icon, and you can learn more about our small business under |About Us|. Please feel free to contact us for further assistance. Our contact information can be found under |Contact|. Is there anything else I can help with today?",
    "ok" : ":)",
    "thank you ": "no problem, is there anything else I can help with today?",
    "goodbye" : "goodbye, thank you for using Home City's livechat. :)",
    "where is the store located?" : "Home City is located on 450 Clover Street, Hamilton, Ontario. For more information, You can click |Help & FAQ| at the bottom of the website. As well as under |Contact| or |About Us|. Is there anything else I can help with today?",
    "where can i talk to an employee?" : "Any inquiries can be sent under |Contact| or you can directly contact one of our team members under |About Us|. Is there anything else I can help with today?",
};      

//   chat button toggler 
chatBtn.addEventListener('click', ()=>{
    popup.classList.toggle('show');
})

// send msg 
submitBtn.addEventListener('click', ()=>{
    let userInput = inputElm.value;

    let temp = `<div class="out-msg">
    <span class="my-msg">${userInput}</span>
    <img src="Home pics/table.webp" class="avatar">
    </div>`;

    chatArea.insertAdjacentHTML("beforeend", temp);
    inputElm.value = '';
    if (userInput in know) {
        temp = `<div class="income-msg"> <img src="Home pics/table.webp" class="avatar" alt="">
        <span class="msg"> ${know[userInput]}</span>
        </div>`;
        chatArea.insertAdjacentHTML("beforeend", temp);
    } else {
      temp = `<div class="income-msg"> <img src="Home pics/table.webp" class="avatar" alt="">
      <span class="msg"> ${"I not sure if I understand. To speak with a Home City employee, please contact us through the information under |Contact| or any of our socials. Is there anything else I can help with today?"}</span>
      </div>`;
      chatArea.insertAdjacentHTML("beforeend", temp);
    }

})
inputElm.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    submitBtn.click();
  }
});

