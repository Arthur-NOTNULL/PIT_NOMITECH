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

module.exports = {
    calcAge,
}
   