console.log("Inicio")

function muestra(){
    let user = document.getElementById("User")
    let password = document.getElementById("Password")

    console.log(user.value)
    console.log(password.value)
}

//ejemplo de funcion de callblack
const boton = document.getElementById("boton")
//boton.addEventListener("click", muestra)

//ejemplo de funcion anonima de tipo arrow
boton.addEventListener("click", 
    () => {
        let user = document.getElementById("User")
        let password = document.getElementById("Password")

        console.log(user.value)
        console.log(password.value)
    }
)