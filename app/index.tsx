import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { DiographAuthentication } from './diograph-authentication'

class App extends React.Component {

  render() {
    return <DiographAuthentication
      onAuthenticationStateChange={(secrets) => this.log(secrets)} />
  }

  log(secrets) {
    let retrievedSecrets = secrets ? JSON.parse(secrets)["master"] : secrets
    console.log(retrievedSecrets)
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

