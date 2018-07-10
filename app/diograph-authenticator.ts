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
      let secrets = DiographServerManager.retrieveSecrets(CookieManager.get("master"))
      // Save tokens to cookie
      CookieManager.save(secrets)
      return true
    } else {
      return false
    }

  }

  static logout() {
    CookieManager.destroy()
  }

  static retrieveSecrets(type: string=undefined) {
    if (!this.isAuthenticated()) {
      return {
        "master": null,
        "google-maps": null
      }
    }

    // Read everything from cookie
    switch(type) {
      case undefined: {
        return CookieManager.getAll()
      }
      case "master": {
        return CookieManager.get("master")
      }
      case "google-maps": {
        return CookieManager.get("google-maps")
      }
    }

  }

}


