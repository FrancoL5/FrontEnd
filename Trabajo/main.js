"use strict"

const handdlerSubmit = () => {
    const form = document.getElementById("mainForm")
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        const nombre = e.target[0].value
        const edad = Number(e.target[1].value)
        const users = JSON.parse((localStorage.getItem("users") || (localStorage.setItem("users","[]"), "[]")))
        let p =
            document.getElementById("avisoCampo") || document.createElement("p")
        if (!(nombre && edad)) {
            p &&
                ((p.innerText = "Los dos campos son requeridos"),
                (p.id = "avisoCampo"),
                form.appendChild(p))
        } else if (!(edad >= 1 && edad <= 100)) {
            p.innerText = "la edad no es válida"
        } else {
            p.innerText = `Tu nombre completo es: ${nombre} y tu edad: ${edad}`
            users.push({nombre, edad})
            localStorage.setItem("users", JSON.stringify(users))
        }
    })
}
handdlerSubmit()
