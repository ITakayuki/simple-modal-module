class Modal{
    constructor(_time, _target) {
        this.target = ''
        this.openClass = '.js-modal-open-btn'
        this.closeClass = '.js-modal-close-btn'
        this.modalClass = '.js-modal-target'
        this.openDom = []
        this.closeDom = []
        this.targetModal = []
        this.openEvent = ''
        this.closeEvent = ''
        this.classData = ''
        this.animationDelay = 0
        this.scrollvalue = 0
        this._init(_target, _time)
        this.addModalEvent()
        for (let i = 0 ; i < this.targetModal.length; i++) {
            this.targetModal[i].style.display = 'none'
        }
    }

    _init(_target, _delay) {
        this.target = _target
        if(_delay) {
            this.animationDelay = _delay
        }
        this.openDom = this.target.querySelectorAll(this.openClass);
        this.closeDom = this.target.querySelectorAll(this.closeClass);
        this.targetModal = this.target.querySelectorAll(this.modalClass);
        this.openEvent = this.openModal.bind(this)
        this.closeEvent = this.closeModal.bind(this)
    }

    addModalEvent() {
        for(let i = 0; i < this.openDom.length; i++) {
            this.openDom[i].addEventListener( 'click', this.openEvent)
        }
        for(let i = 0; i < this.closeDom.length; i++) {
            this.closeDom[i].addEventListener( 'click', this.closeEvent)
        }
    }

    removeModalEvent() {
        for(let i = 0; i < this.openDom.length; i++) {
            this.openDom.removeEventListener( 'click', this.openEvent)
        }
        for(let i = 0; i < this.closeDom.length; i++) {
            this.closeDom.removeEventListener( 'click', this.closeEvent)
        }
    }

    openModal() {
        for (let i = 0 ; i < this.targetModal.length; i++) {
            this.targetModal[i].style.display = ''
            this.targetModal[i].classList.remove('js-modal-is-end')
            this.targetModal[i].classList.add('js-modal-is-opening')
            const _this = this
            setTimeout(function () {
                _this.targetModal[i].classList.remove('js-modal-is-opening')
                _this.targetModal[i].classList.add('js-modal-is-open')
            })
        }
        this.addNoScrollEvent()
    }
    closeModal () {
        for (let i = 0 ; i < this.targetModal.length; i++) {
            this.targetModal[i].classList.remove('js-modal-is-open')
            this.targetModal[i].classList.add('js-modal-is-endding')
            const _this = this
            setTimeout(function () {
                document.body.style.pointerEvents = 'none'
                _this.targetModal[i].classList.remove('js-modal-is-endding')
                _this.targetModal[i].classList.add('js-modal-is-end')
            }, 100)
            setTimeout(function () {
                document.body.style.pointerEvents = 'auto'
                _this.targetModal[i].style.display = 'none'
            }, this.animationDelay)
        }
        this.removeNoScrollEvent()
    }
    noScroll(e) {
        e.preventDefault();
    }
    addNoScrollEvent() {
        this.scrollValue = window.scrollY;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${this.scrollValue}px`;
    }

    removeNoScrollEvent() {
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo(0, this.scrollValue);
    }

    destroy() {
        this.removeModalEvent()
    }
}

export default Modal;
