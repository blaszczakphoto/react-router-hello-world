import React from 'react'
import { render } from 'react-dom'

import routes from './modules/routes'
import { Router, browserHistory } from 'react-router'

render((
  <Router children={routes} history={browserHistory} />
), document.getElementById('app'))
