"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DiographAuthentication = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require("document-register-element");

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DiographAuthentication = exports.DiographAuthentication = function DiographAuthentication() {
  _classCallCheck(this, DiographAuthentication);
};

DiographAuthentication.token = "test-token";

var DiographLogin = function (_HTMLElement) {
  _inherits(DiographLogin, _HTMLElement);

  function DiographLogin() {
    _classCallCheck(this, DiographLogin);

    return _possibleConstructorReturn(this, (DiographLogin.__proto__ || Object.getPrototypeOf(DiographLogin)).apply(this, arguments));
  }

  _createClass(DiographLogin, [{
    key: "attachedCallback",
    value: function attachedCallback() {
      if (localStorage.getItem("token")) {
        document.getElementById("container").style.display = "none";
        document.getElementById("container2").style.display = "block";
      }
      this.readAndRefreshToken();
    }
    // Fires when an instance of the element is created.

  }, {
    key: "createdCallback",
    value: function createdCallback() {
      var _this2 = this;

      this.innerHTML = "\n      <style>\n        input {\n          line-height: 24px;\n          margin-top: 10px;\n        }\n        #logout, #login {\n          cursor: pointer;\n        }\n        #container2 {\n          display: none\n        }\n      </style>\n      <div id=\"container\">\n        Token: <input id=\"diograph-token-input\">\n        <button id=\"diograph-save-button\">Save</button>\n      </div>\n      <div id=\"container2\">\n        <div>\n          Currently using token <span id=\"diograph-token-span\">undefined</span> &nbsp;&nbsp;\n        </div>\n        <div id=\"logout\">\n          Logout\n        </div>\n      </div>\n    ";
      document.getElementById("diograph-save-button").addEventListener('click', function () {
        document.getElementById("container").style.display = "none";
        document.getElementById("container2").style.display = "block";
        var inputFieldValue = document.getElementById("diograph-token-input").value;
        localStorage.setItem("token", inputFieldValue);
        _this2.readAndRefreshToken();
      });
      document.getElementById("logout").addEventListener('click', function () {
        document.getElementById("container").style.display = "block";
        document.getElementById("container2").style.display = "none";
        localStorage.removeItem("token");
      });
    }
  }, {
    key: "readAndRefreshToken",
    value: function readAndRefreshToken() {
      var p = document.getElementById("diograph-token-span");
      var token = localStorage.getItem("token");
      token = token ? token : "test-token";
      p.innerHTML = token;
      DiographAuthentication.token = token;
    }
  }]);

  return DiographLogin;
}(HTMLElement);
// customElements.define('diograph-login', DiographLogin);


document.registerElement('diograph-login', DiographLogin);