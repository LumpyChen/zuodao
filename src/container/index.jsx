import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'mobx-react'

import routes from '../routes'
import { ViewStore, SubjectStore } from '../stores'

const viewStore = new ViewStore()
const subjectStore = new SubjectStore()

const getApp = () => (
  <MuiThemeProvider>
    <BrowserRouter>
      <Provider view={viewStore} subject={subjectStore}>
        {renderRoutes(routes())}
      </Provider>
    </BrowserRouter>
  </MuiThemeProvider>
)

export default getApp
