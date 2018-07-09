export class CookieManager {

  static get(key: string): string {
    // Return the corresponding value of the given key from cookie
    return this.content()[key]
  }

  static save(contentHash: object) {
    return true
  }

  static destroy() {
    // Destroy cookie
    return false
  }

  // Placeholder / fixture for cookie content (that we are still missing...)
  private static content() {
    return {
      "master": "masterTOKEN",
      "google-maps": "googleMAPS"
    }
  }

}
