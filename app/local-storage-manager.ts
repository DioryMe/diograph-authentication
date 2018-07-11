export class LocalStorageManager {

  static get(key: string): string {
    // Return the corresponding value of the given key from LocalStorage
    let value = null
    if (this.content()) {
      let parsedContent = JSON.parse(this.content())
      value = parsedContent[key]
    }
    return value
  }

  static getAll(): object {
    if (this.content()) {
      return JSON.parse(this.content());
    } else {
      return null
    }
  }

  static save(content: object) {
    let stringifiedContent = JSON.stringify(content)
    localStorage.setItem("diograph-authenticator-secrets", stringifiedContent)
    return true
  }

  static destroy() {
    // Destroy LocalStorage
    localStorage.removeItem("diograph-authenticator-secrets");
    return false
  }

  // Placeholder / fixture for LocalStorage content (that we are still missing...)
  private static content() {
    return localStorage.getItem("diograph-authenticator-secrets")
    // return {
    //   "master": "masterTOKEN",
    //   "google-maps": "googleMAPS"
    // }
  }

}

export class LocalStorageMock {
  static store = {}

  // constructor() {
  //   store = {}
  // }

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

