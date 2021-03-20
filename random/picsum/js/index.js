function getRandomImage() {
    const { innerWidth, innerHeight } = window;
    const width = Math.floor(innerWidth * .6);
    const height = Math.floor(innerHeight * .6);

    fetch(`https://picsum.photos/${width}/${height}`)
        .then(function(res) {
            console.log(res);
            const imageElement = document.querySelector("#container-image");
            imageElement.src = res.url;
            return res.json();
        });
}

getRandomImage();

buttonElement = document.querySelector("#container-image");
buttonElement.addEventListener('click', function () {
    getRandomImage();
});