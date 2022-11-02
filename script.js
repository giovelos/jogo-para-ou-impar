//jogador 1 escolhe entre par ou ímpar, jogador 2 fica com o que sobrar 
// jogador 1 digita um número e o jogador 2 digita outro número 
// os números são somados
// realizado o looping 
// realizado a soma do looping 

let fase = 0;
let jogador1 = prompt("Par ou ímpar");
let computador 

function instrucao(qual){
    document.querySelector("#mesagem").innerHTML = qual;
}
// Escolha do par ou impar na fase 1 do jogo 
function jogo(fase) {
    console.log(fase);

    if(fase === 1) {
       instrucao("escolha uma opção")
        var escolha = document.querySelector("#radio").value;
        if (escolha === "par") {

        } else if ("");
        alert("escolha par ou impar");
        return false;   
    }
     else if (fase === 2) {
        instrucao("digite um número entre 0 a 5");
        document.querySelector("#entrada").setAttribute("style", "display:block;");
         numero = Math.floor(Math.random()*6)
          return numero + 1
       }
    else if (fase === 3){
      // var total = (n1+n2)%2
       // total=0
//soma dos números         
if(total == 0 && jogador1 == 'par') {
    console.log('jogador 1 venceu no par ou ímpar')
}else if(total !=0 && jogador1 != 'par') {
    console.log('jogador 1 venceu no par ou ímpar')
    alert("Você venceu!")
}
if(total == 0 && computador == 'par'){
    console.log('computador venceu no par ou ímpar') 
}else if(total !=0 && computador != 'par'){
    console.log('computador venceu no par ou impar')
    alert("")
}
    }
    }

//document.querySelector('#bntProximo').onclick = function(){
   // console.log("clicou")
  
const btnProximo = document.getElementById("bntProximo")
btnProximo.addEventListener("click", (event) => { 
    var radios = document.getElementsByName("escolher");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            console.log("Escolheu: " + radios[i].value);
        }
    }fase = fase+1;
     jogo(fase);
} 

    
    

// escolha dos números 
//let n1 = parseInt(prompt('jogador 1, digite um número entre 0 a 5: '))
//soma dos números



   
    

