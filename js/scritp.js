// funcion enviar datos

function enviardatos(){
    var cc = document.getElementById("cc").value;
    var names = document.getElementById("nombresyapellidos").value;
    var email = document.getElementById("email").value;
    var pwd = document.getElementById("pwd").value;
    var rol = document.getElementById("rol").value;

    document.getElementById("tablaD").innerHTML+=
    "<tr><td>"+cc+"</td>"+
        "<td>"+names+"</td>"+
        "<td>"+email+"</td>"+
        "<td>"+pwd+"</td>"+
        "<td>"+rol+"</td>"+
    "</tr>"
    
    //alert("los datos ingresados son: "+ cc);


}