const btns = document.querySelectorAll('button')

btns.forEach((press) => {
    press.addEventListener('click', event => {
        value = press.innerText
        const screen = document.querySelector(".input")

        if (screen.innerText == '0' || screen.innerText == "undefined" || screen.innerText == "Infinity") {
            screen.innerText = ''
        }

        if (value == "=") {
            let solution = eval(screen.innerText)
            screen.innerText = solution
            console.log(eval("sin30"))
            return true
        }

        if (value == 'C') {
            screen.innerText = "0"
            return true
        }

        screen.append(value)

    })
})