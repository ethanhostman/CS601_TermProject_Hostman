function getPokemon() {
    let request = new XMLHttpRequest();
    let search = document.getElementById("searchPok").value;
    request.open("GET", "https://pokeapi.co/api/v2/pokemon/" + search);
    request.send();
    request.onload = () => {
        console.log(request);
        if (request.status === 200) {
            let pokemon = JSON.parse(request.response);
            let sprite = pokemon["sprites"].front_default;
            document.getElementById("pokemon").src = sprite;
            document.getElementById("error").innerHTML = ""
        } else {
            console.log(`error ${request.status} ${request.statusText}`)
            document.getElementById("error").innerHTML = "<p>Either you misspelled the Pokemon name or it does not exist in the database. Please try again.</p>";
            document.getElementById("pokemon").src = "/images/question1.png"
        }
    }
}