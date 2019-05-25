function validarEmail(correo) {
	
    expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if ( !expr.test(correo) ){
        alert("Error: La dirección de correo " + correo + " es incorrecta.");
correo.value="";
		
	}
};

function limpia(elemento)
{
elemento.value = "";
}

// JavaScript Document