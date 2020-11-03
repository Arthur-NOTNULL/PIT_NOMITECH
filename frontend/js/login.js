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
        const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

        doSingin(fields[0].value, fields[1].value)
            .then(res => {
                if (res == true) {
                    getMe()
                        .then(res => { 
                            switch(res.tipo) {
                                case "investidor":
                                    window.location = './InvestidorPages/index.html'
                                    break;
                                case "empreendedor":
                                    window.location = './EmpreendedorPages/index.html';
                                    break;
                                default: 
                                    Toast.fire({
                                        icon: 'error',
                                        title: 'Falha ao efetuar o login'
                                    })
                                    break;
                            }
                            console.log(res)
                            localStorage.setItem("user", JSON.stringify(res))
                            removerToken();
                         })
                        .catch(err => { 
                            console.log(err)
                            removerToken();
                            return Toast.fire({
                                icon: 'error',
                                title: 'Usuário não autorizado'
                            })
                        })
                }
            })
            .catch(err => {
                console.log(err)
                return Toast.fire({
                    icon: 'error',
                    title: 'E-mail ou senha inválidos'
                })
            })
        
    }
});

const BASE_URL = "http://localhost:8080";
const AUTH_LOGIN = '/auth/singin';
const AUTH_ME = '/auth/me';

const http = axios.create({
    baseURL: BASE_URL
});

const pegaToken = () => {
    return localStorage.getItem('token');
}

const salvaToken = (token) => {
    localStorage.setItem("token", token);
} 

const removerToken = () => {
    localStorage.removeItem("token");
}

http.interceptors.request.use(config => {
    const token = pegaToken();
    if(token) {
        config.headers['Authorization'] = `Bearer ${token}`
    }
    return config;
})

const getMe = async () => {
    try {
        const { data } = await http.get(AUTH_ME);
        return data;
    } catch (error) {
        throw new Error(error)
    }
}

const doSingin = async (email, senha) => {
    try {
        const { data } = await http.post(AUTH_LOGIN, {email, senha});
        if(data.token) {
            salvaToken(data.token);
            return true;    
        }
        return false;
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

