const Close = require("./assets/img/close.svg");
const defaultCloseBtn = `<div class='m-close-btn'><img src=${Close} alt='closeBtn'></div>`;
let localModal;
function ModalModule(
    modalNum = 0,
    modalColor = "#000",
    alpha = 0.8,
    closeBtn = defaultCloseBtn
){
    localModal = document.getElementsByClassName("plugin-modal-module")[modalNum];
    let modalContent =  `
        ${closeBtn}
        `
    localModal.insertAdjacentHTML("afterbegin", modalContent);
    localModal.style.backgroundColor = `${modalColor}`
    localModal.style.opacity = `0`
    localModal.style.display = "none"

    setEvent(alpha)
}

function setEvent(alpha){
    let closeButtons = document.getElementsByClassName("m-close-btn");
    let openButtons = document.getElementsByClassName("m-open-btn");
    for(let i = 0; i < closeButtons.length; i++){
        closeButtons[i].onclick = function () {
            localModal.classList.remove("is-open");
            localModal.style.opacity = "0"
            setTimeout(function (){
                setDisplay("none");
            },1000)
        }
    }
    for(let i = 0; i < openButtons.length; i++){
        openButtons[i].onclick = function () {
            localModal.classList.add("is-open");
            setDisplay("inline-block");
            setAlpha(alpha);
        }
    }
}

function setDisplay(parameter){
    localModal.style.display = parameter
}

function setAlpha(parameter){
    if(localModal.style.display === "inline-block"){
        setTimeout(function (){
            localModal.style.opacity = `${parameter}`;
        }, 200)
    }else{
        setTimeout(function(){
            setAlpha(parameter);
        },100)
    }
}

export default ModalModule;
