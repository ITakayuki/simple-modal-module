class Modal{
  private readonly dataName: string;
  private readonly autoHide: boolean;
  private readonly openClass: string;
  private readonly closeClass: string;
  private readonly modalClass: string;
  private openDom: Element[];
  private closeDom: Element[];
  private modalDom: HTMLElement[];
  private scrollValue: number;
  constructor(_dataName: string, _autoHide?: boolean) {
    this.dataName = _dataName
    if (!_autoHide) {
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
  private _init = ( ) => {
    const targets = document.querySelectorAll(`[js-modal-data=${this.dataName}]`)
    for (let i = 0; i < targets.length; i++) {
      if( targets[i].classList.contains(this.openClass)) {
        this.openDom.push(targets[i])
      } else if (targets[i].classList.contains(this.closeClass))  {
        this.closeDom.push(targets[i])
      } else if (targets[i].classList.contains(this.modalClass)) {
        this.modalDom.push(targets[i] as HTMLElement)
      }
    }
  }

  show = () => {
    for (let i = 0 ; i < this.modalDom.length; i++) {
      this.modalDom[i].classList.remove('is-close')
      if (this.autoHide) {
        this.modalDom[i].removeEventListener('transitionend', this._hideTransition)
        this.modalDom[i].removeEventListener('animationend', this._hideTransition)
        this.modalDom[i].style.display = ''
        this.modalDom[i].classList.add('is-before-open')
      }
      setTimeout(() => {
        this.modalDom[i].classList.remove('is-before-open')
        this.modalDom[i].classList.add('is-open')
      }, 100)
    }
    this._addNoScrollEvent()
  }

  hide = () => {
    for (let i = 0 ; i < this.modalDom.length; i++) {
      this.modalDom[i].classList.remove('is-open')
      this.modalDom[i].classList.add('is-close')
      const _this = this
      if (this.autoHide) {
        this.modalDom[i].addEventListener('transitionend', this._hideTransition)
        this.modalDom[i].addEventListener('animationend', this._hideTransition)
      }
    }
    document.body.style.pointerEvents = 'auto'
    this._removeNoScrollEvent()
  }

  destroy = () =>  {
    this._removeModalEvent()
  }

  private _hideTransition = (e: TransitionEvent | AnimationEvent) => {
    const target = e.currentTarget as HTMLElement;
    target.classList.remove('is-close')
    target.style.display = 'none'
  }
  private _addModalEvent = () => {
    for(let i = 0; i < this.openDom.length; i++) {
      this.openDom[i].addEventListener( 'click', this.show)
    }
    for(let i = 0; i < this.closeDom.length; i++) {
      this.closeDom[i].addEventListener( 'click', this.hide)
    }
  }

  private _removeModalEvent = () => {
    for(let i = 0; i < this.openDom.length; i++) {
      this.openDom[i].removeEventListener( 'click', this.show)
    }
    for(let i = 0; i < this.closeDom.length; i++) {
      this.closeDom[i].removeEventListener( 'click', this.hide)
    }
  }

  disableScroll = (event: MouseEvent) => {
    event.preventDefault();
  }

  private _addNoScrollEvent = () => {
    this.scrollValue = window.pageYOffset;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${this.scrollValue}px`;
  }
  private _removeNoScrollEvent = () => {
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, this.scrollValue);
  }

  //DeviceCheck
  isMobile = () => {
    const ua = navigator.userAgent.toLowerCase();
    if (ua.includes("mobile")) {
      return true
    } else {
      return false
    }
  }

}

export default Modal;
