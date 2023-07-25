# Keycloak Login Token Interceptor

This Node.js script is built to automate the process of navigating to a Keycloak login page and listening for the token request generated upon a successful login. The script uses Puppeteer, a Node library which provides a high-level API to control headless Chrome or Chromium browsers.

## Overview

When this script is executed, it performs the following operations:

1. **Launch Puppeteer**: Puppeteer is started in a non-headless browser so the user can manually interact with the login page.

2. **Enable Request Interception**: Puppeteer's request interception is enabled. This allows the script to inspect and potentially alter all network requests made by the browser. We're specifically interested in the token request.

3. **Navigate to Keycloak Login Page**: Puppeteer navigates to the Keycloak login page. The login page URL is constructed using your Keycloak server's location, the client ID, and the desired redirect URL.

4. **Capture Token Request**: The script listens for all network requests. When it detects a request to the token endpoint, it logs the POST data of that request. This POST data contains the tokens returned by Keycloak upon a successful login.

5. **Wait for Navigation**: After the user manually enters their credentials and submits the form, the page will navigate to the redirect URL. The script waits until this navigation is complete.

6. **Close Browser**: Finally, the script closes the browser.

## Important Note

This script is intended for testing and learning purposes only. It is crucial to handle sensitive data such as tokens and user credentials with care, and this script does not include any security measures. It should not be used in a production environment or in a manner that violates any platform's terms of service.

## Usage

To run this script, you need to have Node.js and Puppeteer installed in your environment. If not, you can install them using npm (Node Package Manager):

```bash
npm install puppeteer
```

Once the dependencies are installed, replace `'YOUR_TOKEN_ENDPOINT'`, `'YOUR_CLIENT_ID'`, and `'YOUR_REDIRECT_URL'` in the script with your actual values, and then run the script:

```bash
node script.js
```

The browser will open and navigate to the Keycloak login page. You can then manually enter your credentials and submit the form. When the token request is made, the POST data of the request will be logged to the console. The browser will close once the navigation to the redirect URL is complete.

If you wish to keep the browser open, you can comment out or remove the line `await browser.close();`.
