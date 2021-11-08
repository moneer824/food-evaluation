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
console.log(sum)
total.append(total_price)


function cart(i) {
    // console.log(obj)
    let pro = JSON.parse(localStorage.getItem('foodie'))
    pro.splice(i,1)
    localStorage.setItem('foodie', JSON.stringify(pro))
    window.location.href = 'cart.html'
}


var arr = [1, 2, 32, 55]
console.log(arr.splice(1,1))