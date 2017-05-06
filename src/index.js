import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'

import getApp from './container'
import './style/reset.css'
import './style/custom.css'

const ROOT_NODE = document.getElementById('root')

injectTapEventPlugin()

ReactDOM.render(getApp(), ROOT_NODE)
