document.addEventListener('DOMContentLoaded', function() {
    const closeChatBtn = document.getElementById('closeChatBtn');
    const minimizeChatBtn = document.getElementById('minimizeChatBtn');
    const chatContainer = document.getElementById('chatContainer');
    const chatHeader = document.querySelector('.chat-header');
    const sendBtn = document.getElementById('sendBtn');
    const userInput = document.getElementById('userInput');
    const messagesContainer = document.getElementById('chatbox');

    function addMessage(sender, text) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', sender);
        messageDiv.textContent = text;
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    closeChatBtn.addEventListener('click', function(event) {
        chatContainer.style.display = 'none';
        event.stopPropagation();
    });

    minimizeChatBtn.addEventListener('click', function(event) {
        chatContainer.classList.toggle('minimized');
        event.stopPropagation();
    });

    chatHeader.addEventListener('click', function() {
        chatContainer.classList.remove('minimized');
    });

    function sendMessage() {
        const userMessage = userInput.value.trim();
        if (userMessage) {
            addMessage('user', userMessage);
            userInput.value = '';
            
            // Simulate guide response (you can replace this with actual backend logic)
            setTimeout(() => {
                const guideResponse = "Thank you for your message. How else can I help you with your travel plans?";
                addMessage('guide', guideResponse);
            }, 1000);
        }
    }

    sendBtn.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Initially show the chat window
    chatContainer.style.display = 'block';
});