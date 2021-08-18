window.onload = function () {
    var contentPhone = document.getElementById("contentPhone")
    var a1 = document.getElementById("a1")
    var a2 = document.getElementById("a2")
    var a3 = document.getElementById("a3")
    var a4 = document.getElementById("a4")
    var a5 = document.getElementById("a5")
    var pageIdx = 1;
    var timeBox = null;

    a1.addEventListener("click", showPhoto);
    a2.addEventListener("click", showPhoto);
    a3.addEventListener("click", showPhoto);
    a4.addEventListener("click", showPhoto);
    a5.addEventListener("click", showPhoto);



    function showPhoto() {
        pageIdx = Number(this.id.substr(1));
        showMenu()
        contentPhone.style.backgroundImage = 'url("../images/05/big/' + this.id + '.jpg")'
        clearInterval(timeBox);
        timeGo();
    }

    function showMenu() {

        for (var i = 1; i < 6; i++) {
            document.getElementById("a" + i).style.opacity = 0.5;
        }
        document.getElementById("a" + pageIdx).style.opacity = 1;
    }

    function timeGo() {
        timeBox = setInterval(function () {
            pageIdx++;
            if (pageIdx > 5) {
                pageIdx = 1;
            };
            showMenu()
            contentPhone.style.backgroundImage = 'url("../images/05/big/a' + pageIdx + '.jpg")'
        }, 1500);
    }

    timeGo();




    document.getElementById("a" + pageIdx).style.opacity = 1
}






// window.onload = function(){

//     var pageidx = 1;
//     var time = null;
//     var a1 = document.getElementById("a1");
//     var a2 = document.getElementById("a2");
//     var a3 = document.getElementById("a3");
//     var a4 = document.getElementById("a4");
//     var a5 = document.getElementById("a5");
//     var phone = document.getElementById("contentPhone");

//     a1.addEventListener("click", showPhoto);
//     a2.addEventListener("click", showPhoto);
//     a3.addEventListener("click", showPhoto);
//     a4.addEventListener("click", showPhoto);
//     a5.addEventListener("click", showPhoto);

//     function showPhoto(){
//         pageidx = Number(this.id.substr(1));
//         phone.style.backgroundImage = 'url("../images/05/big/' + this.id +'.jpg")';
//         reset();
//         clearInterval(time);
//         timeGo();
//     }

//     function timeGo(){
//         time = setInterval(function(){
//             pageidx++;
//             if(pageidx > 5){
//                 pageidx = 1;
//             }
//             phone.style.backgroundImage = 'url("../images/05/big/a' + pageidx +'.jpg")';
//             reset();
//         }, 3000);
//     }

//     function reset(){
//         for(var i = 1; i < 6; i++){
//             document.getElementById('a'+ i).style.opacity = 0.5;
//         }
//         document.getElementById('a'+ pageidx).style.opacity = 1;
//     }

//     timeGo();
//     document.getElementById('a'+pageidx).style.opacity = 1;


// }