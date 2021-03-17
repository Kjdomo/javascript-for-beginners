const apiUrl = "https://cat-fact.herokuapp.com";

function factsRandomEndpoint () {
    const endpoint = "/facts/random";
    fetch(apiUrl + endpoint)
        .then(function(res) {
            return res.json(); 
        })
        .then(function(data) {
            alert(data.text);
        });
}  

factsRandomEndpoint();
