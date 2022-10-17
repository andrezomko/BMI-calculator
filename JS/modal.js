export const Modal = {

    wrapper: document.querySelector('.modal-wrapper'),
    message:document.querySelector('.modal .title span'),
    btnClose: document.querySelector('.close'),
    alertError: document.querySelector('.alertError'),
    inputWeight: document.querySelector('#weight'),
    inputHeight: document.querySelector('#height'),

    open (){
        Modal.wrapper.classList.add('open')
    },
    close(){
      Modal.wrapper.classList.remove('open') //arrow function with one line, dont need to use the {}
    },
    errorMessageOn(){
      Modal.alertError.classList.add('open')
    },
    errorMessageOff(){
      Modal.alertError.classList.remove('open')
    },


}

Modal.btnClose.onclick = () => Modal.close() //arrow function with one line, dont need to use the {}

Modal.inputWeight.addEventListener('focusin',()=>{Modal.errorMessageOff()}) 



// para fechar o popup com a tecla esc:
window.addEventListener('keydown',handleKeyDown)

function handleKeyDown(event){
  if(event.key === 'Escape'){
    Modal.close()
  }
}