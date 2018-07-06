import * as React from 'react';

export interface AuthenticationState { authenticated: boolean, tokens: any }
export interface AuthenticationProps { onAuthenticationStateChange: any }

export class DiographAuthentication extends React.Component <AuthenticationProps, AuthenticationState> {

  constructor(props) {
    super(props)
    this.state = { authenticated: false, tokens: null }
  }

  render() {
    let html
    if (this.state.authenticated) {
      html = (
        <div>
          You are now logged in! <br/>
          <button name="Logout" onClick={ () => this.executeLogout() } >Logout</button>
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

  async executeLogin(loginInfo) {
    await DiographAuthenticator.login(loginInfo)
    await this.setState({
      authenticated: true,
      tokens: DiographAuthenticator.getToken("all")
    })
    this.props.onAuthenticationStateChange(this.state.tokens)
  }

  async executeLogout() {
    await DiographAuthenticator.logout()
    this.setState({
      authenticated: false,
      tokens: null
    })
    this.props.onAuthenticationStateChange(this.state.tokens)
  }

}
