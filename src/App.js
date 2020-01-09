import React, { Fragment } from 'react'
import GlobalStyle from './styles/global'
import Routes from './routes'
import Header from './components/Header'

const App = () => (
<Fragment>
  <GlobalStyle />
  <Header />
  <Routes />
</Fragment>
)

export default App