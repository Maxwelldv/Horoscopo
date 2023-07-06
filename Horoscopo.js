function descobrir(){

        let dia, mes;
        dia = parseInt (document.forma1.dia.value);
        mes = parseInt (document.forma1.mes.value);
       


if (dia >= 20 && dia <= 31 && mes == 3 || dia >= 1 && dia <= 20 &&  mes == 4){
    document.write("Seu signo é Áries") }
else if (dia >= 21 && dia <= 30 && mes == 4 || dia >= 1 && dia <= 20 && mes == 5){
    document.write("Seu signo é Touro")} 
else if (dia >= 21 && dia <= 31 && mes == 5 || dia >= 1 && dia <= 20 && mes == 6){
    document.write("Seu signo é Gêmeos")} 
else if (dia >= 21 && dia <= 30 && mes == 6 || dia >= 1 && dia <= 21 && mes == 7){
    document.write("Seu signo é Câncer")} 
else if (dia >= 22 && dia <= 31 && mes == 7 || dia >= 1 && dia <= 22 && mes == 8){
    document.write("Seu signo é Leão")} 
else if (dia >= 22 && dia <= 31 && mes == 8 || dia >= 1 && dia <= 22 && mes == 9){
    document.write("Seu signo é Virgem")} 
else if (dia >= 22 && dia <= 30 && mes == 9 || dia >= 1 && dia <= 22 && mes == 10){
    document.write("Seu signo é Libra")} 
else if (dia >= 23 && dia <= 31 && mes == 10 || dia >= 1 && dia <= 21 && mes == 11){
    document.write("Seu signo é Escorpião")}
else if (dia >= 22 && dia <= 30 && mes == 11 || dia >= 1 && dia <= 21 && mes == 12){
    document.write("Seu signo é Sagitário")}
else if (dia >= 22 && dia <= 31 && mes == 12 || dia >= 1 && dia <= 20 && mes == 1){
    document.write("Seu signo é Capricórnio")}
else if (dia >= 21 && dia <= 31 && mes == 1 || dia >= 1 && dia <= 18 && mes == 2){
    document.write("Seu signo é Aquário")}
else if (dia >= 19 && dia <= 29 && mes == 2 || dia >= 1 && dia <= 19 && mes == 3){
    document.write("Seu signo é Peixes")}
else {
    document.write("Digite uma data válida!")}

}


function aries(){

    document.write("Signo de Áries")
    
}

function touro(){

    document.write("Signo de Touro")
}

function gemeos(){

    document.write("Signo de Gêmeos")

}

function cancer(){

    document.write("Signo de Câncer")

}

function leao(){

    document.write("Signo de Leão")

}

function virgem(){

    document.write("Signo de Virgem")

}

function libra(){

    document.write("Signo de Libra")

}

function escorpiao(){

    document.write("Signo de Escorpião")

}

function sagitario(){

    document.write("Signo de Sagitário")

}


function capricornio(){

    document.write("Signo de Capricórnio")

}

function aquario(){

    document.write("Signo de Aquário")

}

function peixes(){
    
    document.write("Signo de Peixes")

}