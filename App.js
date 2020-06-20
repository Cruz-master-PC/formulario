let formulario = document.getElementById('formulario');
let alerta = document.getElementById('alerta');

formulario.addEventListener('submit', function(e){
    e.preventDefault();   /* evta que se ejecute los eventos que viene por defecto en el navegador, evita que se recargue la pag */
    console.log('me diste')

/* detectar los valores que se escriben en los imput para envar ese formulario */

    const datos = new FormData(formulario) /* detecta los datos del formulario */

    console.log(datos)
    console.log(datos.get('usuario')) /* permite ver los datos especificos del campo de formulario en este caso el nombre de ese usuario
                                            en consola  */

    fetch('Post.php',{ /* de esta forma traemos los datos del archivo php con el metodo post y el cuerpo datos que es el nombre 
                            de la variable que le colocamos al nuevo formulario */
        method: 'POST',
        body: datos
    })

         .then(res => res.json())
         .then(data => {
          console.log(data)
          if(data === 'error'){ /* este error o parametro es llamado del archivo php */
              alerta.innerHTML = `<div class="alert alert-danger" role="alert">
                                     LLena todos los campos vacios!
                                    </div>`
          }else{
             alerta.innerHTML = `<div class="alert alert-success" role="alert">
                                    Inicio de sesion correcta!
                                    </div>`
          }
          
    })


})

