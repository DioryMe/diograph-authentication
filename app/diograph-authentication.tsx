import * as React from 'react';
import { LocalStorageManager } from './local-storage-manager'

export interface AuthenticationState { authenticated: boolean, secrets: any }
export interface AuthenticationProps { onSecretsChange: any }

export class DiographAuthentication extends React.Component <AuthenticationProps, AuthenticationState> {

  constructor(props) {
    super(props)
    let secrets = LocalStorageManager.getAll()
    let authenticated = !!secrets
    this.state = { authenticated: authenticated, secrets: secrets }
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
          You are now logged in!
          <button name="Logout" onClick={ () => this.executeLogout() } >Logout</button>
          <br/>
          Secrets: <input name="secrets" value={this.state.secrets || ""} onChange={(event) => { this.setState({secrets: event.target.value})} }  />
          <button name="Save secrets" onClick={ () => this.saveSecrets() } >Save secrets</button>
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
    await LocalStorageManager.save(this.state.secrets)
    await this.setState({secrets: LocalStorageManager.getAll()})
    this.props.onSecretsChange(this.state.secrets)
  }

  async executeLogin(loginInfo) {
    // await DiographAuthenticator.login(loginInfo)
    await this.setState({
      authenticated: true,
      secrets: LocalStorageManager.getAll() // DiographAuthenticator.retrieveSecrets()
    })
    this.props.onSecretsChange(this.state.secrets)
  }

  async executeLogout() {
    LocalStorageManager.destroy() // await DiographAuthenticator.logout()
    await this.setState({
      authenticated: false,
      secrets: LocalStorageManager.getAll()
    })
    this.props.onSecretsChange(this.state.secrets)
  }

}
