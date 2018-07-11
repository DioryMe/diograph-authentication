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

    it('handles non-json secrets correctly', () => {
      // TODO: Mock LocalStorageMock instead of creating and using a special method for this purpose
      LocalStorageManager.saveWhatever("non-json-content")
      let errorFunction = () => LocalStorageManager.get("master")
      let errorMessage = "Invalid LocalStorageContent: content should be parseable to object"
      expect(errorFunction).toThrow(new Error(errorMessage));
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

    it('handles non-json secrets correctly', () => {
      // TODO: Mock LocalStorageMock instead of creating and using a special method for this purpose
      LocalStorageManager.saveWhatever("non-json-content")
      let errorFunction = () => LocalStorageManager.getAll()
      let errorMessage = "Invalid LocalStorageContent: content should be parseable to object"
      expect(errorFunction).toThrow(new Error(errorMessage));
    })

  })

  describe('save(content)', () => {

    it('saves content and return true on success', () => {
      let content = {"something": "else"}
      LocalStorageManager.save(content)
      expect(LocalStorageManager.get("something")).toEqual("else")
    })

    it('raises error if non-object is given as parameter', () => {
      let errorFunction = () => LocalStorageManager.save("non-json-content")
      let errorMessage = "Invalid params: content should be an object, not a string"
      expect(errorFunction).toThrow(new Error(errorMessage));
    })
  })

  describe('destroy()', () => {

    it('nullifies the localStorage', () => {
      LocalStorageManager.destroy()
      expect(LocalStorageManager.get("master")).toEqual(null)
    })

  })

})
