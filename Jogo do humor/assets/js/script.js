let elementoButton = document.querySelector('#alterar')
const elementoImg = document.querySelector('#imagem')
const elementoNome = document.querySelector('#nomeNegrito')
let elementoDesc = document.querySelector('#descricao')



elementoButton.addEventListener('click', () =>{

    if(elementoButton.value == "primeiro"){
        
        
        elementoImg.src = "./assets/img/jr.jpg"
        elementoNome.innerText = "Desenvolvedor Jr"
        elementoDesc.innerText = "O código tem 300 linhas e quebrou."
        elementoButton.value = "segundo"
    } else if(elementoButton.value == "segundo"){

        elementoImg.src = "./assets/img/pleno.jpg"
        elementoNome.innerText = "Desenvolvedor Pleno"
        elementoDesc.innerText = "O seus códigos melhoraram e, incrivelmente, você começa a ser reconhecido como programador pelo seu visual."
        elementoButton.value = "terceiro"

    } else if(elementoButton.value == 'terceiro'){

        elementoImg.src = "./assets/img/senior.png"
        elementoNome.innerText = "Desenvolvedor Senior"
        elementoDesc.innerText = "Você chegou no ápice."
        elementoButton.value = "quarto"
    
    }
    else{

        elementoImg.src = "./assets/img/experiencia.jpeg"
        elementoNome.innerText = "Iniciante de TI"
        elementoDesc.innerText = "Você está tentanto entrar no mercado de trabalho."
        elementoButton.value = "primeiro"

    }

})