import 'document-register-element'

export class DiographAuthentication {
  public static token = "test-token"
}

class DiographLogin extends HTMLElement {

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
        Username: <input>
        Password: <input>
        <button id="login">Login</button>
      </div>
      <div id="container2">
        <div>
          Logged in as jvalanen &nbsp;&nbsp;
        </div>
        <div id="logout">
          Logout
        </div>
      </div>
    `;

    document.getElementById("login").addEventListener('click', () => {
      document.getElementById("container").style.display="none"
      document.getElementById("container2").style.display="block"
    });

    document.getElementById("logout").addEventListener('click', () => {
      document.getElementById("container").style.display="block"
      document.getElementById("container2").style.display="none"
    });

  };

}

// customElements.define('diograph-login', DiographLogin);

(<any>document).registerElement('diograph-login', DiographLogin);
