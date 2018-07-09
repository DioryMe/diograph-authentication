export class DiographServerManager {

  static authenticate(loginInfo: object) : string {
    return "masterTOKEN"
  }

  static retrieveSecrets(masterToken): object { // TODO: add string type to masterToken
    return {}
  }

}
