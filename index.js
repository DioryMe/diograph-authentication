"use strict";
exports.__esModule = true;
var DiographAuthentication = (function () {
    function DiographAuthentication() {
    }
    return DiographAuthentication;
}());
DiographAuthentication.token = "test-token";
exports.DiographAuthentication = DiographAuthentication;

"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DiographLogin = function (_HTMLElement) {
  _inherits(DiographLogin, _HTMLElement);

  function DiographLogin() {
    _classCallCheck(this, DiographLogin);

    return _possibleConstructorReturn(this, (DiographLogin.__proto__ || Object.getPrototypeOf(DiographLogin)).apply(this, arguments));
  }

  _createClass(DiographLogin, [{
    key: "createdCallback",


    // Fires when an instance of the element is created.
    value: function createdCallback() {
      this.innerHTML = "\n      <style>\n        input {\n          line-height: 24px;\n          margin-top: 10px;\n        }\n        #logout, #login {\n          cursor: pointer;\n        }\n        #container2 {\n          display: none\n        }\n      </style>\n      <div id=\"container\">\n        Username: <input>\n        Password: <input>\n        <button id=\"login\">Login</button>\n      </div>\n      <div id=\"container2\">\n        <div>\n          Logged in as jvalanen &nbsp;&nbsp;\n        </div>\n        <div id=\"logout\">\n          Logout\n        </div>\n      </div>\n    ";

      document.getElementById("login").addEventListener('click', function () {
        document.getElementById("container").style.display = "none";
        document.getElementById("container2").style.display = "block";
      });

      document.getElementById("logout").addEventListener('click', function () {
        document.getElementById("container").style.display = "block";
        document.getElementById("container2").style.display = "none";
      });
    }
  }]);

  return DiographLogin;
}(HTMLElement);

document.registerElement('diograph-login', DiographLogin);
