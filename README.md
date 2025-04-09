# Gemini-ChatBot
## AI Chat

1. Variable Declarations:
const typingForm = document.querySelector('.typing-form'); Selects the form where the user types their message.

const chatList = document.querySelector('.chat-list'); Selects the container (list) that displays chat messages.

let userMessage = null; Initializes a variable to store the user's message.

2. API Configuration:
const API_KEY Stores the API key needed for authentication with the API.

const API_URL Constructs the full URL of the API endpoint using the API key.

3. Function to Create a New Message Element:
createMessageElement(content, ...classes)

Creates a div element dynamically for a chat message.

Adds content and CSS classes (...classes) to style it.

4. Function to Fetch API Response:
generateAPIresponse = async () => { ... }

Sends a POST request to the API using the fetch() method.

Sends the userMessage in the request body as JSON.

Tries to get the response and logs it to the console.

Catches and logs any errors in case the request fails.

5. Function to Show Loading Animation:
showLoadingAnimation()

Creates and appends a message element styled as a "loading" indicator.

Calls generateAPIresponse() to fetch the actual API response.

6. Function to Handle Outgoing Chat Messages:
handleOutgoingChat()

Fetches the user's typed message from the input field (.typing-input).

Prevents processing if the field is empty (if (!userMessage) return;).

Creates and appends a "message bubble" for the user's message.

Clears the input field with typingForm.reset().

Waits for 500ms before displaying the loading animation.

7. Event Listener:
typingForm.addEventListener('submit', ...)

Prevents the form's default submission behavior (e.preventDefault()).

Calls handleOutgoingChat() to process the message.

Key Features in the Code:
Dynamic UI Updates: The chat messages and loading animations are dynamically created and added to the DOM.

Asynchronous API Calls: Uses async/await for non-blocking API calls and error handling.

Reusability: Separate functions (createMessageElement, generateAPIresponse) make the code modular and easier to maintain.
