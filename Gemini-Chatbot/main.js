const typingForm = document.querySelector('.typing-form');
const chatList = document.querySelector('.chat-list');
let userMessage = null;

// API configuration :
const API_KEY = "AIzaSyAbQ9f22AgXYP5nQW0WKItpLTEkTC7uDcw";
const API_URL = `"https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}"`;

// Create a new message element and return it :
const createMessageElement = (content, ...classes) => {
        const div = document.createElement('div');
        div.classList.add('message', ...classes);
        div.innerHTML = content;
        return div;
    }
    // Fetch response from the API based on user message :
const generateAPIresponse = async() => {
    // Send a POST request to the API with the user's message :
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{
                    role: 'user',
                    parts: [{ text: userMessage }]
                }]
            })
        });

        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.log(error);
    }
}

// Show a loading animation while waiting for the API response :
const showLoadingAnimation = () => {
    const html = `
            <div class="message-content">
                <img src="images/gemini.svg" alt="Gemini Image" class="avatar">
                <p class="text"></p>
                <div class="loading-indicator">
                    <div class="loading-bar"></div>
                    <div class="loading-bar"></div>
                    <div class="loading-bar"></div>
                </div>
            </div>
            <span class="icon material-symbols-rounded">content_copy</span>
            `;
    const incomingMessageDiv = createMessageElement(html, 'incoming', 'loading');

    chatList.appendChild(incomingMessageDiv);

    generateAPIresponse();
}

// Handle sending outgoing chat messages :
const handleOutgoingChat = () => {
    userMessage = typingForm.querySelector('.typing-input').value.trim();
    if (!userMessage) return; // Exit if there is no message 

    const html = `
            <div class="message-content">
                <img src="images/user.jpg" alt="User Image" class="avatar">
                <p class="text"></p>
            </div>
            `;
    const outgoingMessageDiv = createMessageElement(html, 'outgoing');

    outgoingMessageDiv.querySelector('.text').innerText = userMessage;
    chatList.appendChild(outgoingMessageDiv);

    typingForm.reset(); // Clear input field 
    setTimeout(showLoadingAnimation, 500); // Show  loading animation after a delay
}

// Prevent default form submission and handle outgoing chat :
typingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    handleOutgoingChat();
});






















//   ###########################################