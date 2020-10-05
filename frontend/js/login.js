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

btnLogin.addEventListener("click", event => {
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
          
        Toast.fire({
            icon: 'success',
            title: 'Signed in successfully'
        })
    }
});