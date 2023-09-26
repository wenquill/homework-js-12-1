
//1-----------------------------------------------------------
const logInBtn = document.getElementById('logInClickBtn');
logInBtn.addEventListener('click', () => {
    logInBtn.textContent = 'Don\'t click me anymore!';
})

//2-----------------------------------------------------------
const signUpBtn = document.getElementById('signInClickBtn');
signUpBtn.addEventListener('click', () => {
    signUpBtn.style.backgroundColor = 'black';
})

//3-----------------------------------------------------------
const imageFirst = document.querySelector('.firstImage');

imageFirst.addEventListener('mouseover', () => {
    imageFirst.src = './assets/img/flowers-2.jpg';
    imageFirst.alt = 'another flowers';
});

imageFirst.addEventListener("mouseout", () => {
    imageFirst.src = './assets/img/flowers-1.jpg';
    imageFirst.alt = 'flowers';
});