const { app, BrowserWindow } = require('electron');
const path = require('path');
function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 500,
    height: 600,
    minWidth: 300, 
    minHeight: 400,
    autoHideMenuBar: true,
    icon: path.join(__dirname, 'icon.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });
  mainWindow.loadFile('index.html');
}
app.on('ready', createWindow);