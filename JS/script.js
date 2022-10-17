import { Modal } from "./modal.js"




// variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

// const modalWrapper =document.querySelector('.modal-wrapper')
// const modalMsg =document.querySelector('.modal .title span')
// const modalBtnClose =document.querySelector('.close')




//tratar o submit do form:
form.onsubmit = function(event){
    event.preventDefault() //n quero que carregue a pagina ao submit
    
    const weight = inputWeight.value
    const height = inputHeight.value

    const result = IMC(weight,height)

    const msg = `Your IBM is ${result}`

    Modal.message.innerText = msg
    Modal.open()

}

    

function IMC(weight,height){//criei a funcao do calculo do IMC
    return((weight /(height/100)**2)).toFixed(2)// dividi 100 pq altura precisa ser em M nao em CM
}



//outras maneiras para atribuir funcao no evento

// form.onsubmit = () => {}

// form.onsubmit = handleSubmit
// function handleSubmit()//