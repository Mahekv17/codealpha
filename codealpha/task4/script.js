const ws = new WebSocket('ws://localhost:3000');
const messagesContainer = document.getElementById('messages');
const inputField = document.getElementById('input');

ws.onmessage = function(event) {
    const data = JSON.parse(event.data);
    displayMessage(data.message, 'bot');
    console.log('Received message from server:', event.data);
};
ws.onopen = function () {
    // Safe to send messages now
    ws.send('Hello, server!');
};
if (ws.readyState === WebSocket.OPEN) {
    ws.send('Hello, server!');
} else {
    console.error('WebSocket is not open.');
}
ws.close();
// Further attempts to send messages will result in the mentioned error



function sendMessage() {
    const userMessage = inputField.value.trim();
    if (userMessage !== '') {
        displayMessage(userMessage, 'user');
        ws.send(userMessage);
        inputField.value = '';
    }
}

function displayMessage(message, role) {
    const messageElement = document.createElement('div');
    messageElement.className = role;
    messageElement.innerHTML = `<p>${role === 'bot' ? 'ChatGPT:' : 'You:'} ${message}</p>`;
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}
