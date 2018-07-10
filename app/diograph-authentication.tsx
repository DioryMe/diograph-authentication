import * as React from 'react';
import { CookieManager } from './cookie-manager'

export interface AuthenticationState { authenticated: boolean, secrets: any }
export interface AuthenticationProps { onAuthenticationStateChange: any }

export class DiographAuthentication extends React.Component <AuthenticationProps, AuthenticationState> {

  constructor(props) {
    super(props)
    this.state = { authenticated: true, secrets: CookieManager.getAll() }
    this.props.onAuthenticationStateChange(this.state.secrets)

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
    await CookieManager.save(this.state.secrets)
    await this.setState({secrets: CookieManager.getAll()})
    this.props.onAuthenticationStateChange(this.state.secrets)
  }

  async executeLogin(loginInfo) {
    // await DiographAuthenticator.login(loginInfo)
    await this.setState({
      authenticated: true,
      secrets: CookieManager.getAll() // DiographAuthenticator.retrieveSecrets()
    })
    this.props.onAuthenticationStateChange(this.state.secrets)
  }

  async executeLogout() {
    CookieManager.destroy() // await DiographAuthenticator.logout()
    await this.setState({
      authenticated: false,
      secrets: null
    })
    this.props.onAuthenticationStateChange(this.state.secrets)
  }

}
