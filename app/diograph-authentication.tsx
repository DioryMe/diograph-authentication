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
          <button name="Logout" onClick={ () => this.logout() } >Logout</button>
        </div>
      )
    } else {
      html = (
       <div>
          You are not logged in. <br/>
          <button name="Login" onClick={ () => this.login() } >Login</button>
        </div>
      )
    }
    return html
  }

  login() {
    let authToken = "123123"
    this.setState({
      authenticated: true,
      authToken: authToken
    })
    this.props.onAuthenticationStateChange(authToken)
  }

  logout() {
    this.setState({
      authenticated: false,
      authToken: null
    })
    this.props.onAuthenticationStateChange(null)
  }

}
