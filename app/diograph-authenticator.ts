export class DiographAuthenticator {

  static login(loginInfo) {

  }

  static logout() {

  }

  static getToken(type) {

    switch(type) {
      case "all": {
        return "all"
      }
      case "diograph-server": {

      }
      case "google-maps": {

      }
      default: {
        console.log(type)
      }
    }

  }

}


