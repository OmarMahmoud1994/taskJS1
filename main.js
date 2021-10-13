document.getElementById("btn").onclick = function(){
    var sign = document.getElementById("sign").value;
    const firstInput = parseFloat(document.getElementById("first").value);
    var secondInput = parseFloat(document.getElementById("second").value);
    if( sign == "add" ){

       let x = firstInput + secondInput;
       document.getElementById("result").innerHTML = x ;

    }else if(sign == "subtract"){

        let x = firstInput - secondInput;
        document.getElementById("result").innerHTML = x ;

    }else if(sign == "multiply"){

        let x = firstInput * secondInput;
        document.getElementById("result").innerHTML = x ;
    }else if (sign == "divide"){

        let x = firstInput / secondInput;
        document.getElementById("result").innerHTML = x ;
    }else{
        document.getElementById("result").innerHTML = "not valid";
    }
        

}