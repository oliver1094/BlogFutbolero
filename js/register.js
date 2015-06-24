/**
 * Created by hyuchiha on 3/05/15.
 */

function validar(){
    var nombre = document.getElementById("Nombre").value;
    var apellido = document.getElementById("Apellidos").value;
    var mail = document.getElementById("email").value;
    var contra1 = document.getElementById("password").value;
    var contra2 = document.getElementById("password2").value;
    var Admin = document.getElementById("admin").value;

     if(!validarForm(nombre, apellido, mail, contra1, contra2)){
        return false;
     }

    if(notSecurePassword(contra1)){
        alert("La contraseña debe ser de almenos 8 caracteres");
        document.getElementsByName("password").value ="";
        document.getElementsByName("password2").value ="";
        document.fValida.password.focus();
        return false;
    }

    if(!notSamePassword(contra1,contra2)){
        alert("Las contraseñas no coinciden");
        document.getElementsByName("password").value ="";
        document.fValida.password.focus();
        return false;
    }

}

    function notSamePassword(contra1, contra2){
        return contra1 == contra2;
    }

function vacio(word) {
    for ( i = 0; i < word.length; i++ ) {
        if ( word.charAt(i) != " " ) {
            return true
        }
    }
    return false
}

function notSecurePassword(word){
    return word.length <8;
}

function validarForm(nombre, apellido, mail, contra1, contra2){
    if(nombre.length == 0 || !vacio(nombre)){
        alert("Tiene que escribir su nombre");
        document.getElementsByName("Nombre").value ="";
        document.fValida.Nombre.focus();
        return false;
    }

    if(apellido.length == 0 || !vacio(apellido)){
        alert("Tiene que escribir tu apellido");
        document.getElementsByName("Apellidos").value ="";
        document.fValida.Apellidos.focus();
        return false;
    }

    if(mail.length == 0 || !vacio(mail)){
        alert("Tiene que escribir su nombre");
        document.getElementsByName("email").value ="";
        document.fValida.email.focus();
        return false;
    }

    if(contra1.length == 0 || !vacio(contra1)){
        alert("Tiene que escribir su nombre");
        document.getElementsByName("password").value ="";
        document.fValida.password.focus();
        return false;
    }

    if(contra2.length == 0 || !vacio(contra2)){
        alert("Tiene que escribir su nombre");
        document.getElementsByName("password2").value ="";
        document.fValida.password2.focus();
        return false;
    }
    return true;
}