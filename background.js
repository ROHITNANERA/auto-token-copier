let tokenCopied = false; // Flag to prevent multiple copies

// Listener for web requests
chrome.webRequest.onCompleted.addListener(
  function(details) {
    if (details.url.includes('your-endpoint/') && details.statusCode === 200 && !tokenCopied) {
      // Fetch the response from the API
      fetch(details.url)
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Network response was not ok');
          }
        })
        .then(data => {
          // Assuming the response is an array, and we want the access_token from the first object
          const accessToken = data[0]?.access_token;
          if (accessToken) {
            // Send a message to the content script to copy the access token
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
              chrome.tabs.sendMessage(tabs[0].id, { action: "copyAccessToken", token: accessToken });
            });
            tokenCopied = true; // Set the flag to true to prevent further copies
          } else {
            console.log("Access token not found in the response.");
          }
        })
        .catch(err => console.error("Error fetching access token:", err));
    }
  },
  { urls: ["https://your-host-name/your-endpoint/"] }
);

// Listener to reset the tokenCopied flag when the tab is updated
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // Check if the tab is updated and the URL matches your web app
  if (changeInfo.status === 'complete' && tab.url && tab.url.includes("https://your-host-name/your-endpoint/")) {
    tokenCopied = false; // Reset the flag on page reload
  }
});
