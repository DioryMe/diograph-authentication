import * as React from 'react'
import { configure, shallow, mount, render } from 'enzyme'
import { DiographAuthentication } from '../app/diograph-authentication'
import * as Adapter from 'enzyme-adapter-react-16';

describe('DiographAuthentication', () => {
  let component, authToken, wrapper
  configure({ adapter: new Adapter() })


  beforeEach(() => {
    const changeAuthToken = (token) => { authToken = token }
    wrapper = shallow(
      <DiographAuthentication
        onAuthenticationStateChange={changeAuthToken}
      />
    )
    component = wrapper.instance();
  })

  it('authToken is given when logged in', () => {
    component.executeLogin()
    expect(authToken).toEqual("123123")
  })

  it('authToken is null when logged out', () => {
    component.executeLogout()
    expect(authToken).toEqual(null)
  })

})
