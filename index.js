const Close = require("./assets/img/close.svg");
const defaultCloseBtn = `<div class='m-close-btn'><img src=${Close} alt='closeBtn'></div>`;

class Modal{
    constructor(options) {
        this.defaulOption = {
            num: 0,
            modalColor: "#000",
            alpha: "0.8",
            closeBtn: defaultCloseBtn,
            delay: "1s",
        };
        this.addOptions = options;
    }
    setup(){
        let mergedOptions = Object.assign(this.defaulOption, this.addOptions)
        this.ModalModule(mergedOptions);
    }

    ModalModule(options){
        const localModal = document.getElementsByClassName("plugin-modal-module")[options.num];
        let modalContent =  `
            ${options.closeBtn}
            `
        localModal.insertAdjacentHTML("afterbegin", modalContent);
        localModal.style.backgroundColor = `${options.modalColor}`
        localModal.style.opacity = `${options.alpha}`
        localModal.style.display = "none"
        localModal.style.transition = `${options.delay} ease-out`

        this.setEvent(options.alpha, localModal, options.num)
    }

    setEvent(alpha, target, num){
        let closeButtons = document.getElementsByClassName("m-close-btn")[num];
        let openButtons = document.getElementsByClassName("m-open-btn")[num];
        let self = this;
        function closeEvent(){
            target.classList.remove("is-open");
            target.style.opacity = "0"
            setTimeout(function (){
                self.setDisplay("none", target);
            },100)
            this.removeNoScrollEvent();
        }
        const addClose = closeEvent.bind(this);
        closeButtons.onclick = addClose;
        function openEvent() {
            target.classList.add("is-open");
            this.setDisplay("inline-block", target);
            this.setAlpha(alpha, target);
            this.addNoScrollEvent();
        }
        const addOpen = openEvent.bind(this);
        openButtons.onclick = addOpen;
    }

    setDisplay(parameter, target){
        target.style.display = parameter
    }

    setAlpha(parameter, target) {
        if (target.style.display === "inline-block") {
            setTimeout(function () {
                target.style.opacity = `${parameter}`;
            }, 100)
        } else {
            setTimeout(function () {
                this.setAlpha(parameter, target);
            }, 100)
        }
    }

    addNoScrollEvent() {
        window.addEventListener('touchmove', this.noScroll, {passive: false})
        window.addEventListener('mousewheel', this.noScroll, {passive: false})
    }
    removeNoScrollEvent() {
        window.removeEventListener('touchmove', this.noScroll)
        window.removeEventListener('mousewheel', this.noScroll)
    }
    noScroll(event) {
        event.preventDefault();
    }
}

export default Modal;
