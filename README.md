# Copy Access Token Extension

## Overview

The **Copy Access Token** extension for Microsoft Edge automatically copies the access token from the API response when the web application makes a request to a specified endpoint. This extension is designed to streamline the process of retrieving access tokens for testing and development purposes.

## Features

- Automatically copies the access token from the API response.
- Prevents multiple copies until the web application is reloaded.
- Simple and efficient for developers working with APIs.

## Setup

### Prerequisites

- Microsoft Edge browser installed on your machine.

### Installation Steps

1. **Clone the repository**
   -  Open your terminal and run the following command to clone the repository.
   -  git clone https://github.com/ROHITNANERA/auto-token-copier.git

2. **Navigate to the Extension Directory**
   -  run following command to switch to the extension directory.
   -  cd auto-token-copier

3. **Modify the URLs**
   -  Open the manifest.json and background.js files in a text editor and update the following placeholders
   -  Replace https://your-host-name/ with the URL of your web application.
   -  Replace https://your-host-name/your-endpoint/ with the actual API endpoint you want to monitor for access tokens.

4. **Load the Extension in Edge**
   -  Open Microsoft Edge.
   -  Navigate to edge://extensions/.
   -  Enable Developer mode at the bottom right corner.
   -  Click on Load unpacked and select the cloned repository folder.

**Usage**
   -  Navigate to your web application and log in.
   -  Trigger the API call to the specified endpoint (e.g., https://your-host-name/your-endpoint/).
   -  The extension will automatically copy the access token to your clipboard without any user interaction.
   -  If you reload the web application, the extension will allow the access token to be copied again.

**Contributing**
   -  If you would like to contribute to this project, please feel free to submit a pull request or open an issue for discussion.