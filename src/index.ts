import 'document-register-element'

export class DiographAuthentication {
  public static token
  public static isProduction = true

  public static onLogin = () => {};

  public static onLogout = () => {};
}

class DiographLogin extends HTMLElement {

  attachedCallback() {
    if (window.location.search.match(/\btoken=+(.*)$/)) {
      localStorage.setItem("token", window.location.search.match(/\btoken=+(.*)$/)[1])
      this.showLoggedIn();
    } else if (localStorage.getItem("token")) {
      this.showLoggedIn();
    }
    this.readAndRefreshToken();
  }

  // Fires when an instance of the element is created.
  createdCallback() {

    this.innerHTML =  `
      <style>
        input {
          line-height: 24px;
          margin-top: 10px;
        }
        #logout, #login {
          cursor: pointer;
        }
        #container2 {
          display: none
        }
      </style>
      <div id="container">
        Token: <input id="diograph-token-input">
        <button id="diograph-save-button">Save</button>
      </div>
      <div id="container2">
        <div>
          Currently using token <span id="diograph-token-span">undefined</span> &nbsp;&nbsp;
        </div>
        <div id="logout">
          Logout
        </div>
      </div>
    `;

    let self = this;
    setTimeout(function() {
      document.getElementById("diograph-save-button").addEventListener('click', () => {
        self.showLoggedIn()
        let inputFieldValue = (<HTMLInputElement>document.getElementById("diograph-token-input")).value;
        localStorage.setItem("token", inputFieldValue);
        localStorage.setItem("endpoint", DiographAuthentication.isProduction ? "http://diory-server.herokuapp.com/v1" : "http://localhost:3000/v1");
        self.readAndRefreshToken();
        (<HTMLInputElement>document.getElementById("diograph-token-input")).value = "";
        DiographAuthentication.onLogin();
      });

      document.getElementById("logout").addEventListener('click', () => {
        self.showLoggedOut();
        localStorage.removeItem("token");
        DiographAuthentication.onLogout();
      });
    }, 1000)

  };

  readAndRefreshToken() {
    let p = document.getElementById("diograph-token-span");
    let token = localStorage.getItem("token")
    p.innerHTML = token
    DiographAuthentication.token = token
  }

  showLoggedIn() {
    document.getElementById("container").style.display="none"
    document.getElementById("container2").style.display="block"
  }

  showLoggedOut() {
    document.getElementById("container").style.display="block";
    document.getElementById("container2").style.display="none";
  }

}

// customElements.define('diograph-login', DiographLogin);

(<any>document).registerElement('diograph-login', DiographLogin);
