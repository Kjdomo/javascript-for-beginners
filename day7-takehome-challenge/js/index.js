function getCatFact() {
    const apiUrl = "https://cat-fact.herokuapp.com";
    const endpoint = "/facts/random";
    fetch(apiUrl + endpoint)
        .then(function(res) {
            return res.json(); 
        })
        .then(function(data) {
            const element = document.querySelector('#cat-fact');
            element.innerHTML = data.text;
        });
}


const buttonElement = document.querySelector('#cat-button');

buttonElement.addEventListener('click', function () {
    getCatFact();
});

getCatFact();