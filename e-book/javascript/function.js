const inputForm = document.querySelector('.input-btn')

inputForm.addEventListener('click', (event) =>{
    event.preventDefault()

    const nome = document.getElementById('name')
    const idade = document.getElementById('idade')
    const email = document.getElementById('email')
    const telefone = document.getElementById('phone')
    const agree = document.querySelector('#agree').checked

    


    if(nome.value == '' || nome.value.length <= 2){
        nome.classList.add('inputErro')
    }else{
        nome.classList.remove('inputErro')
    }
    if(idade.value == '' || idade.value.length <=3){
        idade.classList.add('inputErro')
    }else{
        idade.classList.remove('inputErro')
    }
    if(email.value == ''){
        email.classList.add('inputErro')
    }
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || (email.value.indexOf("@") == -1 - email.value.indexOf(".") == -1)){
        email.classList.add('inputErro')
    }else{
        email.classList.remove('inputErro')
    }
    if(telefone.value == '' || telefone.value.length <= 10 ||telefone.value.length >= 12){
        telefone.classList.add('inputErro')
    }else{
        telefone.classList.remove('inputErro')
    }

    if(agree != true){
        alert('[ERRO] É necessário aceitar os termos')
    }

})