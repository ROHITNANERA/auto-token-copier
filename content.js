// content.js

// Function to copy text to clipboard
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
      console.log("Access token copied to clipboard:", text);
  }).catch(err => {
      console.error("Failed to copy: ", err);
  });
}

// Listen for messages from background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "copyAccessToken") {
      copyToClipboard(request.token);
  }
});
