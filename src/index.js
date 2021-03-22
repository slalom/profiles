import React from 'react'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga'

import Main from './Main'
import * as serviceWorker from './serviceWorker'
import './index.css'

ReactGA.initialize('UA-192828457-1')
ReactGA.pageview(window.location.pathname + window.location.search)
ReactDOM.render(<Main />, document.getElementById('root'))

serviceWorker.register()
