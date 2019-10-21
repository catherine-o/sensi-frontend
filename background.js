import { app, protocol, BrowserWindow, ipcMain } from 'electron'
import {
  createProtocol,
  installVueDevtools
} from 'vue-cli-plugin-electron-builder/lib';
const isDevelopment = process.env.NODE_ENV !== 'production';
let win;
let workerWin;
// check if the "App" protocol has already been created
let createdAppProtocol = false;
// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([{
  scheme: 'app', privileges: {
    secure: true,
    standard: true,
    corsEnabled: true,
    supportFetchAPI: true
  }
}])
function createWindow () {
  // create the game UI window
  win = new BrowserWindow({
    width: 1024, height: 790,
    webPreferences: { nodeIntegration: true }
  });
  if (process.env.WEBPACK_DEV_SERVER_URL) {
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
  } else {
    win.loadURL('app://./index.html');
  }
  win.on('closed', () => {
    // closing the main (visible) window should quit the App
    app.quit();
  });
}
function createWorker(devPath, prodPath) {
  // create hidden worker window
  workerWin = new BrowserWindow({
    show: false,
    webPreferences: { nodeIntegration: true }
  });
  if(process.env.WEBPACK_DEV_SERVER_URL) {
    workerWin.loadURL(process.env.WEBPACK_DEV_SERVER_URL + devPath);
  } else {
    workerWin.loadURL(`app://./${prodPath}`)
  }
  workerWin.on('closed', () => { workerWin = null; });
}
function sendWindowMessage(targetWindow, message, payload) {
  if(typeof targetWindow === 'undefined') {
    console.log('Target window does not exist');
    return;
  }
  targetWindow.webContents.send(message, payload);
}

app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installVueDevtools()
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }
  if(!createdAppProtocol) {
    createProtocol('app');
    createdAppProtocol = true;
  }
  // create the main application window
  createWindow();
  // create the background worker window
  createWorker('worker', 'worker.html');
  // setup message channels
  ipcMain.on('window-message-from-worker', (event, arg) => {
    sendWindowMessage(win, 'message-from-worker', arg);
  });
})