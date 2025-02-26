# Sharing Your Project

This document provides information on how to share your OPTION_PAiY-2.0 project with others using StackBlitz.

## Live Preview URL

The live preview of your project is available at:

[https://sb1-rg9ate.stackblitz.io](https://sb1-rg9ate.stackblitz.io)

This URL can be shared with anyone to view the live application without needing to set up a development environment.

## StackBlitz Editor URL

The StackBlitz editor for your project is available at:

[https://stackblitz.com/edit/sb1-rg9ate?file=.vscode%2Fsettings.json](https://stackblitz.com/edit/sb1-rg9ate?file=.vscode%2Fsettings.json)

This URL can be shared with collaborators who want to view and edit the code directly in the browser.

## Embed Options

### Basic Iframe Embed

You can embed the project in any HTML page using an iframe:

```html
<iframe 
  src="https://stackblitz.com/edit/sb1-rg9ate?embed=1&file=.vscode/settings.json" 
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  title="OPTION_PAiY-2.0"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
```

### SDK Embedding

For more control over the embedding, you can use the StackBlitz SDK:

1. Include the SDK in your HTML:

```html
<script src="https://unpkg.com/@stackblitz/sdk/bundles/sdk.umd.js"></script>
```

2. Embed the project using JavaScript:

```javascript
StackBlitzSDK.embedProjectId(
  'elementId',  // ID of the element to embed the project in
  'sb1-rg9ate',  // Project ID
  {
    forceEmbedLayout: true,
    openFile: '.vscode/settings.json',
    view: 'both'  // 'editor', 'preview', or 'both'
  }
);
```

### Using the Provided Embed Files

This project includes two files to help with embedding:

1. `stackblitz-embed.html` - A standalone HTML page with the project embedded
2. `stackblitz-embed.js` - A JavaScript module with functions for embedding the project

To use the standalone HTML page:
- Open `stackblitz-embed.html` in a browser
- Share the URL with others

To use the JavaScript module in your own application:
- Import the functions from `stackblitz-embed.js`
- Call the appropriate function to embed or open the project

## Customizing the Embed

You can customize the embedded view with various options:

- `openFile`: Specify which file to open initially
- `view`: Choose between 'editor', 'preview', or 'both'
- `hideNavigation`: Hide the navigation bar
- `hideDevTools`: Hide the developer tools panel
- `theme`: Set the editor theme ('light' or 'dark')

Example with custom options:

```javascript
StackBlitzSDK.embedProjectId(
  'elementId',
  'sb1-rg9ate',
  {
    forceEmbedLayout: true,
    openFile: 'index.js',
    view: 'preview',
    hideNavigation: true,
    hideDevTools: true,
    theme: 'dark'
  }
);
```

## Sharing on Social Media

When sharing on social media, use the live preview URL for the best user experience:

- Twitter: "Check out my project built with AI IDE, GitHub, and StackBlitz integration: https://sb1-rg9ate.stackblitz.io"
- LinkedIn: "I've created a project that demonstrates seamless integration between AI-powered IDEs, GitHub, and StackBlitz. Try it out: https://sb1-rg9ate.stackblitz.io"

## Collaboration

For real-time collaboration:

1. Share the StackBlitz editor URL with collaborators
2. Each person can make changes directly in the browser
3. Changes are synchronized in real-time
4. When ready, commit changes to GitHub using the built-in Git integration in StackBlitz

## Troubleshooting

If others have trouble accessing your shared project:

1. Ensure the repository is public on GitHub
2. Verify that StackBlitz has the necessary permissions to access your GitHub repository
3. Check that all dependencies are properly specified in package.json
4. Test the live preview URL in an incognito/private browser window
