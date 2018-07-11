import * as React from 'react'
import { configure, shallow, mount, render } from 'enzyme'
import { DiographAuthentication } from '../app/diograph-authentication'
import { LocalStorageManager, LocalStorageMock } from '../app/local-storage-manager'
import * as Adapter from 'enzyme-adapter-react-16';

describe('DiographAuthentication', () => {
  let component, secrets, wrapper
  configure({ adapter: new Adapter() })

  // Mock LocalStorageManager / localStorage
  Object.defineProperty(global, 'localStorage', {
    value: LocalStorageMock
  });

  beforeEach(() => {
    const updateSecrets = (retrievedSecrets) => { secrets = retrievedSecrets }
    wrapper = shallow(
      <DiographAuthentication
        onSecretsChange={updateSecrets}
      />
    )
    component = wrapper.instance();

    LocalStorageManager.save(JSON.stringify({
      "master": "masterTOKEN",
      "google-maps": "googleMAPS"
    }))
  })

  it('secrets are given when logged in', () => {
    // Master token is saved in LocalStorage
    component.executeLogin().then(() => {
      expect(secrets).toEqual({
        "master": "masterTOKEN",
        "google-maps": "googleMAPS"
      })
    })
  })

  it('secrets are nullified when logged out', () => {
    // Master token is not saved in LocalStorage
    component.executeLogout().then(() => {
      expect(secrets).toEqual(null)
    })
  })

})
