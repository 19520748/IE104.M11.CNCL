const socket = io('http://localhost:3000')
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')
const messageContainer = document.getElementById('chat-content')

var scrolled = false;
function updateScroll(){
    if(!scrolled){
        messageContainer.scrollTop = messageContainer.scrollHeight;
    }
}

$("#chat-content").on('scroll', function(){
    scrolled=true;
});

socket.on('chat-message', message => {
    appendMessage2(message)
})

messageForm.addEventListener('submit', e => {
    e.preventDefault()
    const message = messageInput.value
    appendMessage1(message)
    socket.emit('send-chat-message', message)
    messageInput.value = ''
})

function appendMessage1(message) {
    const messageElement = document.createElement('div')
    messageElement.className = 'user1'
    messageElement.innerText = message
    messageContainer.append(messageElement)
    setInterval(updateScroll,500);
    scrolled = false;
}

function appendMessage2(message) {
    const messageElement = document.createElement('div')
    messageElement.className = 'user2'
    messageElement.innerText = message
    messageContainer.append(messageElement)
}