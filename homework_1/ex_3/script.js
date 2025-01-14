function findElementByClass(domElement, className) {
    console.log("Проверяем уровень...");
    if (domElement.classList.contains(className)) {
        console.log("Ура! Нашли!");
        return domElement;
    } else {
        console.log("Не нашли на уровне");
        if (domElement.children.length > 0) {
            console.log("Идем на уровень ниже...");
            console.log(`Будем проверять: `);
            console.log(domElement);
            for (let index = 0; index < domElement.children.length; index++) {
                const res = findElementByClass(
                    domElement.children[index],
                    className
                );
                if (res != null) {
                    return res;
                }
            }
        } else {
            console.log("Дальше детей нет");
        }
    }
}
const parent = document.querySelector("body");
console.log(findElementByClass(parent, "inner-element-5"));
