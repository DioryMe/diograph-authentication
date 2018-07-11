import { CookieManager } from '../app/cookie-manager'

describe('CookieManager', () => {
  let masterToken

  beforeEach(() => {
    var store = {};

    spyOn(localStorage, 'getItem').and.callFake( (key:string):String => {
     return store[key] || null;
    });
    spyOn(localStorage, 'removeItem').and.callFake((key:string):void =>  {
      delete store[key];
    });
    spyOn(localStorage, 'setItem').and.callFake((key:string, value:string):string =>  {
      return store[key] = <string>value;
    });

    // Add some content
    masterToken = "masterTOKEN"
    CookieManager.save({"master": masterToken})
  });

  describe('get(key)', () => {

    fit('returns "masterTOKEN" if key "master" is given', () => {
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
