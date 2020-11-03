function Main() {
    const user = JSON.parse(localStorage.getItem('user'));
    document.getElementById('nomeUsuario').innerHTML = user.nome;

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

    if (user.tipo == "empreendedor") {
        Toast.fire({
            icon: 'success',
            title: `Bem vindo, empreendedor ${user.nome}`
        })
    } else {
        Toast.fire({
            icon: 'success',
            title: `Bem vindo, investidor ${user.nome}`
        })
    }
}

Main();