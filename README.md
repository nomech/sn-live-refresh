# sn-browser-refresh

This script is designed to be used with `sn-utils` when working in VSCode. It automatically refreshes the browser whenever changes  are detected in the specified directory.

### This script

- Opens your ServiceNow instance page.
- Watches for changes in your specified directory.
- Refreshes the browser tab automatically whenever a file is updated.


Ensure that the browser session stays active and the page does not log out due to inactivity.

Using this setup, you should be able to see the ServiceNow page refresh automatically every time sn-utils syncs changes to your files. This can significantly speed up your development process by reducing the need to manually refresh the page.

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

### 4. Change the URL and folder path
Change the url path on line 14
```bash
  await page.goto('https://<instace-name>.service-now.com/);
```
and the folder path on line 20

#### Windows
```bash
  const watcher = chokidar.watch("C:\\path\\to\\sn-utils\\root\\folder",
```

#### Linux/Mac
```bash
  const watcher = chokidar.watch("/path/to/sn-utils/root/folder",
```

### 5. Run the script
```bash
node browser-refresh.js

```

