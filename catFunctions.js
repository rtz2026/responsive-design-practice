async function getCatImage(numberOfCats, swapDirection) {
    let imageUrl = "";
    for (let i = 0; i < numberOfCats; i++) {
        const response = await fetch("https://cataas.com/cat");
        const img = document.createElement("img");
        if (imageUrl === response.url) {
            i--;
            imageUrl = "";
        } else {
            imageUrl = response.url;
            img.src = imageUrl;
            if (swapDirection) {
                document.querySelector("#container").style.flexDirection = "row-reverse";
                }

            document.querySelector("#container").appendChild(img);
        };
    }
}

function buttonClick() {
    document.querySelector("button").addEventListener("click", () => {
        const numberOfCats = document.getElementById("catNumber").value;
        const swapDirection = document.getElementById("swapDirection").checked;
        if (numberOfCats > 0 && numberOfCats <= 10) {
            getCatImage(numberOfCats, swapDirection);
        }
    });
}

window.addEventListener("load", buttonClick);