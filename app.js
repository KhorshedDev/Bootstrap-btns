const btns = document.querySelectorAll('.btn');
const myInput = document.querySelector('#myInput');
const mouse = document.querySelector('.mouse');

btns.forEach(btn => {
    btn.addEventListener('click', function (e) {
        let x = ""
        for (let i = 0; i < e.target.classList.length; i++) {
            x = x + " " + e.target.classList[i]
        }
        myInput.value = "Please Buy to use full Feature!";
        myInput.select();
        document.execCommand('copy');
        mouse.textContent = "Copied!"
    })
});


btns.forEach(btn => {
    btn.addEventListener('mousemove', function (e) {
        mouse.style.display = "block";
        mouse.style.top = e.pageY + 25 + 'px';
        mouse.style.left = e.pageX - 10 + 'px';
    })
});
btns.forEach(btn => {
    btn.addEventListener('mouseleave', function (e) {
        mouse.style.display = "none";
        mouse.textContent = "Click To Copy"

    })
});

// document.addEventListener('scroll',function () {
//     btns.forEach(btn => {
//         btn.addEventListener('mousemove',function(e) {
//              mouse.style.display ="block";
//              mouse.style.top = e.pageY + 25+'px';
//              mouse.style.left = e.pageX -10+'px';
//         })
//     });
// })