const display = document.getElementById("display")
const passLength = document.getElementById("length")
const uppercase = document.getElementById("uppercase")
const lowercase = document.getElementById("lowercase")
const numbers = document.getElementById("numbers")
const symbols = document.getElementById("symbols")
const generateBtn = document.getElementById("generate")
const copyBtn = document.getElementById("copy")
const numbersSet = "0123456789"
const uppercaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercaseSet = "abcdefghijklmnopqrstuvwxyz"
const symbolsSet = "`~@#$%^&*()_+=-><?/':;"

let pass

function generatePassword(){
    let password = ''
    if(passLength.value < 4){
        password = (password += uppercaseSet[Math.floor(Math.random() * uppercaseSet.length)]) || (password += lowercaseSet[Math.floor(Math.random() * lowercaseSet.length)]) || (password += numbersSet[Math.floor(Math.random() * numbersSet.length)]) || (password += symbolsSet[Math.floor(Math.random() * symbolsSet.length)])
    }
    for(let i=0; i<passLength.value; i++){
        if(uppercase.checked){
            password += uppercaseSet[Math.floor(Math.random() * uppercaseSet.length)]
            console.log(password)
        }
        if(lowercase.checked){
            password += lowercaseSet[Math.floor(Math.random() * lowercaseSet.length)]
            console.log(password)
        }
        if(numbers.checked){
            password += numbersSet[Math.floor(Math.random() * numbersSet.length)]
        }
        if(symbols.checked){
            password += symbolsSet[Math.floor(Math.random() * symbolsSet.length)]
        }
    }
    password = password.slice(0, passLength.value)
    display.innerText = password
    pass = password
}

generateBtn.addEventListener("click", generatePassword)

copyBtn.addEventListener('click', () => navigator.clipboard.writeText(pass))