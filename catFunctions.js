async function getCatImage(numberOfCats) {
    for (let i = 0; i < numberOfCats; i++) {
        const response = await fetch("https://cataas.com/cat");
        const img = document.createElement("img");
        img.src = response.url;
        document.querySelector("#container").appendChild(img);
    }
}

function buttonClick() {
    document.querySelector("button").addEventListener("click", () => {
        const numberOfCats = document.getElementById("catNumber").value;
        getCatImage(numberOfCats);
    });
}

window.addEventListener("load", buttonClick);