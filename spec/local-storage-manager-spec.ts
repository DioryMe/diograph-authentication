import { LocalStorageManager, LocalStorageMock } from '../app/local-storage-manager'

describe('LocalStorageManager', () => {
  let masterToken = "masterTOKEN"

  // Mock LocalStorageManager / localStorage
  Object.defineProperty(global, 'localStorage', {
    value: LocalStorageMock
  });

  beforeEach(() => {
    // Add some content
    LocalStorageManager.save({"master": masterToken})
  });

  describe('get(key)', () => {

    it('returns "masterTOKEN" if key "master" is given', () => {
      expect(LocalStorageManager.get("master")).toEqual(masterToken)
    })

  })

  describe('getAll()', () => {

    it('returns object of secrets', () => {
      let secrets = LocalStorageManager.getAll()
      expect(secrets).toEqual(jasmine.any(Object))
      expect(secrets["master"]).toEqual(masterToken)
    })

    it('returns null if no secrets in LocalStorage after destroy()', () => {
      LocalStorageManager.destroy()
      let secrets = LocalStorageManager.getAll()
      expect(secrets).toBe(null)
    })

  })

  describe('save(content)', () => {

    it('saves content and return true on success', () => {
      let content = {"something": "else"}
      LocalStorageManager.save(content)
      expect(LocalStorageManager.get("something")).toEqual("else")
    })

  })

  describe('destroy()', () => {

    it('nullifies the localStorage', () => {
      LocalStorageManager.destroy()
      expect(LocalStorageManager.get("master")).toEqual(null)
    })

  })

})
