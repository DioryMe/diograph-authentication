import 'document-register-element'

export class DiographAuthentication {
  public static token
}

class DiographLogin extends HTMLElement {

  attachedCallback() {
    if (localStorage.getItem("token")) {
      document.getElementById("container").style.display="none"
      document.getElementById("container2").style.display="block"
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

    document.getElementById("diograph-save-button").addEventListener('click', () => {
      document.getElementById("container").style.display="none"
      document.getElementById("container2").style.display="block"
      let inputFieldValue = (<HTMLInputElement>document.getElementById("diograph-token-input")).value;
      localStorage.setItem("token", inputFieldValue);
      this.readAndRefreshToken();
    });

    document.getElementById("logout").addEventListener('click', () => {
      document.getElementById("container").style.display="block"
      document.getElementById("container2").style.display="none"
      localStorage.removeItem("token");
    });

  };

  readAndRefreshToken() {
    let p = document.getElementById("diograph-token-span");
    let token = localStorage.getItem("token")
    p.innerHTML = token
    DiographAuthentication.token = token
  }

}

// customElements.define('diograph-login', DiographLogin);

(<any>document).registerElement('diograph-login', DiographLogin);
