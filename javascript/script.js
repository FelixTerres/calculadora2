let n1, n2, operacio;

function  suma(){
n1 = parseFloat(document.getElementById("pantalla").value)
operacio = "+"
document.getElementById("pantalla").value = ""
document.getElementById("pantalla").focus();
}

function calcula(){
    let resultat;
    n2 = parseFloat(document.getElementById("pantalla").value)
    if(operacio=="+"){
        resultat = n1+n2
  
    }
    else if(operacio=="-"){
            resultat = n1-n2
          
    }
    else if(operacio=="*"){
        resultat = n1*n2
      
}
    else if(operacio=="/"){
    resultat = n1/n2

}
    else if(operacio=="√"){
    resultat = Math.sqrt(n1);
    
}
document.getElementById("pantalla").value = resultat
    document.getElementById("pantalla").focus();
    
}

function  resta(){
    n1 = parseFloat(document.getElementById("pantalla").value)
    operacio = "-"
    document.getElementById("pantalla").value = ""
    document.getElementById("pantalla").focus();
    }

    function  multiplicar(){
        n1 = parseFloat(document.getElementById("pantalla").value)
        operacio = "*"
        document.getElementById("pantalla").value = ""
        document.getElementById("pantalla").focus();
        }
            
        function  dividir(){
            n1 = parseFloat(document.getElementById("pantalla").value)
            operacio = "/"
            document.getElementById("pantalla").value = ""
            document.getElementById("pantalla").focus();
           
        }
       
        function  arrel(){
            n1 = parseFloat(document.getElementById("pantalla").value)
            operacio = "√"
            document.getElementById("pantalla").value = ""
            document.getElementById("pantalla").focus();
        }
           
    