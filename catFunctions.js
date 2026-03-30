async function getCatImage() {
    const response = await fetch("https://cataas.com/cat");
    document.querySelector("img").src = response.url;
}

function buttonClick() {
    document.querySelector("button").addEventListener("click", getCatImage);
}

window.addEventListener("load", buttonClick);