let elementoButton = document.querySelector('#alterar')
const elementoImg = document.querySelector('#imagem')
const elementoNome = document.querySelector('#nomeNegrito')
let elementoDesc = document.querySelector('#descricao')
let nomeButton = document.querySelector('button')


elementoButton.addEventListener('click', () =>{

    if(elementoButton.value == "primeiro"){
        
        
        elementoImg.src = "./assets/img/jr.jpg"
        elementoNome.innerText = " Desenvolvedor Jr"
        elementoDesc.innerText = "O código tem 300 linhas e quebrou."
        nomeButton.innerText = "Ganhar Experiência"
        elementoButton.value = "segundo"
    } else if(elementoButton.value == "segundo"){

        elementoImg.src = "./assets/img/pleno.jpg"
        elementoNome.innerText = " Desenvolvedor Pleno"
        elementoDesc.innerText = "O seus códigos melhoraram e, incrivelmente, você começa a ser reconhecido como programador pelo seu visual."
        nomeButton.innerText = "Ganhar Experiência"
        elementoButton.value = "terceiro"

    } else if(elementoButton.value == 'terceiro'){

        elementoImg.src = "./assets/img/senior.png"
        elementoNome.innerText = " Desenvolvedor Senior"
        elementoDesc.innerText = "Você chegou no ápice."
        nomeButton.innerText = "Voltar ao início do ciclo"
        elementoButton.value = "quarto"
    
    }
    else{

        elementoImg.src = "./assets/img/experiencia.jpeg"
        elementoNome.innerText = " Iniciante de TI"
        elementoDesc.innerText = "Você está tentando entrar no mercado de trabalho."
        nomeButton.innerText = "Ganhar Experiência"
        elementoButton.value = "primeiro"

    }

})