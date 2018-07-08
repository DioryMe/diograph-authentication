import { DiographAuthenticator } from '../app/diograph-authenticator'

describe('DiographAuthenticator', () => {

  beforeEach(() => {
    // Mock cookie writer
  })

  describe('isAuthenticated()', () => {

    beforeEach(() => {
      spyOn(CookieManager, 'get').and.returnValue("masterTOKEN");
    });

    it('returns true', () => {
      expect(DiographAuthenticator.isAuthenticated()).toBe(true)
    })
  })

  describe('login()', () => {

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
        // Mock sending lgin info to server (DiographServerManager)
        // Returns failure
      });
    })

  })

  describe('logout()', () => {
    it('removes cookie', () => {
      // Calls cookie removing function
    });

    it('clears tokens', () => {

    });
  })

  describe('getToken()', () => {
    describe('when not authenticated', () => {
      it('returns null for everything', () => {
        // all
        // google-maps
        // master-token
      });
    });

    describe('when authenticated', () => {
      it('with "all" calls all the retrievers one by one', () => {

      });

      it('with "google-maps" calls google-map retriever', () => {

      });
    });
  })

})
