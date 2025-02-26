// Import the ExampleComponent (in a real application)
// const ExampleComponent = require('../src/components/ExampleComponent');

// DOM elements
const apiStatusElement = document.getElementById('api-status');
const helloMessageElement = document.getElementById('hello-message');
const refreshStatusButton = document.getElementById('refresh-status');
const refreshHelloButton = document.getElementById('refresh-hello');
const exampleComponentContainer = document.getElementById('example-component-container');

// Function to fetch API status
async function fetchApiStatus() {
  try {
    apiStatusElement.textContent = 'Fetching status...';
    
    const response = await fetch('/api/status');
    const data = await response.json();
    
    const formattedTime = new Date(data.timestamp).toLocaleString();
    
    apiStatusElement.innerHTML = `
      <div class="status-item">Status: <strong>${data.status}</strong></div>
      <div class="status-item">Message: ${data.message}</div>
      <div class="status-item">Time: ${formattedTime}</div>
    `;
  } catch (error) {
    apiStatusElement.innerHTML = `
      <div class="error">Error fetching API status: ${error.message}</div>
    `;
    console.error('Error fetching API status:', error);
  }
}

// Function to fetch hello message
async function fetchHelloMessage() {
  try {
    helloMessageElement.textContent = 'Fetching message...';
    
    const response = await fetch('/api/hello');
    const data = await response.json();
    
    const formattedTime = new Date(data.timestamp).toLocaleString();
    
    helloMessageElement.innerHTML = `
      <div class="message-item">Message: <strong>${data.message}</strong></div>
      <div class="message-item">Time: ${formattedTime}</div>
    `;
  } catch (error) {
    helloMessageElement.innerHTML = `
      <div class="error">Error fetching hello message: ${error.message}</div>
    `;
    console.error('Error fetching hello message:', error);
  }
}

// Event listeners
refreshStatusButton.addEventListener('click', fetchApiStatus);
refreshHelloButton.addEventListener('click', fetchHelloMessage);

// Initial fetch on page load
document.addEventListener('DOMContentLoaded', () => {
  fetchApiStatus();
  fetchHelloMessage();
  renderExampleComponent();
});

// Function to render the example component
function renderExampleComponent() {
  // In a real application, we would import the component
  // For this example, we'll create a simplified version inline
  
  const container = document.createElement('div');
  container.className = 'example-component';
  
  const titleElement = document.createElement('h2');
  titleElement.textContent = 'Example Component';
  
  const messageElement = document.createElement('p');
  messageElement.textContent = 'This is an example component created with AI assistance.';
  
  const button = document.createElement('button');
  button.className = 'action-button';
  button.textContent = 'Click Me';
  button.addEventListener('click', () => {
    alert('Button clicked! This demonstrates the integration between AI IDE, GitHub, and StackBlitz.');
  });
  
  container.appendChild(titleElement);
  container.appendChild(messageElement);
  container.appendChild(button);
  
  // Clear any existing content
  if (exampleComponentContainer) {
    exampleComponentContainer.innerHTML = '';
    exampleComponentContainer.appendChild(container);
  }
}
