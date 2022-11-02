function sorte(){
    g = document.getElementById('radio2').checked;
    w = document.getElementById('radio1').checked;
    if(g == true || w == true){
     if(g == true){
      r=0
     }else{
      r=1
     }
    } else{
     alert("escolha par ou impar");
     return false;
    }
    y = 9*(Math.random());
    y = (Math.round(y));
    z = document.getElementById('vc').value;
    if (z >=0 && z <=9){}
    else{
     alert("valido somente numero");
     return false;
    }
    z = parseFloat(z);
    x = y+z;
    k = x%2;
    if(k==1){
     l="Impar"
    } else{
     l="Par"
    }if(k==r){
     h="Total: "+x+", "+l+" vc ganho : )";
    }else{
     h="Total: "+x+", "+l+" vc perdeu : (";
    }
    document.getElementById('res').style.visibility="visible";
    document.getElementById('rest').style.display="block";
    document.getElementById('resp').value="O PC coloco: "+y+", VC coloco: "+z+". "+h;
    document.getElementById('table').style.borderBottom="0";
   }