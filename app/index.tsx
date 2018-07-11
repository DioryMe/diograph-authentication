import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { DiographAuthentication } from './diograph-authentication'

class App extends React.Component {

  render() {
    return <DiographAuthentication
      onSecretsChange={(secrets) => {
        if (secrets) {
          this.log(secrets)
        }
      }}
    />
  }

  log(secrets) {
    console.log("Master token is: " + secrets["master"])
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

