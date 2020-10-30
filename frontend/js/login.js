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
        const resposta = login(fields[0].value, fields[1].value)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
        if (resposta !== true) {
            alert('Deu ruim')
        }
    }
});

async function login (email, senha) {
    const {data} = await loginInvestidor(email, senha)

    if (data.token) {
        localStorage.setItem('token', data.token);
        return true;
    } else {
        const {data} = await loginEmpreendedor(email, senha)
        if (data.token) {
            alert('empreendedor mlk')
        }
        return false;
    }

}

async function loginInvestidor (email, senha) {
    const data = axios.post('http://localhost:8080/investors/auth/singin', {
        email,
        senha
    })

    return data;
}

async function loginEmpreendedor (email, senha) {
    const resposta = axios.post('http://localhost:8080/entrepreneurs/auth/singin', {
        email,
        senha
    })
    .then(token => token.data)
    .catch(err => err)

    return resposta;
}