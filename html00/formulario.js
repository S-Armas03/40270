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

        user.setAttribute("name", "q")
        password.setAttribute("name", "yyy")

        let formulario = document.getElementsByTagName("form")
        formulario[0].setAttribute("action", "https://www.google.com/search")
        console.log(formulario)
        formulario[0].submit()
    }
)