window.onload = function () {
    var contentPhone = document.getElementById("contentPhone")
    var a1 = document.getElementById("a1")
    var a2 = document.getElementById("a2")
    var a3 = document.getElementById("a3")
    var a4 = document.getElementById("a4")
    var a5 = document.getElementById("a5")
    var angleleft = document.getElementById("angleleft");
    var angleright = document.getElementById("angleright");
    var idx = 1;


    a1.addEventListener("click", showPhoto);
    a2.addEventListener("click", showPhoto);
    a3.addEventListener("click", showPhoto);
    a4.addEventListener("click", showPhoto);
    a5.addEventListener("click", showPhoto);
    angleleft.addEventListener("click", leftFn);
    angleright.addEventListener("click", rightFn);



    function showPhoto() {

        contentPhone.style.backgroundImage = 'url("../images/05/big/' + this.id + '.jpg")'
        idx = Number(this.id.substr(1));
    }

    function leftFn() {
        idx--;
        if (idx < 1) {
            idx = 5;
        }
        contentPhone.style.backgroundImage = 'url("../images/05/big/a' + idx + '.jpg")'

    }
    function rightFn() {
        idx++;
        if (idx > 5) {
            idx = 1;
        }
        contentPhone.style.backgroundImage = 'url("../images/05/big/a' + idx + '.jpg")'
    }

}

// a1.addEventListener("click", function () {
//     contentPhone.style.backgroundImage = 'url("../images/05/big/a1.jpg")'
// })
// a2.addEventListener("click", function () {
//     contentPhone.style.backgroundImage = 'url("../images/05/big/a2.jpg")'
// })
// a3.addEventListener("click", function () {
//     contentPhone.style.backgroundImage = 'url("../images/05/big/a3.jpg")'
// })
// a4.addEventListener("click", function () {
//     contentPhone.style.backgroundImage = 'url("../images/05/big/a4.jpg")'
// })
// a5.addEventListener("click", function () {
//     contentPhone.style.backgroundImage = 'url("../images/05/big/a5.jpg")'
// })

// window.onload = function(){

//     var a1 = document.getElementById("a1");
//     var a2 = document.getElementById("a2");
//     var a3 = document.getElementById("a3");
//     var a4 = document.getElementById("a4");
//     var a5 = document.getElementById("a5");
//     var phone = document.getElementById("contentPhone");

//     a1.addEventListener("click", function(){
//         phone.style.backgroundImage = 'url("../images/05/big/a1.jpg")';
//     });

//     a2.addEventListener("click", function(){
//         phone.style.backgroundImage = 'url("../images/05/big/a2.jpg")';
//     });

//     a3.addEventListener("click", function(){
//         phone.style.backgroundImage = 'url("../images/05/big/a3.jpg")';
//     });

//     a4.addEventListener("click", function(){
//         phone.style.backgroundImage = 'url("../images/05/big/a4.jpg")';
//     });

//     a5.addEventListener("click", function(){
//         phone.style.backgroundImage = 'url("../images/05/big/a5.jpg")';
//     });

// }