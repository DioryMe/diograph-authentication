export class LocalStorageManager {

/*
  static get(key: string): string {
    // TODO: Don't catch error if UI can handle and show it
    try {
      let secrets = this.content()
      return secrets[key]
    } catch {
      return null
    }
  }
*/

  static getAll(): object {
    // TODO: Don't catch error if UI can handle and show it
    try {
      let secrets = this.content()
      return secrets
    } catch {
      return null
    }
  }

  static save(content: string): any {
    try {
      let parsedContent = JSON.parse(content)
    } catch {
      let errorMessage  = "Invalid params: content should be parseable string"
      console.log(errorMessage)
      return errorMessage
      // throw new Error(errorMessage)
    }
    localStorage.setItem("diograph-authenticator-secrets", content)
    return true
  }

  static destroy() {
    // Destroy LocalStorage
    localStorage.removeItem("diograph-authenticator-secrets");
    return false
  }

  static saveWhatever(content) {
    localStorage.setItem("diograph-authenticator-secrets", content)
  }

  // Preprocess LocalStorage content by parsing it
  private static content(): object {
    try {
      let content = localStorage.getItem("diograph-authenticator-secrets")
      return JSON.parse(content)
    } catch {
      // TODO: Pass this message to UI => now only logged to console
      let errorMessage = "Invalid LocalStorageContent: content should be parseable to object (JSON parse error)"
      console.log(errorMessage)
      throw new Error(errorMessage)
    }
  }

}

export class LocalStorageMock {
  static store = {}

  static getItem(key) {
    return this.store[key] || null;
  }

  static setItem(key, value) {
    this.store[key] = value.toString();
  }

  static removeItem(key) {
    delete this.store[key]
  }

}


