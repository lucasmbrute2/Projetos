let elementoButton = document.querySelector('#alterar')
const elementoImg = document.querySelector('#imagem')
const elementoNome = document.querySelector('#nomeNegrito')
let elementoDesc = document.querySelector('#descricao')
let nomeButton = document.querySelector('button')
let cont = 1

elementoButton.addEventListener('click', () =>{

    if(cont == 1){
        
        elementoImg.src = "./assets/img/jr.jpg"
        elementoNome.innerText = " Desenvolvedor Jr"
        elementoDesc.innerText = "O código tem 300 linhas e quebrou."
        nomeButton.innerText = "Ganhar Experiência"
        cont += 1
        
    } else if(cont == 2){

        elementoImg.src = "./assets/img/pleno.jpg"
        elementoNome.innerText = " Desenvolvedor Pleno"
        elementoDesc.innerText = "O seus códigos melhoraram e, incrivelmente, você começa a ser reconhecido como programador pelo seu visual."
        nomeButton.innerText = "Ganhar Experiência"
        cont += 1

    } else if(cont == 3){

        elementoImg.src = "./assets/img/senior.png"
        elementoNome.innerText = " Desenvolvedor Sênior"
        elementoDesc.innerText = "Você chegou no ápice."
        nomeButton.innerText = "Voltar ao início do ciclo"
        cont += 1
    
    }
    else if(cont ==4){

        elementoImg.src = "./assets/img/experiencia.jpeg"
        elementoNome.innerText = " Iniciante de TI"
        elementoDesc.innerText = "Você está tentando entrar no mercado de trabalho."
        nomeButton.innerText = "Ganhar Experiência"
        cont = 1

    }

})