let name = document.getElementById('name')
let age = document.getElementById('age')
let email = document.getElementById('email')
let male = document.getElementById('male')
let female = document.getElementById('female')
let phone=document.getElementById('phone')
let errorMessage = document.getElementsByTagName('p')[0];
console.log(errorMessage)

function validateInput(input) {
    console.log(input)
    if (input === "age") {
        if (age.value < 18) {
            errorMessage.innerText = "Age must be greater than 18"
        }
        else if (age.value > 100) {
            errorMessage.innerText = "Age must be lesser than 100"
        }
        else {
            errorMessage.innerText = ""
        }
    }
    else if (input === "phone") {
        if (phone.value.length < 10)
            errorMessage.innerText = "phone must be 10 digit"
        else if (phone.value.length > 10)
            errorMessage.innerText = "phone must be 10 digit"
        else {
            errorMessage.innerText = ""
        }
    }
    else if (input === "name") {
        if (name.value.length < 10)
            errorMessage.innerText = "name must be 5 of 10 character"
        else {
            errorMessage.innerText = ""
        }
    }
}
const handleForm = (event) =>{
    event.preventDefault();
    console.log("event handeled")
    console.log({
        name: name.value,
        age: age.value,
        phone: phone.value,
        gender: male.checked ? "male" : "female"
    })
}

let submitted = document.getElementById('btn')
submitted.addEventListener('click', (event) => {
    submitted.innerText="Submitted"
})