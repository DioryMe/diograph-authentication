export class DiographAuthenticator {

  static isAuthenticated() {
    return true
    // return true if valid cookie exists
    // return false if invalid or missing cookie
  }

  static login(loginInfo) {
    // Return "already logged in" if isAuthenticated

    // Try to retrieve master token with loginInfo

    // Success
    // - create cookie
    // - save master token to cookie

    // Failure
    // - return error message
  }

  static logout() {
    // Delete cookie
  }

  static getToken(type) {
    if (!this.isAuthenticated()) {
      return null
    }

    // Read everything from cookie
    switch(type) {
      case "all": {
        // let tokens = {}
        // let tokenNames = ["diograph-server", "google-maps"]
        // tokens.forEach((name) => {
        //   tokens[name] = this.getToken(name)
        // })
        // return tokens
        return "token from getToken('all')"
      }
      case "diograph-server": {
        // return DiographServerTokenManager.getToken()
      }
      case "google-maps": {
        // return GoogleMapsTokenManager.getToken()
      }
    }

  }

}


