window.onload = function () {
    var header = document.getElementById("header");
    var footer = document.getElementById("footer");

    function headerDom() {
        return axios.get("./components/header.html")
    };
    function footerDom() {
        return axios.get("./components/footer.html")
    };

    axios.all([headerDom(), footerDom()])
        .then(axios.spread(function (headDom, footDom) {
            header.innerHTML = headDom.data;
            footer.innerHTML = footDom.data;

        }))

}