import * as React from 'react';
import { LocalStorageManager } from './local-storage-manager'

export interface AuthenticationState {
  authenticated: boolean,
  secrets: object,
  inputFieldValue: string,
  errors: string
}
export interface AuthenticationProps { onSecretsChange: any }

export class DiographAuthentication extends React.Component <AuthenticationProps, AuthenticationState> {

  constructor(props) {
    super(props)
    let secrets = LocalStorageManager.getAll()
    let authenticated = !!secrets
    this.state = {
      authenticated: authenticated,
      secrets: secrets,
      inputFieldValue: JSON.stringify(secrets),
      errors: null
    }
    this.props.onSecretsChange(this.state.secrets)

    // TODO: Retrieve master token from url
    // if (window.location.search.match(/\btoken=+(.*)$/)) {
    //   localStorage.setItem("token", window.location.search.match(/\btoken=+(.*)$/)[1])
    // }
  }

  render() {
    let html
    if (this.state.authenticated) {
      html = (
        <div>
          <div>
          You are now logged in!
          <button name="Logout" onClick={ () => this.executeLogout() } >Logout</button>
          </div>
          <div>
            Secrets: <input name="secrets" value={this.state.inputFieldValue || ""} onChange={(event) => { this.setState({inputFieldValue: event.target.value})} }  />
            <button name="Save secrets" onClick={ () => this.saveSecrets() } >Save secrets</button>
            <div style={{color:'red'}}>{this.state.errors}</div>
          </div>
        </div>
      )
    } else {
      html = (
       <div>
          Logged out... <br/>
          <button name="Login" onClick={ () => this.executeLogin("asdfasdf") } >Login</button>
        </div>
      )
    }
    return html
  }

  async saveSecrets() {
    let errorResponse = LocalStorageManager.save(this.state.inputFieldValue)
    if (errorResponse === true) {
      await this.setState({
        secrets: LocalStorageManager.getAll(),
        inputFieldValue: JSON.stringify(LocalStorageManager.getAll()),
        errors: null
      })
      this.props.onSecretsChange(this.state.secrets)
    } else {
      this.setState({errors: errorResponse})
    }
  }

  async executeLogin(loginInfo) {
    // await DiographAuthenticator.login(loginInfo)
    await this.setState({
      authenticated: true,
      inputFieldValue: JSON.stringify(LocalStorageManager.getAll()),
      secrets: LocalStorageManager.getAll() // DiographAuthenticator.retrieveSecrets()
    })
    this.props.onSecretsChange(this.state.secrets)
  }

  async executeLogout() {
    LocalStorageManager.destroy() // await DiographAuthenticator.logout()
    await this.setState({
      authenticated: false,
      inputFieldValue: JSON.stringify(LocalStorageManager.getAll()),
      secrets: LocalStorageManager.getAll()
    })
    this.props.onSecretsChange(this.state.secrets)
  }

}
