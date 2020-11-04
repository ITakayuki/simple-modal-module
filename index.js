const Close = require("./assets/img/close.svg");
const defaultCloseBtn = `<div class='m-close-btn'><img src=${Close} alt='closeBtn'></div>`;
function ModalModule(
    modalNum = 0,
    modalColor = "#000",
    alpha = 0.8,
    closeBtn = defaultCloseBtn
){
    const localModal = document.getElementsByClassName("plugin-modal-module")[modalNum];
    console.log(localModal)
    let modalContent =  `
        ${closeBtn}
        `
    localModal.insertAdjacentHTML("afterbegin", modalContent);
    localModal.style.backgroundColor = `${modalColor}`
    localModal.style.opacity = `0`
    localModal.style.display = "none"
    localModal.style.transition = "0.1s ease-out"

    setEvent(alpha, localModal, modalNum)
}

function setEvent(alpha, target, num){
    let closeButtons = document.getElementsByClassName("m-close-btn")[num];
    let openButtons = document.getElementsByClassName("m-open-btn")[num];
    closeButtons.onclick = function () {
        target.classList.remove("is-open");
        target.style.opacity = "0"
        setTimeout(function (){
            setDisplay("none", target);
        },100)
    }
    openButtons.onclick = function () {
        target.classList.add("is-open");
        setDisplay("inline-block", target);
        setAlpha(alpha, target);
    }
}

function setDisplay(parameter, target){
    target.style.display = parameter
}

function setAlpha(parameter, target){
    if(target.style.display === "inline-block"){
        setTimeout(function (){
            target.style.opacity = `${parameter}`;
        }, 100)
    }else{
        setTimeout(function(){
            setAlpha(parameter, target);
        },100)
    }
}

export default ModalModule;
