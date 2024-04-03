let buttons = document.querySelectorAll('.button');
let body = document.querySelector('body')


buttons.forEach(function (button){
    console.log(button)
    button.addEventListener("click", function (e){
        if (e.target.id == 'grey'){
            body.style.backgroundColor = e.target.id
        }
        else if (e.target.id == 'white'){
            body.style.backgroundColor = e.target.id
        }
        else if (e.target.id == 'blue'){
            body.style.backgroundColor = e.target.id
        }
        else if (e.target.id == 'yellow'){
            body.style.backgroundColor = e.target.id
        }
        else if (e.target.id == 'red'){
            body.style.backgroundColor = e.target.id
        }
        else if (e.target.id == 'lightgreen'){
            body.style.backgroundColor = e.target.id
        }
    })
})