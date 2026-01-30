import { app, BrowserWindow, screen } from 'electron';
import * as path from "node:path";
import * as electron from 'electron';

let mainWindow: BrowserWindow | null;
const IS_DEV = process.env.NODE_ENV === 'development';

async function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  mainWindow = new BrowserWindow({
    width,
    height,
    transparent: true,
    frame:false
  })

    if (IS_DEV) {
        mainWindow.webContents.openDevTools()
    }

  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    electron.shell.openExternal(url);
    return { action: 'deny' };
  });

  // Vite dev server URL
  if (IS_DEV) {
    const port = '5173';
    await mainWindow.loadURL('http://localhost:' + port + '/');
  }
  else {
    await mainWindow.loadFile(path.join(__dirname, '../renderer/index.html'));
  }
  mainWindow.on('closed', () => mainWindow = null);
}

app.whenReady().then(async () => {
  await createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', async () => {
  if (mainWindow == null) {
    await createWindow();
  }
});