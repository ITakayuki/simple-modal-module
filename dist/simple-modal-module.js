'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Modal = function () {
    function Modal(_dataName, _autoHide) {
        _classCallCheck(this, Modal);

        this.dataName = _dataName;
        if (_autoHide === false) {
            this.autoHide = false;
        } else {
            this.autoHide = true;
        }
        this.openClass = 'js-modal-open-btn';
        this.closeClass = 'js-modal-close-btn';
        this.modalClass = 'js-modal-target';
        this.openDom = [];
        this.closeDom = [];
        this.modalDom = [];
        this.scrollValue = 0;
        this._init();
        this._addModalEvent();
        if (this.autoHide) {
            for (var i = 0; i < this.modalDom.length; i++) {
                this.modalDom[i].style.display = 'none';
            }
        }
    }

    _createClass(Modal, [{
        key: '_init',
        value: function _init() {
            var targets = document.querySelectorAll('[js-modal-data=' + this.dataName + ']');
            for (var i = 0; i < targets.length; i++) {
                if (targets[i].classList.contains(this.openClass)) {
                    this.openDom.push(targets[i]);
                } else if (targets[i].classList.contains(this.closeClass)) {
                    this.closeDom.push(targets[i]);
                } else if (targets[i].classList.contains(this.modalClass)) {
                    this.modalDom.push(targets[i]);
                }
            }
            this.openEvent = this.show.bind(this);
            this.closeEvent = this.hide.bind(this);
            this._hideEvent = this._hideTransition;
        }
    }, {
        key: 'show',
        value: function show() {
            for (var i = 0; i < this.modalDom.length; i++) {
                if (this.autoHide) {
                    this.modalDom[i].removeEventListener('transitionend', this._hideEvent);
                    this.modalDom[i].style.display = '';
                }
                this.modalDom[i].classList.remove('js-modal-is-close');
                this.modalDom[i].classList.add('js-modal-is-open');
            }
            this._addNoScrollEvent();
        }
    }, {
        key: 'hide',
        value: function hide() {
            for (var i = 0; i < this.modalDom.length; i++) {
                this.modalDom[i].classList.remove('js-modal-is-open');
                var _this = this;
                if (this.autoHide) {
                    this.modalDom[i].addEventListener('transitionend', this._hideTransition);
                }
            }
            document.body.style.pointerEvents = 'auto';
            this._removeNoScrollEvent();
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            this._removeModalEvent();
        }
    }, {
        key: '_hideTransition',
        value: function _hideTransition() {
            this.style.display = 'none';
        }
    }, {
        key: '_addModalEvent',
        value: function _addModalEvent() {
            for (var i = 0; i < this.openDom.length; i++) {
                this.openDom[i].addEventListener('click', this.openEvent);
            }
            for (var _i = 0; _i < this.closeDom.length; _i++) {
                this.closeDom[_i].addEventListener('click', this.closeEvent);
            }
        }
    }, {
        key: '_removeModalEvent',
        value: function _removeModalEvent() {
            for (var i = 0; i < this.openDom.length; i++) {
                this.openDom[i].removeEventListener('click', this.openEvent);
            }
            for (var _i2 = 0; _i2 < this.closeDom.length; _i2++) {
                this.closeDom[_i2].removeEventListener('click', this.closeEvent);
            }
        }
    }, {
        key: '_addNoScrollEvent',
        value: function _addNoScrollEvent() {
            this.scrollValue = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = '-' + this.scrollValue + 'px';
        }
    }, {
        key: '_removeNoScrollEvent',
        value: function _removeNoScrollEvent() {
            document.body.style.position = '';
            document.body.style.top = '';
            window.scrollTo(0, this.scrollValue);
        }
    }]);

    return Modal;
}();

module.exports = Modal;
