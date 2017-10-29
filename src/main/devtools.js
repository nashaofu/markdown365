import { app } from 'electron'
import electronDevtoolsInstaller, {
  REACT_DEVELOPER_TOOLS,
  REDUX_DEVTOOLS
} from 'electron-devtools-installer'
import './index'

app.on('ready', () => {
  electronDevtoolsInstaller(REACT_DEVELOPER_TOOLS)
    .then(() => electronDevtoolsInstaller(REDUX_DEVTOOLS))
    .catch(error => {
      console.log(error)
    })
})
