import { app, BrowserWindow } from 'electron';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// The built directory structure
//
// ├─┬─┬ dist
// │ │ └── index.html
// │ │
// │ ├─┬ dist-electron
// │ │ ├── main.js
// │ │ └── preload.mjs
// │
process.env.APP_ROOT = path.join(__dirname, '..');

// Packaged applications must always load bundled files.
function getDevelopmentServerURL(): string | undefined {
  if (app.isPackaged) {
    return undefined;
  }

  const value = process.env['VITE_DEV_SERVER_URL'];

  if (!value) {
    return undefined;
  }

  try {
    const url = new URL(value);

    const allowedHosts = [
      'localhost',
      '127.0.0.1',
      '[::1]',
    ];

    if (
      url.protocol !== 'http:' ||
      !allowedHosts.includes(url.hostname) ||
      url.username ||
      url.password
    ) {
      throw new Error('Invalid development server URL');
    }

    return url.href;
  } catch {
    throw new Error(
      'VITE_DEV_SERVER_URL must be a valid local HTTP URL.'
    );
  }
}

export const VITE_DEV_SERVER_URL = getDevelopmentServerURL();
export const MAIN_DIST = path.join(process.env.APP_ROOT, 'dist-electron');
export const RENDERER_DIST = path.join(process.env.APP_ROOT, 'dist');

process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL
  ? path.join(process.env.APP_ROOT, 'public')
  : RENDERER_DIST;

let win: BrowserWindow | null;

function createWindow() {
  win = new BrowserWindow({
    title: 'Social Medea Studio',
    width: 1440,
    height: 900,
    minWidth: 1100,
    minHeight: 700,
    center: true,
    resizable: true,
    maximizable: true,
    minimizable: true,
    fullscreenable: true,
    autoHideMenuBar: true,
    icon: path.join(process.env.VITE_PUBLIC, 'electron-vite.svg'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.mjs'),

      // Renderer security
      contextIsolation: true,
      nodeIntegration: false,
      nodeIntegrationInWorker: false,
      nodeIntegrationInSubFrames: false,
      sandbox: true,
      webSecurity: true,
      allowRunningInsecureContent: false,
      webviewTag: false,
    },
  });

  // Restrict navigation to the application.
  const allowedURL = VITE_DEV_SERVER_URL
    ? new URL(VITE_DEV_SERVER_URL)
    : pathToFileURL(path.join(RENDERER_DIST, 'index.html'));

  function isAllowedNavigation(targetURL: string): boolean {
    try {
      const target = new URL(targetURL);

      if (VITE_DEV_SERVER_URL) {
        return target.origin === allowedURL.origin;
      }

      target.hash = '';
      target.search = '';

      return target.href === allowedURL.href;
    } catch {
      return false;
    }
  }

  win.webContents.on('will-navigate', (event, targetURL) => {
    if (!isAllowedNavigation(targetURL)) {
      event.preventDefault();
    }
  });

  win.webContents.on('will-redirect', (event, targetURL) => {
    if (!isAllowedNavigation(targetURL)) {
      event.preventDefault();
    }
  });

  // Deny unauthorized popup windows.
  win.webContents.setWindowOpenHandler(() => {
    return { action: 'deny' };
  });

  // Deny permissions unless explicitly implemented.
  win.webContents.session.setPermissionRequestHandler(
    (_webContents, _permission, callback) => {
      callback(false);
    }
  );

  win.webContents.session.setPermissionCheckHandler(
    () => false
  );

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    // win.loadFile('dist/index.html')
    win.loadFile(path.join(RENDERER_DIST, 'index.html'));
  }
}

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
    win = null;
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.whenReady().then(createWindow);
