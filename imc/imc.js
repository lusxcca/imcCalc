function calcularIMC(peso, altura) {                               // nesta função serão passados dois parâmetros, sendo eles a altura e o peso
    if(peso === undefined || altura === undefined){                // com a verificação e um erro caso um dos parâmetros não tenha sido inserido
        throw Error("Precisa de dois parâmetros: peso e altura")   // por fim o cálculo para se obter o IMC do indivíduo
    }                                                              //
    return peso / (altura * altura)                                //

}

function classificaIMC(imc) {               
    if(imc < 16.9){                          // 
        return 'muito abaixo do peso';       //
    }else if(imc <= 18.4){                   //  já nesta função serão verificadas as possíveis situações do indivíduo
        return 'abaixo do peso';             //
    }else if(imc <= 24.9){                   //  se está em boa forma ou em algum estado de atenção
        return 'normal';                     //
    }else if(imc <= 29.9){                   //
        return 'acima do peso';
    }else if(imc <= 34.9){
        return 'obesidade 1';
    }else if(imc <= 40){
        return 'obesidade 2';
    }else{                                   
        return 'obesidade 3';               
    }
}

let imc = calcularIMC(80, 1.65)      // aqui teremos no nosso resultado quando chamarmos a função calcularIMC com os parâmetros/valores 
console.log(imc)                     // passados para a função e chamamos o console.log para vermos os resultados
console.log(classificaIMC(imc))      //