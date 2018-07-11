import { LocalStorageManager } from './local-storage-manager'
import { DiographServerManager } from './diograph-server-manager'

export class DiographAuthenticator {

  static isAuthenticated() {
    if (LocalStorageManager.get("master")) {
      // return true if valid LocalStorage exists (through LocalStorageManager)
      return true
    } else {
      // return false if invalid or missing LocalStorage
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
      let secrets = DiographServerManager.retrieveSecrets(LocalStorageManager.get("master"))
      // Save tokens to LocalStorage
      LocalStorageManager.save(secrets)
      return true
    } else {
      return false
    }

  }

  static logout() {
    LocalStorageManager.destroy()
  }

  static retrieveSecrets(type: string=undefined) {
    if (!this.isAuthenticated()) {
      return {
        "master": null,
        "google-maps": null
      }
    }

    // Read everything from LocalStorage
    switch(type) {
      case undefined: {
        return LocalStorageManager.getAll()
      }
      case "master": {
        return LocalStorageManager.get("master")
      }
      case "google-maps": {
        return LocalStorageManager.get("google-maps")
      }
    }

  }

}


