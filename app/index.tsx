import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { DiographAuthentication } from './diograph-authentication'

class App extends React.Component {

  render() {
    return <DiographAuthentication
      onAuthenticationStateChange={(authToken) => this.log(authToken)} />
  }

  log(authToken) {
    console.log(authToken)
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

