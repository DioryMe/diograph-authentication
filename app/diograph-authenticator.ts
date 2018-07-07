export class DiographAuthenticator {

  static isAuthenticated() {
    return true
    // return true if valid cookie exists (through CookieManager)
    // return false if invalid or missing cookie
  }

  static login(loginInfo) {
    // Return "already logged in" if isAuthenticated

    // Try to login with loginInfo through DiographServerManager

    // Success
    // - create cookie (through CookieManager)
    // - retrievee tokens to cookie => this.getToken("all")
    // - save tokens to cookie (through CookieManager)

    // Failure
    // - return error message
  }

  static logout() {
    // Delete cookie (through CookieManager)
  }

  static getToken(type) {
    if (!this.isAuthenticated()) {
      return {
        "master": null,
        "google-maps": null
      }
    }

    // Read everything from cookie
    switch(type) {
      case "all": {
        return {
          "master": this.getToken('master'),
          "google-maps": this.getToken('google-maps')
        }
      }
      case "master":
      case "diograph-server": {
        return "masterTOKEN"
        // Check if token is already found from cookie (CookieManager)
        // return DiographServerManager.getToken()
      }
      case "google-maps": {
        return "googleMAPS"
        // Check if token is already found from cookie (CookieManager)
        // return GoogleMapsManager.getToken()
      }
    }

  }

}


