import * as React from 'react'
import { configure, shallow, mount, render } from 'enzyme'
import { DiographAuthentication } from '../app/diograph-authentication'
import { CookieManager, LocalStorageMock } from '../app/cookie-manager'
import * as Adapter from 'enzyme-adapter-react-16';

describe('DiographAuthentication', () => {
  let component, authToken, wrapper
  configure({ adapter: new Adapter() })

  // Mock CookieManager / localStorage
  const globalAny: any = global;

  Object.defineProperty(globalAny, 'localStorage', {
    value: LocalStorageMock
  });

  beforeEach(() => {
    const changeAuthToken = (token) => { authToken = token }
    wrapper = shallow(
      <DiographAuthentication
        onAuthenticationStateChange={changeAuthToken}
      />
    )
    component = wrapper.instance();

    CookieManager.save({
      "master": "masterTOKEN",
      "google-maps": "googleMAPS"
    })
  })

  it('secrets are given when logged in', () => {
    // Master token is saved in cookie
    component.executeLogin().then(() => {
      expect(authToken).toEqual({
        "master": "masterTOKEN",
        "google-maps": "googleMAPS"
      })
    })
  })

  it('secrets are nullified when logged out', () => {
    // Master token is not saved in cookie
    component.executeLogout().then(() => {
      expect(authToken).toEqual(null)
    })
  })

})
