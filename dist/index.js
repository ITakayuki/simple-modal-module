"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var Modal = /* @__PURE__ */ _createClass(function Modal2(_dataName, _autoHide) {
  var _this2 = this;
  _classCallCheck(this, Modal2);
  _defineProperty(this, "dataName", void 0);
  _defineProperty(this, "autoHide", void 0);
  _defineProperty(this, "openClass", void 0);
  _defineProperty(this, "closeClass", void 0);
  _defineProperty(this, "modalClass", void 0);
  _defineProperty(this, "openDom", void 0);
  _defineProperty(this, "closeDom", void 0);
  _defineProperty(this, "modalDom", void 0);
  _defineProperty(this, "scrollValue", void 0);
  _defineProperty(this, "_init", function() {
    var targets = document.querySelectorAll("[js-modal-data=".concat(_this2.dataName, "]"));
    for (var i2 = 0; i2 < targets.length; i2++) {
      if (targets[i2].classList.contains(_this2.openClass)) {
        _this2.openDom.push(targets[i2]);
      } else if (targets[i2].classList.contains(_this2.closeClass)) {
        _this2.closeDom.push(targets[i2]);
      } else if (targets[i2].classList.contains(_this2.modalClass)) {
        _this2.modalDom.push(targets[i2]);
      }
    }
  });
  _defineProperty(this, "show", function() {
    var _loop = function _loop2(i3) {
      _this2.modalDom[i3].classList.remove("is-close");
      if (_this2.autoHide) {
        _this2.modalDom[i3].removeEventListener("transitionend", _this2._hideTransition);
        _this2.modalDom[i3].removeEventListener("animationend", _this2._hideTransition);
        _this2.modalDom[i3].style.display = "";
        _this2.modalDom[i3].classList.add("is-before-open");
      }
      setTimeout(function() {
        _this2.modalDom[i3].classList.remove("is-before-open");
        _this2.modalDom[i3].classList.add("is-open");
      }, 100);
    };
    for (var i2 = 0; i2 < _this2.modalDom.length; i2++) {
      _loop(i2);
    }
    _this2._addNoScrollEvent();
  });
  _defineProperty(this, "hide", function() {
    for (var i2 = 0; i2 < _this2.modalDom.length; i2++) {
      _this2.modalDom[i2].classList.remove("is-open");
      _this2.modalDom[i2].classList.add("is-close");
      var _this = _this2;
      if (_this2.autoHide) {
        _this2.modalDom[i2].addEventListener("transitionend", _this2._hideTransition);
        _this2.modalDom[i2].addEventListener("animationend", _this2._hideTransition);
      }
    }
    document.body.style.pointerEvents = "auto";
    _this2._removeNoScrollEvent();
  });
  _defineProperty(this, "destroy", function() {
    _this2._removeModalEvent();
  });
  _defineProperty(this, "_hideTransition", function(e) {
    var target = e.currentTarget;
    target.classList.remove("is-close");
    target.style.display = "none";
  });
  _defineProperty(this, "_addModalEvent", function() {
    for (var i2 = 0; i2 < _this2.openDom.length; i2++) {
      _this2.openDom[i2].addEventListener("click", _this2.show);
    }
    for (var _i = 0; _i < _this2.closeDom.length; _i++) {
      _this2.closeDom[_i].addEventListener("click", _this2.hide);
    }
  });
  _defineProperty(this, "_removeModalEvent", function() {
    for (var i2 = 0; i2 < _this2.openDom.length; i2++) {
      _this2.openDom[i2].removeEventListener("click", _this2.show);
    }
    for (var _i2 = 0; _i2 < _this2.closeDom.length; _i2++) {
      _this2.closeDom[_i2].removeEventListener("click", _this2.hide);
    }
  });
  _defineProperty(this, "disableScroll", function(event) {
    event.preventDefault();
  });
  _defineProperty(this, "_addNoScrollEvent", function() {
    _this2.scrollValue = window.pageYOffset;
    document.body.style.position = "fixed";
    document.body.style.top = "-".concat(_this2.scrollValue, "px");
  });
  _defineProperty(this, "_removeNoScrollEvent", function() {
    document.body.style.position = "";
    document.body.style.top = "";
    window.scrollTo(0, _this2.scrollValue);
  });
  _defineProperty(this, "isMobile", function() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.includes("mobile")) {
      return true;
    } else {
      return false;
    }
  });
  this.dataName = _dataName;
  if (!_autoHide) {
    this.autoHide = false;
  } else {
    this.autoHide = true;
  }
  this.openClass = "js-modal-open-btn";
  this.closeClass = "js-modal-close-btn";
  this.modalClass = "js-modal-target";
  this.openDom = [];
  this.closeDom = [];
  this.modalDom = [];
  this.scrollValue = 0;
  this._init();
  this._addModalEvent();
  if (this.autoHide) {
    for (var i = 0; i < this.modalDom.length; i++) {
      this.modalDom[i].style.display = "none";
    }
  }
});
var _default = Modal;
exports["default"] = _default;
