import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { DiographAuthentication } from './diograph-authentication'

class App extends React.Component {

  render() {
    return <DiographAuthentication
      onAuthenticationStateChange={(secrets) => this.log(secrets)} />
  }

  log(secrets) {
    console.log(secrets["master"])
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

