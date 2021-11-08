let parent = document.getElementById('parent')
let total = document.getElementById('total')
let meals = JSON.parse(localStorage.getItem('foodie'))
let sum = 0

meals.forEach(({ strMeal, strMealThumb, idMeal }, i) => {
    // console.log(meals)
    let str = idMeal[2] + idMeal[3] + idMeal[4]
    // console.log(str)
    let div = document.createElement('div')
    let img = document.createElement('img')
    img.src = strMealThumb
    let name = document.createElement('p')
    name.innerText = strMeal
    let price = document.createElement('p')
    price.innerText = 'Rs. ' + idMeal[2] + idMeal[3] + idMeal[4]
    let btn = document.createElement('button')
    btn.innerText = 'Remove From Cart'

    btn.onclick = function () {
        // cart({ strMeal, strMealThumb, idMeal })
        cart(i)

    }

    div.append(img, name, price, btn)
    parent.append(div)

sum = sum +Number(idMeal[2] + idMeal[3] + idMeal[4])
});


let total_price = document.createElement('p')
total_price.innerText = 'Total Price Rs. '+sum

let btn_1 = document.createElement('button')
btn_1.innerText = 'Order Now'

btn_1.onclick = function () {
    window.location.href = "checkout.html"
}
total.append(total_price,btn_1)


function cart(i) {
    // console.log(obj)
    let pro = JSON.parse(localStorage.getItem('foodie'))
    pro.splice(i,1)
    localStorage.setItem('foodie', JSON.stringify(pro))
    window.location.href = 'cart.html'
}


let cut = document.getElementById('cut')
let btn_log = document.getElementById('btn_log')
let login = document.getElementById('login')

cut.onclick = function () {
    login.style.display = 'none'
}
btn_log.onclick = function () {
    login.style.display = 'flex'
    
}