let inputNome = document.querySelector('#nome')

inputNome.addEventListener('keyup', () =>{
    
    if(inputNome.value.lenght <2){
        console.log('Nome inválido')

    } else {
        console.log('Nome válido')
    }      
})