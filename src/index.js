import React from 'react'
import ReactDOM from 'react-dom'
import Main from './Main'
import * as serviceWorker from './serviceWorker'
import './index.css'

ReactDOM.render(<Main />, document.getElementById('root'))

serviceWorker.register()
