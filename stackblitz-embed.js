/**
 * StackBlitz SDK Embedding Script
 * 
 * This script demonstrates how to embed a StackBlitz project using the SDK.
 * It can be used in any web application to embed the OPTION_PAiY-2.0 project.
 * 
 * For more information, see: https://developer.stackblitz.com/docs/platform/embedding
 */

// Import the StackBlitz SDK
// In a real application, you would use:
// import sdk from '@stackblitz/sdk';
// But for simplicity in browser environments, you can use the UMD bundle:
// <script src="https://unpkg.com/@stackblitz/sdk/bundles/sdk.umd.js"></script>

/**
 * Embeds the OPTION_PAiY-2.0 project in the specified element
 * @param {string|HTMLElement} elementOrId - The element or element ID to embed the project in
 * @param {Object} options - Additional options for the embedding
 */
function embedOptionPaiyProject(elementOrId, options = {}) {
  // Default options
  const defaultOptions = {
    forceEmbedLayout: true,
    openFile: '.vscode/settings.json',
    view: 'both', // 'editor', 'preview', or 'both'
    hideNavigation: false,
    hideDevTools: false
  };
  
  // Merge default options with provided options
  const embedOptions = { ...defaultOptions, ...options };
  
  // Embed the project
  if (typeof StackBlitzSDK !== 'undefined') {
    StackBlitzSDK.embedProjectId(
      elementOrId,
      'sb1-rg9ate',
      embedOptions
    );
  } else {
    console.error('StackBlitz SDK not loaded. Make sure to include the SDK script.');
  }
}

/**
 * Opens the OPTION_PAiY-2.0 project in a new tab
 * @param {Object} options - Additional options for opening the project
 */
function openOptionPaiyProject(options = {}) {
  // Default options
  const defaultOptions = {
    openFile: '.vscode/settings.json'
  };
  
  // Merge default options with provided options
  const openOptions = { ...defaultOptions, ...options };
  
  // Open the project
  if (typeof StackBlitzSDK !== 'undefined') {
    StackBlitzSDK.openProjectId(
      'sb1-rg9ate',
      openOptions
    );
  } else {
    // Fallback if SDK is not available
    window.open('https://stackblitz.com/edit/sb1-rg9ate?file=.vscode%2Fsettings.json', '_blank');
  }
}

// Example usage in a browser environment:
// 
// // Embed the project in an element with ID 'stackblitz-container'
// embedOptionPaiyProject('stackblitz-container', {
//   view: 'preview',
//   hideNavigation: true
// });
// 
// // Add click handler to a button to open the project in a new tab
// document.getElementById('open-project-button').addEventListener('click', () => {
//   openOptionPaiyProject();
// });

// Export functions for module environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    embedOptionPaiyProject,
    openOptionPaiyProject
  };
}
