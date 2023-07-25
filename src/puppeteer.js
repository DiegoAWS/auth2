import  puppeteer from 'puppeteer';

export async function loginAndGetToken() {
  const browser = await puppeteer.launch({ headless: false }); // headless: false to visualize the process
  const page = await browser.newPage();
  
  // Enable request interception to capture the request that carries the token
  await page.setRequestInterception(true);
  page.on('request', interceptedRequest => {
    // Inspect the intercepted request URL here
    if (interceptedRequest.url().startsWith('YOUR_TOKEN_ENDPOINT')) {
      console.log(interceptedRequest.postData()); // Log post data if the request is the token endpoint
    }
    interceptedRequest.continue();
  });

  // Navigating to the login page
  const authUrl = `http://localhost:8080/auth/realms/myrealm/protocol/openid-connect/auth?client_id=YOUR_CLIENT_ID&response_type=code&scope=openid%20profile&redirect_uri=YOUR_REDIRECT_URL`;
  await page.goto(authUrl);

  // Wait until the redirect page loads completely
  await page.waitForNavigation({ waitUntil: 'networkidle0' });

  // Close the browser
  await browser.close();
}


