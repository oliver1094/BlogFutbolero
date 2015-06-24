/**
 * Created by hyuchiha on 27/04/15.
 */

function validar(){
    var usuario = document.getElementById("usuario").value;
    var contra = document.getElementById("password").value;


    if(!validarForm(usuario, contra)){
        return false;
    }else{
        if(notSecurePassword(contra)){
            alert("La contraseña debe ser de almenos 8 caracteres");
            document.getElementsByName("password").value ="";
            document.fValida.password.focus();
            return false;
        }else{
            return true;
        }
    }


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

function validarForm(usuario, contra){
    if(usuario.length == 0 || !vacio(usuario)){
        alert("Tiene que escribir su nombre");
        document.getElementsByName("user").value ="";
        document.fValida.user.focus();
        return false;
    }

    if(contra.length == 0 || !vacio(contra)){
        alert("Tiene que escribir tu contraseña");
        document.getElementsByName("contra").value ="";
        document.fValida.contra.focus();
        return false;
    }

    return true;
}