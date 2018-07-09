import { CookieManager } from '../app/cookie-manager'

describe('CookieManager', () => {

  describe('get(key)', () => {

    it('return "masterTOKEN" if key "master" is given', () => {
      expect(CookieManager.get("master")).toEqual("masterTOKEN")
    })

  })

})
