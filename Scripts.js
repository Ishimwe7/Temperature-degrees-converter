function toFohr(temp){
     return (temp*9/5) + (32);
}

function toCel(temp){
    return (temp-32) * (5/9);
}


document.getElementById("submit").onclick = function(){
   let temp=document.getElementById("tempValue").value;
   temp=Number(temp);
   if(document.getElementById("celsius").checked){
       let answer = toCel(temp);
       answer=Number(answer);
       answer=parseFloat(answer).toFixed(2);
       document.getElementById("answer").innerHTML=`${answer} &degC`
       document.getElementById("failed").innerHTML=""
   }
   else if(document.getElementById("fohr").checked){
    let answer = toFohr(temp);
    answer=Number(answer);
    answer=parseFloat(answer).toFixed(2);
    document.getElementById("answer").innerHTML=`${answer} &degF`
    document.getElementById("failed").innerHTML=""
   }
   else{
    document.getElementById("failed").innerHTML="Sorry! No unit Selected!!"
    document.getElementById("answer").innerHTML=""
   }
}