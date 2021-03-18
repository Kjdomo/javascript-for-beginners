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

/*
 * Note: I didn't do step one of the challenge Creating a button in Javascript.
 * However, if you wanted to know how to do this step the code would look like:
 * 
 * const buttonElement = document.createElement('button');
 * buttonElement.innerHTML = 'Generate Cat Fact';
 * document.body.appendChild(buttonElement);
 * 
 */


const buttonElement = document.querySelector('#cat-button');

buttonElement.addEventListener('click', function () {
    getCatFact();
});

getCatFact();