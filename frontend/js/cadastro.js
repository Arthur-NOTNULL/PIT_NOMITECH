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
                            <input type="text" id="input-form" class="input telefone" onkeyup="mascara( this, mtel );" maxlength="15" >
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
                            <input type="text" id="input-form" class="input cpf" onkeyup="mascaraCPF( this, mtelCPF );" maxlength="14">
                        </div>
                    </div>
                    <span class="validate" id="cpf"></span>
                </div>
            </div>
            <div class="input-div two">
                <div class="i">
                    <i class="fa fa-calendar-o"></i>
                </div>
                <div>
                    <h5>Data de nascimento</h5>
                    <input type="date" id="input-form" class="input">
                </div>
            </div>
            <span class="validate" id="data_nascimento"></span>
            <input type="submit" class="btn btn-cadastrar" id="cadastrarEmpreendedor" value="CRIAR CONTA">
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
                                        <input type="text" id="input-form" class="input telefone" onkeyup="mascara( this, mtel );" maxlength="15" />
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
                                        <input type="text" id="input-form" class="input cpf" onkeyup="mascaraCPF( this, mtelCPF );" maxlength="14">
                                    </div>
                                </div>
                                <span class="validate" id="cpf"></span>
                            </div>
                        </div>
                        <div class="input-div two">
                            <div class="i">
                                <i class="fa fa-calendar-o"></i>
                            </div>
                            <div>
                                <h5>Data de nascimento</h5>
                                <input type="date" id="input-form" class="input">
                            </div>
                        </div>
                        <span class="validate" id="data_nascimento"></span>
                        <input type="submit" class="btn btn-cadastrar" id="cadastrarInvestidor" value="CRIAR CONTA">
                    </form>
                </div>
            </section>
            `
            areaConteudo.innerHTML = html;

            const inputs = document.querySelectorAll('#input-form');
            const btnInvestidor = document.querySelector('input#cadastrarInvestidor');
            btnInvestidor.addEventListener("click", async (event) => {
                event.preventDefault();

                const spanEmail = document.querySelector('span#email');
                const spanNome = document.querySelector('span#nome');
                const spanSenha = document.querySelector('span#senha');
                const spanConfirmaSenha = document.querySelector('span#confirmaSenha');
                const spanTelefone = document.querySelector('span#phone');
                const spanCpf = document.querySelector('span#cpf');
                const spanData = document.querySelector('span#data_nascimento');

                let fieldCheck = true;
                spanEmail.innerHTML = '';
                spanSenha.innerHTML = '';
                spanNome.innerHTML = '';
                spanConfirmaSenha.innerHTML = '';
                spanCpf.innerHTML = '';
                spanTelefone.innerHTML = '';
                spanData.innerHTML = '';

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
                if (inputs[6] == undefined || inputs[6].value === "") {
                    spanData.innerHTML += 'Data de nascimento é obrigatório<br>'
                    fieldCheck = false;
                }

                if (inputs[1].value.indexOf('@') === -1 || inputs[1].value.indexOf('.com') === -1) {
                    spanEmail.innerHTML += 'Informe um e-mail válido';
                    fieldCheck = false;
                } 

                if (inputs[3].value !== inputs[2].value) {
                    spanSenha.innerHTML += 'Senhas não conferem';
                    fieldCheck = false;
                } 

                const age = Number(calcAge(inputs[6].value));
                if (age < 18) {
                    spanData.innerHTML += 'Usuário menor de idade';
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
                    doSingup(
                        inputs[0].value, 
                        inputs[4].value,
                        inputs[1].value, 
                        inputs[2].value,
                        inputs[6].value,
                        inputs[5].value,
                        'investidor'
                        )
                        .then(res => {
                            if (res == true) {
                                doSingin(inputs[1].value, inputs[2].value,)
                                    .then(res => {
                                        if (res == true) {
                                            getMe()
                                                .then(res => { 
                                                    switch(res.tipo) {
                                                        case "investidor":
                                                            Swal.fire({
                                                                icon: 'success',
                                                                title: 'Investidor cadastrado com sucesso',
                                                                showConfirmButton: true,
                                                            }).then(() => {
                                                                window.location = './InvestidorPages/index.html'
                                                            });
                                                            break;
                                                        case "empreendedor":
                                                            Swal.fire({
                                                                icon: 'success',
                                                                title: 'Empreendedor cadastrado com sucesso',
                                                                showConfirmButton: true,
                                                            }).then(() => {
                                                                window.location = './EmpreendedorPages/index.html';
                                                            });
                                                            break;
                                                        default: 
                                                            Toast.fire({
                                                                icon: 'error',
                                                                title: 'Falha ao efetuar o login'
                                                            })
                                                            break;
                                                    }
                                                    localStorage.setItem("user", JSON.stringify(res));
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
                                            title: 'Falha ao efetuar o login'
                                        })
                                    })
                            }
                        })
                        .catch(err => {
                            console.log(err)
                            return Toast.fire({
                                icon: 'error',
                                title: 'E-mail já cadastrado'
                            })
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
                                        <input type="text" id="input-form" class="input telefone" onkeyup="mascara( this, mtel );" maxlength="15" >
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
                                        <input type="text" id="input-form" class="input cpf" onkeyup="mascaraCPF( this, mtelCPF );" maxlength="14">
                                    </div>
                                </div>
                                <span class="validate" id="cpf"></span>
                            </div>
                        </div>
                        <div class="input-div two">
                            <div class="i">
                                <i class="fa fa-calendar-o"></i>
                            </div>
                            <div>
                                <h5>Data de nascimento</h5>
                                <input type="date" id="input-form" class="input">
                            </div>
                        </div>
                        <span class="validate" id="data_nascimento"></span>
                        <input type="submit" class="btn btn-cadastrar" id="cadastrarEmpreendedor" value="CRIAR CONTA">
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
                const spanData = document.querySelector('span#data_nascimento');

                let fieldCheck = true;
                spanEmail.innerHTML = '';
                spanSenha.innerHTML = '';
                spanNome.innerHTML = '';
                spanConfirmaSenha.innerHTML = '';
                spanCpf.innerHTML = '';
                spanTelefone.innerHTML = '';
                spanData.innerHTML = '';
                
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
                if(inputs[6] == undefined || inputs[6].value === "") {
                    spanData.innerHTML += 'Data de nascimento é obrigatório<br>'
                    fieldCheck = false;
                }

                if (inputs[1].value.indexOf('@') === -1 || inputs[1].value.indexOf('.com') === -1) {
                    spanEmail.innerHTML += 'Informe um e-mail válido';
                    fieldCheck = false;
                } 

                if (inputs[3].value !== inputs[2].value) {
                    spanSenha.innerHTML += 'Senhas não conferem';
                    fieldCheck = false;
                } 

                const age = Number(calcAge(inputs[6].value));
                if (age < 18) {
                    spanData.innerHTML += 'Usuário menor de idade';
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
                    doSingup(
                        inputs[0].value, 
                        inputs[4].value,
                        inputs[1].value, 
                        inputs[2].value,
                        inputs[6].value,
                        inputs[5].value,
                        'empreendedor'
                        )
                        .then(res => {
                            if (res == true) {
                                doSingin(inputs[1].value, inputs[2].value,)
                                    .then(res => {
                                        if (res == true) {
                                            getMe()
                                                .then(res => { 
                                                    switch(res.tipo) {
                                                        case "investidor":
                                                            Swal.fire({
                                                                icon: 'success',
                                                                title: 'Investidor cadastrado com sucesso',
                                                                showConfirmButton: true,
                                                            }).then(() => {
                                                                window.location = './InvestidorPages/index.html'
                                                            });
                                                            break;
                                                        case "empreendedor":
                                                            Swal.fire({
                                                                icon: 'success',
                                                                title: 'Empreendedor cadastrado com sucesso',
                                                                showConfirmButton: true,
                                                            }).then(() => {
                                                                window.location = './EmpreendedorPages/index.html';
                                                            });
                                                            break;
                                                        default: 
                                                            Toast.fire({
                                                                icon: 'error',
                                                                title: 'Falha ao efetuar o login'
                                                            })
                                                            break;
                                                    }
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
                                            title: 'Falha ao efetuar o login'
                                        })
                                    })
                            }
                        })
                        .catch(err => {
                            console.log(err)
                            return Toast.fire({
                                icon: 'error',
                                title: 'E-mail já cadastrado'
                            })
                        })
                }
            });
        }

        const inputs = document.querySelectorAll('#input-form');
        inputs.forEach(input => {
            input.addEventListener('focus', focusFunc);
            input.addEventListener('blur', blurFocus);
        });

        function mascara(o,f){
            v_obj=o
            v_fun=f
            setTimeout("execmascara()",1)
        }
        function execmascara(){
            v_obj.value=v_fun(v_obj.value)
        }
        function mtel(v){
            v=v.replace(/\D/g,"");             //Remove tudo o que não é dígito
            v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
            v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
            return v;
        }
        
        function mascaraCPF(o,f){
            v_obj=o
            v_fun=f
            setTimeout("execmascaraCPF()",1)
        }
        function execmascaraCPF(){
            v_obj.value=v_fun(v_obj.value)
        }
        function mtelCPF(v){
            v=v.replace(/\D/g,"");             //Remove tudo o que não é dígito
            v=v.replace(/^(\d{3})(\d)/g,"$1.$2"); //Coloca parênteses em volta dos dois primeiros dígitos
            v=v.replace(/(\d{3})(\d)/,"$1.$2"); //Coloca parênteses em volta dos dois primeiros dígitos
            v=v.replace(/(\d{1})(\d)$/,"-$1$2");    //Coloca ponto entre o quarto e o quinto dígitos
            return v;
        }
        
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

    console.log(document.querySelector('input.CPF'));
    const spanEmail = document.querySelector('span#email');
    const spanNome = document.querySelector('span#nome');
    const spanSenha = document.querySelector('span#senha');
    const spanConfirmaSenha = document.querySelector('span#confirmaSenha');
    const spanTelefone = document.querySelector('span#phone');
    const spanCpf = document.querySelector('span#cpf');
    const spanData = document.querySelector('span#data_nascimento');

    let fieldCheck = true;
    spanEmail.innerHTML = '';
    spanSenha.innerHTML = '';
    spanNome.innerHTML = '';
    spanConfirmaSenha.innerHTML = '';
    spanCpf.innerHTML = '';
    spanTelefone.innerHTML = '';
    spanData.innerHTML = '';
    

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
    if(inputsLoad[6] == undefined || inputsLoad[6].value === "") {
        spanData.innerHTML += 'Data de nascimento é obrigatório<br>'
        fieldCheck = false;
    }

    if (inputsLoad[1].value.indexOf('@') === -1 || inputsLoad[1].value.indexOf('.com') === -1) {
        spanEmail.innerHTML += 'Informe um e-mail válido';
        fieldCheck = false;
    } 

    if (inputsLoad[3].value !== inputsLoad[2].value) {
        spanSenha.innerHTML += 'Senhas não conferem';
        fieldCheck = false;
    }

    const age = Number(calcAge(inputsLoad[6].value));
    if (age < 18) {
        spanData.innerHTML += 'Usuário menor de idade';
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
        doSingup(
            inputsLoad[0].value, 
            inputsLoad[4].value,
            inputsLoad[1].value, 
            inputsLoad[2].value,
            inputsLoad[6].value,
            inputsLoad[5].value,
            'empreendedor'
            )
            .then(res => {
                if (res == true) {
                    doSingin(inputsLoad[1].value, inputsLoad[2].value,)
                        .then(res => {
                            if (res == true) {
                                getMe()
                                    .then(res => { 
                                        switch(res.tipo) {
                                            case "investidor":
                                                Swal.fire({
                                                    icon: 'success',
                                                    title: 'Investidor cadastrado com sucesso',
                                                    showConfirmButton: true,
                                                }).then(() => {
                                                    window.location = './InvestidorPages/index.html'
                                                });
                                                break;
                                            case "empreendedor":
                                                Swal.fire({
                                                    icon: 'success',
                                                    title: 'Empreendedor cadastrado com sucesso',
                                                    showConfirmButton: true,
                                                }).then(() => {
                                                    window.location = './EmpreendedorPages/index.html';
                                                });
                                                break;
                                            default: 
                                                Toast.fire({
                                                    icon: 'error',
                                                    title: 'Falha ao efetuar o login'
                                                })
                                                break;
                                        }
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
                                title: 'Falha ao efetuar o login'
                            })
                        })
                }
            })
            .catch(err => {
                console.log(err)
                return Toast.fire({
                    icon: 'error',
                    title: 'E-mail já cadastrado'
                })
            })
    }
});

function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
    v=v.replace(/\D/g,"");             //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}

function mascaraCPF(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascaraCPF()",1)
}
function execmascaraCPF(){
    v_obj.value=v_fun(v_obj.value)
}
function mtelCPF(v){
    v=v.replace(/\D/g,"");             //Remove tudo o que não é dígito
    v=v.replace(/^(\d{3})(\d)/g,"$1.$2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d{3})(\d)/,"$1.$2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d{1})(\d)$/,"-$1$2");    //Coloca ponto entre o quarto e o quinto dígitos
    return v;
}


const BASE_URL = "http://localhost:8080";
const AUTH_LOGIN = '/auth/singin';
const AUTH_SINGUP = '/auth/singup';
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

const doSingup = async (nome, telefone, email, senha, data_nascimento, cpf, tipo) => {
    try {
        const { data } = await http.post(AUTH_SINGUP, {
            nome, 
            telefone, 
            email, 
            senha, 
            data_nascimento, 
            cpf, 
            tipo
        });
        if(data) {
            return true;    
        }
        return false;
    } catch (error) {
        console.log(error)
        throw new Error(error.tracer)
    }
}

function calcAge(dataNasc){ 
    var dataAtual = new Date();
    
    var anoAtual = dataAtual.getFullYear();
    var anoNascParts = dataNasc.split('-');
    var diaNasc = anoNascParts[2];
    var mesNasc = anoNascParts[1];
    var anoNasc = anoNascParts[0];
    var idade = anoAtual - anoNasc;
    var mesAtual = dataAtual.getMonth() + 1; 
    console.log(dataAtual, anoNascParts);
    if(mesAtual < mesNasc){
        idade--; 
    } else {
        if(mesAtual == mesNasc){ 
            if(new Date().getDate() < diaNasc ){ 
                idade--; 
            }
        }
    } 
    return idade; 
}
