function _templateObject_2a920930410f11eaa238399ea0781a4e() {
  var data = babelHelpers.taggedTemplateLiteral(["\n      <style>\n        :host {\n          display: block;\n        }\n      </style>\n      <h2>Hello [[prop1]]!</h2>\n    "]);

  _templateObject_2a920930410f11eaa238399ea0781a4e = function _templateObject_2a920930410f11eaa238399ea0781a4e() {
    return data;
  };

  return data;
}

import { html, PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js";
/**
 * @customElement
 * @polymer
 */

var LafSamouApp =
/*#__PURE__*/
function (_PolymerElement) {
  babelHelpers.inherits(LafSamouApp, _PolymerElement);

  function LafSamouApp() {
    babelHelpers.classCallCheck(this, LafSamouApp);
    return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(LafSamouApp).apply(this, arguments));
  }

  babelHelpers.createClass(LafSamouApp, null, [{
    key: "template",
    get: function get() {
      return html(_templateObject_2a920930410f11eaa238399ea0781a4e());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        prop1: {
          type: String,
          value: 'lafSamou-app'
        }
      };
    }
  }]);
  return LafSamouApp;
}(PolymerElement);

window.customElements.define('lafSamou-app', LafSamouApp);