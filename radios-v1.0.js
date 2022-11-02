
const btnProximo = document.getElementById("bntProximo")
btnProximo.addEventListener("click", (event) => { 
    var radios = document.getElementsByName("escolher");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            console.log("Escolheu: " + radios[i].value);
        }
    }   
})
      
