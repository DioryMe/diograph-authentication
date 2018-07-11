import * as React from 'react'
import { configure, shallow, mount, render } from 'enzyme'
import { DiographAuthentication } from '../app/diograph-authentication'
import { CookieManager } from '../app/cookie-manager'
import * as Adapter from 'enzyme-adapter-react-16';

describe('DiographAuthentication', () => {
  let component, authToken, wrapper
  configure({ adapter: new Adapter() })

  // Mock CookieManager / localStorage
  const globalAny: any = global;
  var localStorageMock = (function() {
    var store = {};

    return {
      getItem: (key) => {
        return store[key] || null;
      },
      setItem: (key, value) => {
        store[key] = value.toString();
      },
      removeItem: (key) => {
        delete store[key]
      }
    };
  })();

  Object.defineProperty(globalAny, 'localStorage', {
    value: localStorageMock
  });

  beforeEach(() => {
    const changeAuthToken = (token) => { authToken = token }
    wrapper = shallow(
      <DiographAuthentication
        onAuthenticationStateChange={changeAuthToken}
      />
    )
    component = wrapper.instance();
  })

  it('secrets are given when logged in', () => {
    // Master token is saved in cookie
    spyOn(CookieManager, 'get').and.returnValue("masterTOKEN");
    component.executeLogin().then(() => {
      expect(authToken).toEqual({
        "master": "masterTOKEN",
        "google-maps": "googleMAPS"
      })
    })
  })

  it('secrets are nullified when logged out', () => {
    // Master token is not saved in cookie
    spyOn(CookieManager, 'get').and.returnValue(null);
    component.executeLogout().then(() => {
      expect(authToken).toEqual({
        "master": null,
        "google-maps": null
      })
    })
  })

})
