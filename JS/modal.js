export const Modal = {

    wrapper: document.querySelector('.modal-wrapper'),
    message:document.querySelector('.modal .title span'),
    btnClose: document.querySelector('.close'),

    open (){
        Modal.wrapper.classList.add('open')
    },
    close(){
      Modal.wrapper.classList.remove('open') //arrow function with one line, dont need to use the {}

    }
}

Modal.btnClose.onclick = () => Modal.close() //arrow function with one line, dont need to use the {}