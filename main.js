const url = require('url');
const path = require('path');
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
let win;
function createWindow(){
  win = new BrowserWindow({show:false, minHeight:400, minWidth:600});
  win.loadURL('http://github.com/adityamudgil2505/');
  win.on('closed', ()=> win=null);
  win.once('ready-to-show', ()=>{
    win.show();
  })
}
app.on('ready', createWindow);

// For Mac
app.on('window-all-closed', ()=>{
  if(process.platform!=='darwin'){
    app.quit();
  }
});

app.on('activate', ()=>{
  if(win===null){
    createWindow();
  }
})