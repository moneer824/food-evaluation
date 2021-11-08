async function food_list() {
    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=chicken`)

    let data = await res.json()
    showfood(data.meals)
}

food_list()

let parent = document.getElementById('parent')
function showfood(meals) {

    meals.forEach(({ strMeal, strMealThumb, idMeal }) => {
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
        btn.innerText = 'Add to Cart'

        btn.onclick = function () {
            cart({ strMeal, strMealThumb, idMeal })
        }

        div.append(img, name, price, btn)
        parent.append(div)


    });
}

if (localStorage.getItem('foodie')===null) {
    localStorage.setItem('foodie',JSON.stringify([]))
}

function cart(obj) {
    console.log(obj)
    let pro = JSON.parse(localStorage.getItem('foodie'))
    pro.push(obj)
    localStorage.setItem('foodie',JSON.stringify(pro))
}