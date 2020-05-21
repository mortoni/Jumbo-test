import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme } from '@material-ui/core'
import { Router } from '@reach/router'
import theme from './theme'
import { ROUTES } from './routes'

import HomePage from './pages/Home'
import DetailsPage from './pages/Details'

function App() {
  return (
    <ThemeProvider theme={createMuiTheme(theme)}>
      <CssBaseline />
      <Router>
        <HomePage path={ROUTES.HOME} />
        <DetailsPage path={ROUTES.DETAILS} />
      </Router>
    </ThemeProvider>
  )
}

export default App
