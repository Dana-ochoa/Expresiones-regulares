function VerificarEmail(correo){
    var expReg=/[\w\.]{1,30}@[\w\.\-]+\.[a-z]{2,5}/;
    var esValido = expReg.test(correo);
    if (esValido == true){
        swal("", "¡El correo es Valido!", "success");
    }
    else{
        swal("Oops!", "¡El correo NO es Valido!", "error");
        
    }
}

function VerificarUrl(url){
    var expReg=/https?:\/\/[\w\.\-]+\.[a-z]{2,5}\/?/;
    var esValido = expReg.test(url);
    if (esValido == true){
        swal("", "¡El URL es Valido!", "success");
    }
    else{
        swal("Oops!", "¡El URL NO es Valido!", "error");
    }
}

function VerificarHora(hora){
    var expReg=/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
    var esValido = expReg.test(hora);
    if (esValido == true){
        swal("", "¡La hora es Valida!", "success");
    }
    else{
        swal("Oops!", "¡La hora NO es Valida!", "error");
    }
}

function VerificarFecha(fecha){
    var expReg=/^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/;
    var esValido = expReg.test(fecha);
    if (esValido == true){
        swal("", "¡La fecha es Valida!", "success");
    }
    else{
        swal("Oops!", "¡La fecha NO es Valida!", "error");
    }
}

function VerificarRfc(rfc){
    var expReg=/^([A-ZÑ\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1]))([A-Z\d]{3})?$/;
    var esValido = expReg.test(rfc);
    if (esValido == true){
        swal("", "¡El RFC es Valido!", "success");
    }
    else{
        swal("Oops!", "¡El RFC NO es Valido!", "error");
    }
}

function VerificarContraseña(contraseña){
    var expReg=/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
    var esValido = expReg.test(contraseña);
    if (esValido == true){
        swal("", "¡La contraseña es Valida!", "success");
    }
    else{
        swal("Oops!", "¡La contraseña NO es Valida!", "error");
    }
}


