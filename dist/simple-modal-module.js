'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Modal = function () {
    function Modal(_time, _target) {
        _classCallCheck(this, Modal);

        this.target = '';
        this.openClass = '.js-modal-open-btn';
        this.closeClass = '.js-modal-close-btn';
        this.modalClass = '.js-modal-target';
        this.openDom = [];
        this.closeDom = [];
        this.targetModal = [];
        this.openEvent = '';
        this.closeEvent = '';
        this.animationDelay = 0;
        this.scrollValue = 0;
        this._init(_target, _time);
        this.addModalEvent();
        for (var i = 0; i < this.targetModal.length; i++) {
            this.targetModal[i].style.display = 'none';
        }
    }

    _createClass(Modal, [{
        key: '_init',
        value: function _init(_target, _delay) {
            this.target = _target;
            if (_delay) {
                this.animationDelay = _delay;
            }
            this.openDom = this.target.querySelectorAll(this.openClass);
            this.closeDom = this.target.querySelectorAll(this.closeClass);
            this.targetModal = this.target.querySelectorAll(this.modalClass);
            this.openEvent = this.openModal.bind(this);
            this.closeEvent = this.closeModal.bind(this);
        }
    }, {
        key: 'addModalEvent',
        value: function addModalEvent() {
            for (var i = 0; i < this.openDom.length; i++) {
                this.openDom[i].addEventListener('click', this.openEvent);
            }
            for (var _i = 0; _i < this.closeDom.length; _i++) {
                this.closeDom[_i].addEventListener('click', this.closeEvent);
            }
        }
    }, {
        key: 'removeModalEvent',
        value: function removeModalEvent() {
            for (var i = 0; i < this.openDom.length; i++) {
                this.openDom[i].removeEventListener('click', this.openEvent);
            }
            for (var _i2 = 0; _i2 < this.closeDom.length; _i2++) {
                this.closeDom[_i2].removeEventListener('click', this.closeEvent);
            }
        }
    }, {
        key: 'openModal',
        value: function openModal() {
            var _this2 = this;

            var _loop = function _loop(i) {
                _this2.targetModal[i].style.display = '';
                _this2.targetModal[i].classList.remove('js-modal-is-end');
                _this2.targetModal[i].classList.add('js-modal-is-opening');
                var _this = _this2;
                setTimeout(function () {
                    _this.targetModal[i].classList.remove('js-modal-is-opening');
                    _this.targetModal[i].classList.add('js-modal-is-open');
                });
            };

            for (var i = 0; i < this.targetModal.length; i++) {
                _loop(i);
            }
            this.addNoScrollEvent();
        }
    }, {
        key: 'closeModal',
        value: function closeModal() {
            var _this3 = this;

            var _loop2 = function _loop2(i) {
                _this3.targetModal[i].classList.remove('js-modal-is-open');
                _this3.targetModal[i].classList.add('js-modal-is-endding');
                var _this = _this3;
                setTimeout(function () {
                    document.body.style.pointerEvents = 'none';
                    _this.targetModal[i].classList.remove('js-modal-is-endding');
                    _this.targetModal[i].classList.add('js-modal-is-end');
                }, 100);
                setTimeout(function () {
                    document.body.style.pointerEvents = 'auto';
                    _this.targetModal[i].style.display = 'none';
                }, _this3.animationDelay);
            };

            for (var i = 0; i < this.targetModal.length; i++) {
                _loop2(i);
            }
            this.removeNoScrollEvent();
        }
    }, {
        key: 'noScroll',
        value: function noScroll(e) {
            e.preventDefault();
        }
    }, {
        key: 'addNoScrollEvent',
        value: function addNoScrollEvent() {
            this.scrollValue = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = '-' + this.scrollValue + 'px';
        }
    }, {
        key: 'removeNoScrollEvent',
        value: function removeNoScrollEvent() {
            document.body.style.position = '';
            document.body.style.top = '';
            window.scrollTo(0, this.scrollValue);
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            this.removeModalEvent();
        }
    }]);

    return Modal;
}();

module.exports = Modal;
