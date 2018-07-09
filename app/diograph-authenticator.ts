import { CookieManager } from './cookie-manager'
import { DiographServerManager } from './diograph-server-manager'

export class DiographAuthenticator {

  static isAuthenticated() {
    if (CookieManager.get("master")) {
      // return true if valid cookie exists (through CookieManager)
      return true
    } else {
      // return false if invalid or missing cookie
      return false
    }
  }

  static login(loginInfo: object={}) {
    // Return true if already logged in
    if (this.isAuthenticated()) {
      return true
    }

    // Try to login with loginInfo through DiographServerManager
    if (DiographServerManager.authenticate(loginInfo)) {
      // Retrieve tokens from server
      let tokens = DiographServerManager.retrieveSecrets(CookieManager.get("master"))
      // Save tokens to cookie
      CookieManager.save(tokens)
      return true
    } else {
      return false
    }

  }

  static logout() {
    CookieManager.destroy()
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


