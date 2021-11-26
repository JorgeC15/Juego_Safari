function validar(){
    //Capturar el valor del campo
    texto = document.getElementById("NoVacio").value;
    console.log(texto);
    if(texto.length == 0 || /^\s+$/.test(texto))
    {
        alert("Debe de agregar un nombre");
    }
    else
    {
        document.getElementById("btn-codigo").style.display = "block";
        document.getElementById("btn-val").style.display = "none";
        document.getElementById("clave").style.display = "block";
    }
}

function Generar(){
    var caracteres = "0123456789";
    var tam = 6;
    var pass = "";

    for(var i = 0; i<tam; i++)
    {
        var rand = Math.floor(Math.random()*caracteres.length);
        pass += caracteres.substring(rand, rand+1);
    }
    document.getElementById("clave").value = pass;
    document.getElementById("btn-codigo").style.display = "none";
    document.getElementById("btn-jugar").style.display = "block";
}
function Ruta(){
    location.href = "Juego.html"
}
