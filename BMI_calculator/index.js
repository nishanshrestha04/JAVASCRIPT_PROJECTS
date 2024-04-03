let form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    let height = parseInt(document.querySelector('#height').value)
    let weight = parseInt(document.querySelector('#weight').value)
    let results = document.querySelector("#results")

    if (height == '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please Give a valid height ${height}`
    }
    else if (weight == '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please Give a valid height ${weight}`
    }
    else{
       let bmi = (weight / ((height * height) / 10000)).toFixed(2)
       results.innerHTML = `<sapn>${bmi}</span>`
       if (bmi < 18.6){
        results.innerHTML = `your BMI is ${bmi} which is under weight`
       }
       else if (bmi > 18.6 && bmi < 24.9){
        results.innerHTML = `your BMI is ${bmi} your weight is normal`
       }
       if (bmi > 24.9){
        results.innerHTML = `your BMI is ${bmi} which is over weight`
       }
    }

})

let reset = document.querySelector('#click')

reset.addEventListener('click', function(e){
    document.location.reload()
})