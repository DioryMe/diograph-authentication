import { CookieManager, LocalStorageMock } from '../app/cookie-manager'

describe('CookieManager', () => {
  let masterToken = "masterTOKEN"

  // Mock CookieManager / localStorage
  const globalAny: any = global;

  Object.defineProperty(globalAny, 'localStorage', {
    value: LocalStorageMock
  });

  beforeEach(() => {
    // Add some content
    CookieManager.save({"master": masterToken})
  });

  describe('get(key)', () => {

    it('returns "masterTOKEN" if key "master" is given', () => {
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
      CookieManager.save(content)
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
