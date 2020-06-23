var item = localStorage.getItem('shape')
var a = document.getElementById('selectedValue');
a.innerText = this.item;

let area = localStorage.getItem('result')
var ele = document.getElementById('result')
console.log(ele)
document.getElementById('result').innerText = `The area is ${area}`

showText();


function start () {
    location.href = 'index.html'
}
