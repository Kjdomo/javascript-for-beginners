function getRandomImageInfo(imageUrl) {
    const imageIDRegex = imageUrl.match(/id\/(\d+)\//);
    const imageID = imageIDRegex[1];
    fetch(`https://picsum.photos/id/${imageID}/info`)
        .then(function(res) {
            return res.json();
        }).
        then(function (data) {
            const imageElement = document.querySelector("#container-image");
            const imageElementAuthor = document.querySelector("#container-image-author");
            
            imageElement.src = imageUrl;
            imageElementAuthor.innerText = `Photographer: ${data.author}`; 
        });
}


function getRandomImage() {
    const { innerWidth, innerHeight } = window;
    const width = Math.floor(innerWidth * .6);
    const height = Math.floor(innerHeight * .6);

    fetch(`https://picsum.photos/${width}/${height}`)
        .then(function(res) {
            getRandomImageInfo(res.url);
        });
}

getRandomImage();

buttonElement = document.querySelector("#container-image");
buttonElement.addEventListener('click', function () {
    getRandomImage();
});