const chatForm = document.getElementById("chat-form");

const socket = io();

socket.on("message", (message) => {
  console.log(message);
  outputMessage(message);
});

//Message alert
chatForm.addEventListener("submit", (e) => {
  e.preventDefault();

  //Get message text
  const msg = e.target.elements.msg.value;

  //Emit msg to server
  socket.emit("chatMessage", msg);
});

//OutputMessage to DOM
function outputMessage(message) {
  const div = document.createElement("div");
  div.classList.add("message");
  div.innerHTML = `<p class="meta"> Brad <span>9:12pm</span></p>
  <p class="text">
    ${message}
  </p>`;
  document.getElementById;
}