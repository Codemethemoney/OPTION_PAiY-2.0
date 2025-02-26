/**
 * Example Component
 * 
 * This is an example component created to demonstrate the workflow
 * between AI IDE, GitHub, and StackBlitz.
 */

// In a real React application, you would use:
// import React from 'react';

/**
 * ExampleComponent - A simple component that displays a message and a button
 * @param {Object} props - Component properties
 * @param {string} props.title - The title to display
 * @param {string} props.message - The message to display
 * @param {Function} props.onButtonClick - Function to call when the button is clicked
 * @returns {HTMLElement} The rendered component
 */
function ExampleComponent(props = {}) {
  const {
    title = 'Example Component',
    message = 'This is an example component created with AI assistance.',
    onButtonClick = () => console.log('Button clicked!')
  } = props;
  
  // For a vanilla JS implementation (non-React)
  const renderVanilla = () => {
    const container = document.createElement('div');
    container.className = 'example-component';
    
    const titleElement = document.createElement('h2');
    titleElement.textContent = title;
    
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    
    const button = document.createElement('button');
    button.className = 'action-button';
    button.textContent = 'Click Me';
    button.addEventListener('click', onButtonClick);
    
    container.appendChild(titleElement);
    container.appendChild(messageElement);
    container.appendChild(button);
    
    return container;
  };
  
  // For a React implementation (commented out)
  /*
  return (
    <div className="example-component">
      <h2>{title}</h2>
      <p>{message}</p>
      <button className="action-button" onClick={onButtonClick}>
        Click Me
      </button>
    </div>
  );
  */
  
  // Return the vanilla implementation for now
  return renderVanilla();
}

// For CommonJS environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ExampleComponent;
}

// For ES modules
// export default ExampleComponent;
