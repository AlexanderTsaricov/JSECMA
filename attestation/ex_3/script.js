function changeStyleDelayed(id, delay) {
    const element = document.querySelector(`#${id}`);
    setTimeout(function change() {
        if (element.className == "oldClass") {
            element.className = "newClass";
        } else {
            element.className = "oldClass";
        }
    }, delay);
}

const chagneButton = document.querySelector(".changeClass");

function buttonChagne() {
    changeStyleDelayed("test", 2000);
}

chagneButton.addEventListener("click", buttonChagne);
