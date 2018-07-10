import { DiographAuthenticator } from '../app/diograph-authenticator'
import { CookieManager } from '../app/cookie-manager'

describe('DiographAuthenticator', () => {

  beforeEach(() => {
    // Mock cookie writer
  })

  describe('isAuthenticated()', () => {

    it('returns true if master token is retrievable', () => {
      spyOn(CookieManager, 'get').and.returnValue("masterTOKEN");
      expect(DiographAuthenticator.isAuthenticated()).toBe(true)
    })

    it('returns false if cannot retrieve master token', () => {
      spyOn(CookieManager, 'get').and.returnValue(null);
      expect(DiographAuthenticator.isAuthenticated()).toBe(false)
    })

  })

  describe('login()', () => {

    it('return true if already logged in', () => {
      spyOn(DiographAuthenticator, 'isAuthenticated').and.returnValue(true)
      expect(DiographAuthenticator.login()).toBe(true)
    });

    describe('with correct login info', () => {
      beforeEach(() => {
        // Mock sending login info to server (DiographServerManager)
        // Returns success
      });

      it('should create a cookie', () => {
        // Calls cookie creation function
      });
    })

    describe('with incorrect login info', () => {
      beforeEach(() => {
        // Mock sending login info to server (DiographServerManager)
        // Returns failure
      });
    })

  })

  describe('logout()', () => {
    it('removes cookie', () => {
      spyOn(CookieManager, 'destroy')
      DiographAuthenticator.logout()
      expect(CookieManager.destroy).toHaveBeenCalled()
    });
  })

  describe('retrieveSecrets()', () => {
    describe('when not authenticated', () => {
      it('returns null for everything', () => {
        // all
        // google-maps
        // master-token
      });
    });

    describe('when authenticated', () => {
      it('without arguments retrieves all the tokens from cookie', () => {

      });

      it('with "google-maps" argument retrieves google-maps secret from cookie', () => {

      });
    });
  })

})
