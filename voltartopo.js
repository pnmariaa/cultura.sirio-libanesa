const botaoTopo = document.getElementById("voltarTopo");

window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
        botaoTopo.classList.add("visivel");
    } else {
        botaoTopo.classList.remove("visivel");
    }
});

function voltarAoTopo() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}