//Checking state of navbar
function toggle() {
    var x = document.getElementById("menu");
    if (x.style.opacity === "1") {
        x.style.opacity = "0"

    } else {
        x.style.opacity = "1"
    }

    var y = document.getElementById("handle")
    if (x.style.opacity === "1") {
        y.style.animationName = "handleon"
        y.style.animationDuration = "500ms"
        y .style.animationFillMode = "forwards"
    } else {
        y.style.animationName = "handleoff"
        y.style.animationDuration = "500ms"
        y.style.animationFillMode = "forwards"
    }

  }