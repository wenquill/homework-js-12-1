
//1-----------------------------------------------------------
const logInBtn = document.getElementById('logInClickBtn');
logInBtn.addEventListener('click', function () {
    this.textContent = 'Don\'t click me anymore!';
})

//2-----------------------------------------------------------
const signUpBtn = document.getElementById('signInClickBtn');
signUpBtn.addEventListener('click', function () {
    this.style.backgroundColor = 'black';
})

//3-----------------------------------------------------------
const imageFirst = document.querySelector('.firstImage');

imageFirst.addEventListener('mouseover', () => {
    changePicture('./assets/img/flowers-2.jpg', 'another flowers');
});

imageFirst.addEventListener("mouseout", () => {
    changePicture('./assets/img/flowers-1.jpg', 'flowers')
});

function changePicture (srcPic, altPic) {
    imageFirst.src = srcPic;
    imageFirst.alt = altPic;
}