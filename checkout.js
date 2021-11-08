let cut = document.getElementById('cut')
let btn_log = document.getElementById('btn_log')
let login = document.getElementById('login')

cut.onclick = function () {
    login.style.display = 'none'
}
btn_log.onclick = function () {
    login.style.display = 'flex'
    
}