class Persona{
    // Atributos
    // Constructor de atributos
    // contructor
    constructor(id,nombre,email,clave,rol){
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.clave = clave;
        this.rol = rol;
    }

    creaObjeto(){
        // input H ... Html
        var idH = document.getElementById("cc").value;
        var nombreH = document.getElementById("nombresyapellidos").value;
        var emailH = document.getElementById("email").value;
        var claveH = document.getElementById("pwd").value;
        var rolH = document.getElementById("roles").value;
        persona.id = idH;
        persona.nombre = nombreH;
        persona.email = emailH;
        persona.clave = claveH;
        persona.rol = rolH;
        persona.leaObjeto();
    }
    leaObjeto(){
        document.getElementById("tablaD").innerHTML+=
        "<tr><td>"+persona.id+"</td>\n<td>"+persona.nombre+"</td>\n<td>"+persona.email+"</td>\n<td>"+persona.clave+"</td>\n<td>"+persona.rol+"</td><tr>";
    }
}