import * as React from 'react';

export interface AuthenticationState { authenticated: boolean, authToken: string }
export interface AuthenticationProps { onAuthenticationStateChange: any }

export class DiographAuthentication extends React.Component <AuthenticationProps, AuthenticationState> {

  constructor(props) {
    super(props)
    this.state = { authenticated: false, authToken: null }
  }

  render() {
    return (
      <div>
        Add component content here.
      </div>
    )
  }

}
