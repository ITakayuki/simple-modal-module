const Close = require("./assets/img/close.svg");
const defaultCloseBtn = `<div class='m-close-btn'><img src=${Close} alt='closeBtn'></div>`;

class Modal{
    setup(_options){
        let options = {
            num: 0,
            modalColor: "#000",
            alpha: "0.8",
            closeBtn: defaultCloseBtn,
            delay: "1s",
        };
        const keyword = Object.keys(_options);
        if(keyword !== null || keyword !== undefined) {
            for (let i = 0; i < keyword.length; i++) {
                options[keyword[i]] = _options[keyword[i]];
            }
        }
        this.ModalModule(options);
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
        closeButtons.onclick = function () {
            target.classList.remove("is-open");
            target.style.opacity = "0"
            setTimeout(function (){
                this.setDisplay("none", target);
            },100)
        }
        openButtons.onclick = function () {
            target.classList.add("is-open");
            this.setDisplay("inline-block", target);
            this.setAlpha(alpha, target);
        }
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
}

export default Modal;
