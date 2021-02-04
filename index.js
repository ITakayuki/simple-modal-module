class Modal{
    constructor(_dataName, _autoHide) {
        this.dataName = _dataName
        if (_autoHide === false) {
            this.autoHide = false
        } else {
            this.autoHide = true
        }
        this.openClass = 'js-modal-open-btn'
        this.closeClass = 'js-modal-close-btn'
        this.modalClass = 'js-modal-target'
        this.openDom = []
        this.closeDom = []
        this.modalDom = []
        this.scrollValue = 0
        this._init()
        this._addModalEvent()
        if(this.autoHide) {
            for (let i = 0 ; i < this.modalDom.length; i++) {
                this.modalDom[i].style.display = 'none'
            }
        }
    }
    _init( ) {
        const targets = document.querySelectorAll(`[js-modal-data=${this.dataName}]`)
        for (let i = 0; i < targets.length; i++) {
            if( targets[i].classList.contains(this.openClass)) {
                this.openDom.push(targets[i])
            } else if (targets[i].classList.contains(this.closeClass))  {
                this.closeDom.push(targets[i])
            } else if (targets[i].classList.contains(this.modalClass)) {
                this.modalDom.push(targets[i])
            }
        }
        this.openEvent = this.show.bind(this)
        this.closeEvent = this.hide.bind(this)
        this._hideEvent = this._hideTransition
    }

    show() {
        for (let i = 0 ; i < this.modalDom.length; i++) {
            this.modalDom[i].classList.remove('is-end')
            if (this.autoHide) {
                this.modalDom[i].removeEventListener('transitionend', this._hideEvent)
                this.modalDom[i].removeEventListener('animationend', this._hideEvent)
                this.modalDom[i].style.display = ''
                this.modalDom[i].classList.add('is-opening')
            }
            setTimeout(() => {
                this.modalDom[i].classList.remove('is-opening')
                this.modalDom[i].classList.add('is-open')
            }, 100)
        }
        this._addNoScrollEvent()
    }

    hide () {
        for (let i = 0 ; i < this.modalDom.length; i++) {
            this.modalDom[i].classList.remove('is-open')
            this.modalDom[i].classList.add('is-end')
            const _this = this
            if (this.autoHide) {
                this.modalDom[i].addEventListener('transitionend', this._hideTransition)
                this.modalDom[i].addEventListener('animationend', this._hideTransition)
            }
        }
        document.body.style.pointerEvents = 'auto'
        this._removeNoScrollEvent()
    }

    destroy() {
        this._removeModalEvent()
    }

    _hideTransition() {
        this.classList.remove('is-end')
        this.style.display = 'none'
    }
    _addModalEvent() {
        for(let i = 0; i < this.openDom.length; i++) {
            this.openDom[i].addEventListener( 'click', this.openEvent)
        }
        for(let i = 0; i < this.closeDom.length; i++) {
            this.closeDom[i].addEventListener( 'click', this.closeEvent)
        }
    }

    _removeModalEvent() {
        for(let i = 0; i < this.openDom.length; i++) {
            this.openDom[i].removeEventListener( 'click', this.openEvent)
        }
        for(let i = 0; i < this.closeDom.length; i++) {
            this.closeDom[i].removeEventListener( 'click', this.closeEvent)
        }
    }

    _addNoScrollEvent() {
        this.scrollValue = window.pageYOffset;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${this.scrollValue}px`;
    }

    _removeNoScrollEvent() {
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo(0, this.scrollValue);
    }

}

module.exports = Modal
