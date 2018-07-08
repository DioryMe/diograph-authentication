export class DiographAuthenticator {

  static isAuthenticated() {
    return CookieManager.get("master")
    // return true if valid cookie exists (through CookieManager)
    // return false if invalid or missing cookie
  }

  static login(loginInfo) {
    if (this.isAuthenticated()) {
      return true
    }

/*
    / Try to login with loginInfo through DiographServerManager
    if (DiographServerManager.authenticate(loginInfo)) {
      // Retrieve tokens from server
      tokens = DiographServerManager.getTokens()
      // Save tokens to cookie
      CookieManager.save(tokens)
      return true
    } else {
      return false
    }
*/
  }

  static logout() {
    // CookieManager.destroy()
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
        // return CookieManager.get("master")
      }
      case "google-maps": {
        return "googleMAPS"
        // Check if token is already found from cookie (CookieManager)
        // return CookieManager.get("google-maps")
      }
    }

  }

}


