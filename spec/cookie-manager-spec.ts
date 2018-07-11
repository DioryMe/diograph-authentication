import { CookieManager } from '../app/cookie-manager'

describe('CookieManager', () => {
  let masterToken

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
    // Add some content
    masterToken = "masterTOKEN"
    CookieManager.save({"master": masterToken})
  });

  describe('get(key)', () => {

    it('returns "masterTOKEN" if key "master" is given', () => {
      expect(true).toBe(true)
      expect(CookieManager.get("master")).toEqual(masterToken)
    })

  })

  describe('getAll()', () => {

    it('returns object of secrets', () => {
      let secrets = CookieManager.getAll()
      expect(secrets).toEqual(jasmine.any(Object))
      expect(secrets["master"]).toEqual(masterToken)
    })

  })

  describe('save(content)', () => {

    it('saves content and return true on success', () => {
      let content = {"something": "else"}
      expect(CookieManager.save(content)).toBe(true)
      expect(CookieManager.get("something")).toEqual("else")
    })

  })

  describe('destroy()', () => {

    it('nullifies the localStorage', () => {
      CookieManager.destroy()
      expect(CookieManager.get("master")).toEqual(null)
    })

  })

})
