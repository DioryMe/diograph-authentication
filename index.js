"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
/* Register <diograph-login> on initialization */
(function () {
    document.registerElement('diograph-login', DiographLogin);
})();
var DiographAuthentication = (function () {
    function DiographAuthentication() {
    }
    return DiographAuthentication;
}());
DiographAuthentication.token = "test-token";
exports.DiographAuthentication = DiographAuthentication;
var DiographLogin = (function (_super) {
    __extends(DiographLogin, _super);
    function DiographLogin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Fires when an instance of the element is created.
    DiographLogin.prototype.createdCallback = function () {
        this.innerHTML = "\n      <style>\n        input {\n          line-height: 24px;\n          margin-top: 10px;\n        }\n        #logout, #login {\n          cursor: pointer;\n        }\n        #container2 {\n          display: none\n        }\n      </style>\n      <div id=\"container\">\n        Username: <input>\n        Password: <input>\n        <button id=\"login\">Login</button>\n      </div>\n      <div id=\"container2\">\n        <div>\n          Logged in as jvalanen &nbsp;&nbsp;\n        </div>\n        <div id=\"logout\">\n          Logout\n        </div>\n      </div>\n    ";
        document.getElementById("login").addEventListener('click', function () {
            document.getElementById("container").style.display = "none";
            document.getElementById("container2").style.display = "block";
        });
        document.getElementById("logout").addEventListener('click', function () {
            document.getElementById("container").style.display = "block";
            document.getElementById("container2").style.display = "none";
        });
    };
    ;
    return DiographLogin;
}(HTMLElement));
