let Message = ["hi", "its", "me" ,];

let button = document.getElementById('buttonElement');
let fortune = document.getElementById('fortune');

// fortune getter 
function randomNumberGen() {
    let randomFortune = Math.floor(Math.random() * Message.length);
    return Message[randomFortune];
}
// shows the fortune
function showFortune(){
    fortune.innerHTML = randomNumberGen();
    button.innerHTML = "Mix More Messages";
    button.style.cursor = "default";
  }

//fortune activator
button.addEventListener('click', showFortune);
