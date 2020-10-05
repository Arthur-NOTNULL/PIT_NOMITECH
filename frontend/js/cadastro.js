const toggles = document.querySelectorAll('input[type="radio"]');
const areaConteudo = document.querySelector('.content');

areaConteudo.innerHTML = '';
areaConteudo.innerHTML = 
`
<section class="container">
    <div class="login-container">
        <form id="login">
            <div class="input-div one">
                <div class="i">
                    <i class="fa fa-user"></i>
                </div>
                <div>
                    <h5>Nome</h5>
                    <input type="text" id="input-form" class="input">
                </div>
            </div>
            <span class="validate" id="nome"></span>
            <div class="input-div one">
                <div class="i">
                    <i class="fa fa-envelope"></i>
                </div>
                <div>
                    <h5>Email</h5>
                    <input type="email" id="input-form" class="input">
                </div>
            </div>
            <span class="validate" id="email"></span>
            <div class="row">
                <div class="col-md-6">
                    <div class="input-div two">
                        <div class="i">
                            <i class="fa fa-lock"></i>
                        </div>
                        <div>
                            <h5>Senha</h5>
                            <input type="password" id="input-form" class="input">
                        </div>
                    </div>
                    <span class="validate" id="senha"></span>
                </div>
                <div class="col-md-6">
                    <div class="input-div two">
                        <div class="i">
                            <i class="fa fa-lock"></i>
                        </div>
                        <div>
                            <h5>Confirma senha</h5>
                            <input type="password" id="input-form" class="input">
                        </div>
                    </div>
                    <span class="validate" id="confirmaSenha"></span>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="input-div two">
                        <div class="i">
                            <i class="fa fa-phone"></i>
                        </div>
                        <div>
                            <h5>Telefone</h5>
                            <input type="text" id="input-form" class="input">
                        </div>
                    </div>
                    <span class="validate" id="phone"></span>
                </div>
                <div class="col-md-6">
                    <div class="input-div two">
                        <div class="i">
                            <i class="fa fa-id-card"></i>
                        </div>
                        <div>
                            <h5>CPF</h5>
                            <input type="text" id="input-form" class="input">
                        </div>
                    </div>
                    <span class="validate" id="cpf"></span>
                </div>
            </div>
            <input type="submit" class="btn" id="cadastrarEmpreendedor" value="CRIAR CONTA">
        </form>
    </div>
    <div class="img">
        <img src="../images/undraw_Outer_space_drqu.svg" alt="img">
    </div>
</section>
`

