const { app, BrowserWindow, Menu, shell } = require('electron');
const path = require('path');

// Keep a global reference of the window object
let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 820,
    minWidth: 960,
    minHeight: 640,
    title: 'Deep Learning Intuition',
    icon: path.join(__dirname, 'assets', 'icon.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      // Allow local file access for the HTML app
      webSecurity: false,
    },
    backgroundColor: '#0f1117',
    show: false, // Don't show until ready to avoid flash
  });

  // Load the web app
  mainWindow.loadFile(path.join(__dirname, 'app', 'index.html'));

  // Show window when ready (avoids white flash)
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// Build the application menu
function buildMenu() {
  const template = [
    {
      label: 'Deep Learning Intuition',
      submenu: [
        {
          label: 'About',
          click() {
            const { dialog } = require('electron');
            dialog.showMessageBox(mainWindow, {
              type: 'info',
              title: 'About',
              message: 'Deep Learning Intuition',
              detail: 'An interactive visualizer for deep learning architectures.\n\nCNN · ResNet · RNN/LSTM · Transformers · VAE · GAN · Diffusion\n\nCreated by Abdullah Hasan',
              buttons: ['OK'],
              icon: path.join(__dirname, 'assets', 'icon.png'),
            });
          }
        },
        { type: 'separator' },
        { role: 'quit' }
      ]
    },
    {
      label: 'View',
      submenu: [
        { role: 'reload' },
        { role: 'forceReload' },
        { type: 'separator' },
        { role: 'resetZoom' },
        { role: 'zoomIn', accelerator: 'CmdOrCtrl+=' },
        { role: 'zoomOut' },
        { type: 'separator' },
        { role: 'togglefullscreen' }
      ]
    },
    {
      label: 'Window',
      submenu: [
        { role: 'minimize' },
        { role: 'zoom' },
        { type: 'separator' },
        { role: 'front' }
      ]
    }
  ];

  // On macOS, the first menu item is always the app name
  if (process.platform !== 'darwin') {
    template.shift(); // remove the "app name" menu on Windows/Linux
    template.unshift({
      label: '&File',
      submenu: [
        {
          label: 'About Deep Learning Intuition',
          click() {
            const { dialog } = require('electron');
            dialog.showMessageBox(mainWindow, {
              type: 'info',
              title: 'About',
              message: 'Deep Learning Intuition',
              detail: 'An interactive visualizer for deep learning architectures.\n\nCNN · ResNet · RNN/LSTM · Transformers · VAE · GAN · Diffusion\n\nCreated by Abdullah Hasan',
              buttons: ['OK'],
            });
          }
        },
        { type: 'separator' },
        { role: 'quit' }
      ]
    });
  }

  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}

app.whenReady().then(() => {
  buildMenu();
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
