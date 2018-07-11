export class LocalStorageManager {

  static get(key: string): string {
    // TODO: Don't catch error if UI can handle and show it
    try {
      let secrets = this.content()
      return secrets[key]
    } catch {
      return null
    }
  }

  static getAll(): object {
    // TODO: Don't catch error if UI can handle and show it
    try {
      let secrets = this.content()
      return secrets
    } catch {
      return null
    }
  }

  static save(content: any) {
    try {
      let parsedContent = JSON.parse(content)
    } catch {
      let errorMessage  = "Invalid params: content should be parseable string"
      console.log(errorMessage)
      return errorMessage
      // throw new Error(errorMessage)
    }
    let stringifiedContent = JSON.stringify(content)
    localStorage.setItem("diograph-authenticator-secrets", stringifiedContent)
    return true
  }

  static destroy() {
    // Destroy LocalStorage
    localStorage.removeItem("diograph-authenticator-secrets");
    return false
  }

  static saveWhatever(content) {
    localStorage.setItem("diograph-authenticator-secrets", content)
  }

  // Placeholder / fixture for LocalStorage content (that we are still missing...)
  private static content() {
    try {
      let content = localStorage.getItem("diograph-authenticator-secrets")
      return JSON.parse(content)
    } catch {
      let errorMessage = "Invalid LocalStorageContent: content should be parseable to object (JSON parse error)"
      console.log(errorMessage)
      throw new Error(errorMessage)
    }
  }

}

export class LocalStorageMock {
  static store = {}

  static getItem(key) {
    return this.store[key] || null;
  }

  static setItem(key, value) {
    this.store[key] = value.toString();
  }

  static removeItem(key) {
    delete this.store[key]
  }

}


//       let inputFieldValue = (<HTMLInputElement>document.getElementById("diograph-token-input")).value;
//       localStorage.setItem("token", inputFieldValue);
//       localStorage.setItem("endpoint", DiographAuthentication.isProduction ? "http://diory-server.herokuapp.com/v1/" : "http://localhost:3000/v1/");
//       self.readAndRefreshToken();
//       (<HTMLInputElement>document.getElementById("diograph-token-input")).value = "";
//       DiographAuthentication.onLogin();
//     });

//     document.getElementById("logout").addEventListener('click', () => {
//       localStorage.removeItem("token");
//       DiographAuthentication.onLogout();
//     });



//   beforeEach(() => {
//     var store = {};

//     spyOn(localStorage, 'getItem').and.callFake( (key:string):String => {
//      return store[key] || null;
//     });
//     spyOn(localStorage, 'removeItem').and.callFake((key:string):void =>  {
//       delete store[key];
//     });
//     spyOn(localStorage, 'setItem').and.callFake((key:string, value:string):string =>  {
//       return store[key] = <string>value;
//     });
//     spyOn(localStorage, 'clear').and.callFake(() =>  {
//         store = {};
//     });
// });

