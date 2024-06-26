# sn-browser-refresh
This is meant to be used with sn-utils for when working on VSCode.
# sn-browser-refresh

This script is designed to be used with `sn-utils` when working on VSCode. It automatically refreshes a ServiceNow instance page in a browser when changes are detected in the specified directory.

## Step-by-Step Setup

### 1. Install Node.js and NPM
Ensure that Node.js and NPM are installed on your system. Download them from [nodejs.org](https://nodejs.org).

### 2. Set Up Your Project
Create a new directory for your Node.js project or use an existing one where you want to place the script. Open a command prompt or terminal in this directory and initialize a new Node.js project:

```bash
npm init -y
```

### 3. Install Required Packages
Install puppeteer and chokidar by running:

```bash
npm install puppeteer chokidar

```

### 4. Run the script
```bash
node browser-refresh.js

```

### This script

- Opens your ServiceNow instance page.
- Watches for changes in your specified directory.
- Refreshes the browser tab automatically whenever a file is updated.


Ensure that the browser session stays active and the page does not log out due to inactivity.

Using this setup, you should be able to see the ServiceNow page refresh automatically every time sn-utils syncs changes to your files. This can significantly speed up your development process by reducing the need to manually refresh the page.