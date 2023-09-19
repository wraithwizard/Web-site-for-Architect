const form = document.getElementById("formulario");

formulario.addEventListener("submit", function(e){
    e.preventDefault();
    email();
})

function email(){
    const data = new FormData(formulario);
    fetch ('./email.php', {
        method: 'post',
        body: data
    })
    .then(res => res.text())
    .then(text => {
        if ('exito') {
            Swal.fire({
                icon: "success",
                title: "Mensaje enviado",
                text: "Nos pondremos en contacto con usted",
            })            
        }else{
            Swal.fire({
                icon: "error",
                title: "Oops",
                text: "No se pudo enviar el mensaje",
            })  
        }
    });
}