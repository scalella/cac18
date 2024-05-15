
const h2anio = document.querySelector('h2')

h2anio.insertAdjacentText('beforeend', '2024')

/* const validarFormulario =  () => Función Flecha*/

/*Validación Usuario INICIAR SESIÓN*/
const validarFormulario=  (evento) => {
    evento.preventDefault()
    const nombreLogin = document.getElementById("username")
    const divErrornombreLogin = document.querySelector("#error-username")
    divErrornombreLogin.innerHTML = ""

    if (nombreLogin.value === ""){
        divErrornombreLogin.insertAdjacentText("afterbegin", "Por Favor ingrese el nombre de Usuario")

    }
// Validación PASSWORD 
    const clave = document.getElementById("password")
    const divErrorPassword = document.querySelector("#error-password")
    divErrorPassword.innerHTML = ""
    
    if (clave.value.length < 8) {
        
        divErrorPassword.insertAdjacentText("afterbegin","La password debe tener al menos 8 caracteres")
    }
}


const validarRegistro= (evento) => {
    evento.preventDefault()
    const nombreRegistro= document.getElementById("usernamer")
    const divErrornombreRegistro = document.querySelector("#error-usernamer")
    divErrornombreRegistro.innerHTML = ""

    if (nombreRegistro.value === "") {
        
        divErrornombreRegistro.insertAdjacentText("afterbegin","Complete el Username para Registrarlo!")
    }


    //Email
    const emailr = document.getElementById("emailr")
    const divErrorEmailRegistro= document.querySelector('#error-emailr')
    divErrorEmailRegistro.innerHTML = ""

    if (emailr.value === "") {

        divErrorEmailRegistro.insertAdjacentText("afterbegin", "Complete con un mail válido!")

    }


    // password
    const claver = document.getElementById("passwordr")
    const divErrorClaver = document.querySelector("#error-passwordr")
    divErrorClaver.innerHTML = ""
    
    if (claver.value.length < 8) {
        
        divErrorClaver.insertAdjacentText("afterbegin","La password debe tener al menos 8 caracteres")
    }
}



/*Se agrega listener al formulario*/

const formularioLogin = document.querySelector("#formlogin")

formularioLogin.addEventListener('submit', validarFormulario)

const formularioRegistro = document.querySelector("#formRegister")

formularioRegistro.addEventListener('submit', validarRegistro)