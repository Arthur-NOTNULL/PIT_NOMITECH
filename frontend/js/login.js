const inputs = document.querySelectorAll('.input');
const spanEmail = document.querySelector('span#email');
const spanSenha = document.querySelector('span#senha');
function focusFunc(){
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus');
}

function blurFocus(){
    let parent = this.parentNode.parentNode;
    if(this.value == ""){
        parent.classList.remove('focus');
    }
}

inputs.forEach(input => {
    input.addEventListener('focus', focusFunc);
    input.addEventListener('blur', blurFocus);
});

const btnLogin = document.querySelector('input#login');
const form = document.querySelector('form#login');

btnLogin.addEventListener("click", async (event) => {
    event.preventDefault();

    let fieldCheck = true;
    spanEmail.innerHTML = '';
    spanSenha.innerHTML = '';
    const fields = [...document.querySelectorAll("input#input")];

    if (fields[0].value === "") {
        spanEmail.innerHTML += 'E-mail é obrigatório<br>';
        fieldCheck = false;
    }
    if (fields[1].value === "") {
        spanSenha.innerHTML += 'Senha é obrigatória';
        fieldCheck = false;
    } 

    if (fields[0].value.indexOf('@') === -1 || fields[0].value.indexOf('.com') === -1) {
        spanEmail.innerHTML += 'Informe um e-mail válido';
        fieldCheck = false;
    } 

    if (fieldCheck === true) {
        console.log(fields[0].value, fields[1].value)
        const resposta = await axios({
            method: 'GET',
            url: 'http://localhost:8080/investidor', 
            params: {
                email: fields[0].value,
	            senha: fields[1].value
            }
        });
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
          
        console.log(resposta);
        if (resposta.data.error) {
            Toast.fire({
                icon: 'error',
                title: resposta.data.error
            })
        } else {
            localStorage.setItem("Usuario-Logado", JSON.stringify(resposta.data));
            Toast.fire({
                icon: 'success',
                title: `Usuário ${resposta.data.nome} logado com sucesso`
            })
        }
    }
});
