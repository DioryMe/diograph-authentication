import * as React from 'react';

export interface AuthenticationState { authenticated: boolean, authToken: string }
export interface AuthenticationProps { onAuthenticationStateChange: any }

export class DiographAuthentication extends React.Component <AuthenticationProps, AuthenticationState> {

  constructor(props) {
    super(props)
    this.state = { authenticated: false, authToken: null }
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
          <button name="Login" onClick={ () => this.executeLogin() } >Login</button>
        </div>
      )
    }
    return html
  }

  executeLogin() {
    let authToken = "123123"
    this.setState({
      authenticated: true,
      authToken: authToken
    })
    this.props.onAuthenticationStateChange(authToken)
  }

  executeLogout() {
    this.setState({
      authenticated: false,
      authToken: null
    })
    this.props.onAuthenticationStateChange(null)
  }

}
