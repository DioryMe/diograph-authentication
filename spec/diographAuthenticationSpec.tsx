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
    component.executeLogin().then(() => {
      expect(authToken).toEqual({
        "master": "masterTOKEN",
        "google-maps": "googleMAPS"
      })
    })
  })

  it('authToken is null when logged out', () => {
    component.executeLogout().then(() => {
      expect(authToken).toEqual({
        "master": null,
        "google-maps": null
      })
    })
  })

})
