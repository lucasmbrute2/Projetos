let inputNome = document.querySelector('#nome')
let inputEmail = document.querySelector('#email')
let textareaMensagem = document.querySelector('#mensagem')
let button = document.querySelector('#enviar')


inputNome.addEventListener('keyup',()=>{
   
    if(inputNome.value.length <2){
        inputNome.style.borderColor = "red"
    } else {
     inputNome.style.borderColor = "green"
    }

    if(inputNome.value == ""|| inputNome.value == null){
        inputNome.style.borderColor = "#ccc"
    }
})

inputEmail.addEventListener("keyup", ()=>{

    if(inputEmail.value.indexOf('@') == -1 || inputEmail.value.indexOf('.') == -1  ){

        inputEmail.style.borderColor = 'red'

    } else {
     inputEmail.style.borderColor = 'green'
    }
    
    if(inputEmail.value == "" || inputEmail.value == null){
        inputEmail.style.borderColor = '#ccc'
    }
})

textareaMensagem.addEventListener('keydown', () =>{

    if(textareaMensagem.value.length <=100){

        textareaMensagem.style.borderColor = 'green'

    }else{
        textareaMensagem.style.borderColor = 'red'
    }

    if(textareaMensagem.value == "" || textareaMensagem.value == nul){

        textareaMensagem.style.borderColor = "#ccc"
    }

})

button.addEventListener('click', ()=>{

    if(inputEmail.style.borderColor == 'green' && inputNome.style.borderColor == "green"&& textareaMensagem.style.borderColor == 'green'){
        alert("Formulário enviado com sucesso!")
    }  else{
        alert('Preencha todas as informações corretamente')
    }


})