for (const toggle of toggles) {
    toggle.addEventListener('click', () => {
        areaConteudo.innerHTML = '';
        if (toggle.value === 'investidor') {
            const html = 
            `
            <section class="container">
                <div class="img">
                    <img src="../images/undraw_Outer_space_drqu.svg" alt="img">
                </div>
                <div class="login-container">
                    <form id="login">
                        <div class="input-div one">
                            <div class="i">
                                <i class="fa fa-user"></i>
                            </div>
                            <div>
                                <h5>Nome</h5>
                                <input type="text" id="input-form" class="input">
                            </div>
                        </div>
                        <span class="validate" id="nome"></span>
                        <div class="input-div one">
                            <div class="i">
                                <i class="fa fa-envelope"></i>
                            </div>
                            <div>
                                <h5>Email</h5>
                                <input type="email" id="input-form" class="input">
                            </div>
                        </div>
                        <span class="validate" id="email"></span>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="input-div one">
                                    <div class="i">
                                        <i class="fa fa-lock"></i>
                                    </div>
                                    <div>
                                        <h5>Senha</h5>
                                        <input type="password" id="input-form" class="input">
                                    </div>
                                </div>
                                <span class="validate" id="senha"></span>
                            </div>
                            <div class="col-md-6">
                                <div class="input-div one">
                                    <div class="i">
                                        <i class="fa fa-lock"></i>
                                    </div>
                                    <div>
                                        <h5>Confirma senha</h5>
                                        <input type="password" id="input-form" class="input">
                                    </div>
                                </div>
                                <span class="validate" id="confirmaSenha"></span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="input-div one">
                                    <div class="i">
                                        <i class="fa fa-phone"></i>
                                    </div>
                                    <div>
                                        <h5>Telefone</h5>
                                        <input type="text" id="input-form" class="input">
                                    </div>
                                </div>
                                <span class="validate" id="phone"></span>
                            </div>
                            <div class="col-md-6">
                                <div class="input-div one">
                                    <div class="i">
                                        <i class="fa fa-id-card"></i>
                                    </div>
                                    <div>
                                        <h5>CPF</h5>
                                        <input type="text" id="input-form" class="input">
                                    </div>
                                </div>
                                <span class="validate" id="cpf"></span>
                            </div>
                        </div>
                        <input type="submit" class="btn" id="cadastrarInvestidor" value="CRIAR CONTA">
                    </form>
                </div>
            </section>
            `
            areaConteudo.innerHTML = html;

            const inputs = document.querySelectorAll('#input-form');
            const btnInvestidor = document.querySelector('input#cadastrarInvestidor');
            btnInvestidor.addEventListener("click", event => {
                event.preventDefault();

                const spanEmail = document.querySelector('span#email');
                const spanNome = document.querySelector('span#nome');
                const spanSenha = document.querySelector('span#senha');
                const spanConfirmaSenha = document.querySelector('span#confirmaSenha');
                const spanTelefone = document.querySelector('span#phone');
                const spanCpf = document.querySelector('span#cpf');

                let fieldCheck = true;
                spanEmail.innerHTML = '';
                spanSenha.innerHTML = '';
                spanNome.innerHTML = '';
                spanConfirmaSenha.innerHTML = '';
                spanCpf.innerHTML = '';
                spanTelefone.innerHTML = '';
                

                if (inputs[0].value === "") {
                    spanNome.innerHTML += 'Nome é obrigatório';
                    fieldCheck = false;
                }
                if (inputs[1].value === "") {
                    spanEmail.innerHTML += 'E-mail é obrigatório<br>';
                    fieldCheck = false;
                } 
                if (inputs[2].value === "") {
                    spanSenha.innerHTML += 'Senha é obrigatória';
                    fieldCheck = false;
                } 
                if (inputs[3].value === "") {
                    spanConfirmaSenha.innerHTML += 'Confirmação de senha é obrigatória';
                    fieldCheck = false;
                } 
                if (inputs[4].value === "") {
                    spanTelefone.innerHTML += 'Telefone é obrigatório';
                    fieldCheck = false;
                } 
                if (inputs[5].value === "") {
                    spanCpf.innerHTML += 'CPF é obrigatório';
                    fieldCheck = false;
                } 

                if (inputs[1].value.indexOf('@') === -1 || inputs[1].value.indexOf('.com') === -1) {
                    spanEmail.innerHTML += 'Informe um e-mail válido';
                    fieldCheck = false;
                } 

                if (fieldCheck === true) {
                    if (inputs[3].value !== inputs[2].value) return spanSenha.innerHTML += 'Senhas não conferem';
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
        }else if (toggle.value === 'empreendedor') {
            const html = 
            `
            <section class="container">
                <div class="login-container">
                    <form id="login">
                        <div class="input-div one">
                            <div class="i">
                                <i class="fa fa-user"></i>
                            </div>
                            <div>
                                <h5>Nome</h5>
                                <input type="text" id="input-form" class="input">
                            </div>
                        </div>
                        <span class="validate" id="nome"></span>
                        <div class="input-div one">
                            <div class="i">
                                <i class="fa fa-envelope"></i>
                            </div>
                            <div>
                                <h5>Email</h5>
                                <input type="email" id="input-form" class="input">
                            </div>
                        </div>
                        <span class="validate" id="email"></span>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="input-div one">
                                    <div class="i">
                                        <i class="fa fa-lock"></i>
                                    </div>
                                    <div>
                                        <h5>Senha</h5>
                                        <input type="password" id="input-form" class="input">
                                    </div>
                                </div>
                                <span class="validate" id="senha"></span>
                            </div>
                            <div class="col-md-6">
                                <div class="input-div one">
                                    <div class="i">
                                        <i class="fa fa-lock"></i>
                                    </div>
                                    <div>
                                        <h5>Confirma senha</h5>
                                        <input type="password" id="input-form" class="input">
                                    </div>
                                </div>
                                <span class="validate" id="confirmaSenha"></span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="input-div one">
                                    <div class="i">
                                        <i class="fa fa-phone"></i>
                                    </div>
                                    <div>
                                        <h5>Telefone</h5>
                                        <input type="text" id="input-form" class="input">
                                    </div>
                                </div>
                                <span class="validate" id="phone"></span>
                            </div>
                            <div class="col-md-6">
                                <div class="input-div one">
                                    <div class="i">
                                        <i class="fa fa-id-card"></i>
                                    </div>
                                    <div>
                                        <h5>CPF</h5>
                                        <input type="text" id="input-form" class="input cpf">
                                    </div>
                                </div>
                                <span class="validate" id="cpf"></span>
                            </div>
                        </div>
                        <input type="submit" class="btn" id="cadastrarEmpreendedor" value="CRIAR CONTA">
                    </form>
                </div>
                <div class="img">
                    <img src="../images/undraw_Outer_space_drqu.svg" alt="img">
                </div>
            </section>
            `
            areaConteudo.innerHTML = html;

            const inputs = document.querySelectorAll('#input-form');
            const btnEmpreendedor = document.querySelector('input#cadastrarEmpreendedor');
            btnEmpreendedor.addEventListener("click", event => {
                event.preventDefault();

                const spanEmail = document.querySelector('span#email');
                const spanNome = document.querySelector('span#nome');
                const spanSenha = document.querySelector('span#senha');
                const spanConfirmaSenha = document.querySelector('span#confirmaSenha');
                const spanTelefone = document.querySelector('span#phone');
                const spanCpf = document.querySelector('span#cpf');

                let fieldCheck = true;
                spanEmail.innerHTML = '';
                spanSenha.innerHTML = '';
                spanNome.innerHTML = '';
                spanConfirmaSenha.innerHTML = '';
                spanCpf.innerHTML = '';
                spanTelefone.innerHTML = '';
                
                if (inputs[0].value === "") {
                    spanNome.innerHTML += 'Nome é obrigatório';
                    fieldCheck = false;
                }
                if (inputs[1].value === "") {
                    spanEmail.innerHTML += 'E-mail é obrigatório<br>';
                    fieldCheck = false;
                } 
                if (inputs[2].value === "") {
                    spanSenha.innerHTML += 'Senha é obrigatória';
                    fieldCheck = false;
                } 
                if (inputs[3].value === "") {
                    spanConfirmaSenha.innerHTML += 'Confirmação de senha é obrigatória';
                    fieldCheck = false;
                } 
                if (inputs[4].value === "") {
                    spanTelefone.innerHTML += 'Telefone é obrigatório';
                    fieldCheck = false;
                } 
                if (inputs[5].value === "") {
                    spanCpf.innerHTML += 'CPF é obrigatório';
                    fieldCheck = false;
                } 

                if (inputs[1].value.indexOf('@') === -1 || inputs[1].value.indexOf('.com') === -1) {
                    spanEmail.innerHTML += 'Informe um e-mail válido';
                    fieldCheck = false;
                } 

                if (fieldCheck === true) {
                    if (inputs[3].value !== inputs[2].value) return spanSenha.innerHTML += 'Senhas não conferem';
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
        }

        const inputs = document.querySelectorAll('#input-form');
        inputs.forEach(input => {
            input.addEventListener('focus', focusFunc);
            input.addEventListener('blur', blurFocus);
        });
    });
}

const inputsLoad = document.querySelectorAll('#input-form');

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

inputsLoad.forEach(input => {
    input.addEventListener('focus', focusFunc);
    input.addEventListener('blur', blurFocus);
});

const btnLogin = document.querySelector('input#cadastrarEmpreendedor');
btnLogin.addEventListener("click", event => {
    event.preventDefault();

    const spanEmail = document.querySelector('span#email');
    const spanNome = document.querySelector('span#nome');
    const spanSenha = document.querySelector('span#senha');
    const spanConfirmaSenha = document.querySelector('span#confirmaSenha');
    const spanTelefone = document.querySelector('span#phone');
    const spanCpf = document.querySelector('span#cpf');

    let fieldCheck = true;
    spanEmail.innerHTML = '';
    spanSenha.innerHTML = '';
    spanNome.innerHTML = '';
    spanConfirmaSenha.innerHTML = '';
    spanCpf.innerHTML = '';
    spanTelefone.innerHTML = '';
    

    if (inputsLoad[0].value === "") {
        spanNome.innerHTML += 'Nome é obrigatório';
        fieldCheck = false;
    }
    if (inputsLoad[1].value === "") {
        spanEmail.innerHTML += 'E-mail é obrigatório<br>';
        fieldCheck = false;
    } 
    if (inputsLoad[2].value === "") {
        spanSenha.innerHTML += 'Senha é obrigatória';
        fieldCheck = false;
    } 
    if (inputsLoad[3].value === "") {
        spanConfirmaSenha.innerHTML += 'Confirmação de senha é obrigatória';
        fieldCheck = false;
    } 
    if (inputsLoad[4].value === "") {
        spanTelefone.innerHTML += 'Telefone é obrigatório';
        fieldCheck = false;
    } 
    if (inputsLoad[5].value === "") {
        spanCpf.innerHTML += 'CPF é obrigatório';
        fieldCheck = false;
    } 

    if (inputsLoad[1].value.indexOf('@') === -1 || inputsLoad[1].value.indexOf('.com') === -1) {
        spanEmail.innerHTML += 'Informe um e-mail válido';
        fieldCheck = false;
    } 

    if (fieldCheck === true) {
        if (inputsLoad[3].value !== inputsLoad[2].value) return spanSenha.innerHTML += 'Senhas não conferem';
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

