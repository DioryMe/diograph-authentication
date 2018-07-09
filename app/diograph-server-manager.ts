export class DiographServerManager {

  static authenticate(loginInfo: object) : string {
    return "masterTOKEN"
  }

  static retrieveSecrets(masterToken: string): object {
    return {}
  }

}
