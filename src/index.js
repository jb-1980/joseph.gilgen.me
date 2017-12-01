import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'font-awesome/css/font-awesome.css'
import 'devicon-2.2/devicon.css'

import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
