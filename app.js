function imgSlider(anything) {
    document.querySelector('.starbucks').src = anything;
}
function  changeCircleColor(color) {
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}
function  changeColorStarbucks(color) {
    const letter = document.querySelector('.letter');
    letter.style.color = color;
}
function changeColorLink(color) {
    const link = document.querySelector('.link');
    link.style.background = color;
}
function toggleMenu() {
    var menuToggle = document.querySelector('.toggle');
    var navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}
// function changecolorToggle(color) {
//     console.log(this);
//     const changeColorToggle = document.querySelector('.navigation');
//     changeColorToggle.style.background = color;
// }
const items = document.querySelectorAll(".navigation li");
console.log(items);
items.forEach(item => {
    item.addEventListener('click', event => {
        console.log('aaaa');
    })
})
