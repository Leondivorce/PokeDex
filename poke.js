







const myPerso = document.getElementById('liste');
const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("name");

// Ajout d'un événement au clic sur le bouton de recherche
searchButton.addEventListener("click", function () {
    const inputValue = searchInput.value.trim();
//je récupère ce qui a été saisie dans l'input
    if (inputValue) {
        last = inputValue //je stocke la valeur
        console.log("Input value:", last); //s'etait just epour check si ça fonctionait
        myPerso.innerHTML = '' //j'efface la liste de pokémon pour laissé place au pokemon selectioné
        
        //je fetch avec le nom ou l'id rentrer dans l'input qui était stocké dans last
        fetch("https://pokeapi.co/api/v2/pokemon/"+last)
                    .then((response) => response.json())
                    .then((pokeApi) => {
                // Traitement des données reçues


                        const myPerso = document.getElementById('liste');
                        let newP = document.createElement("div");
                        newP.classList.add("col")

                        //je selectione le premier type des pokémon
                        let typeVar = pokeApi.types
                        let typelet = typeVar[0]
                        let typeConst = typelet.type.name



                        //switch case pour définir le fond de la carte en fonction du type
                    switch (typeConst) {
                        case "normal":
                            backGround = "photo/normal.png"
                            break;
                        case "fighting":
                        backGround = "photo/combat.png"
                        break;
                        case "flying": 
                        backGround = "photo/vol.jpg"
                        break;
                        case "poison":
                            backGround = "photo/toxic.png"
                            break;
                        case "ground":
                            backGround = "photo/ground.webp"
                            break;
                        case "bug":
                            backGround = "photo/grass2.avif"
                            break;
                        case "ghost":
                            backGround = "photo/ghost.jpg"
                            break;
                        case "rock":
                            backGround = "photo/rock.webp"
                            break;
                        case "steel":
                            backGround = "photo/steel.jpg"
                            break;
                        case "fire":
                            backGround = "photo/lava.png"
                            break;
                        case "water":
                            backGround = "photo/water.jpg"
                            break;
                        case "grass":
                            backGround = "photo/grass.png"
                            break;
                        case "electric":
                            backGround = "photo/electric.jpg"
                            break;
                        case "psychic":
                            backGround = "photo/psychic.png"
                            break;
                        case "ice":
                            backGround = "photo/ice.jpg"
                            break;
                        case "dragon":
                            backGround = "photo/dragon.png"
                            break;
                        case "dark":
                            backGround = "photo/dark.png"
                            break;
                        case "fairy":
                            backGround = "photo/fairy.png"
                            break;
                        default:
                            console.log("default");

                        }

                        //selection du deuxième type du pokémon
                        let typeConst1 = null;
                        let backGround1 = null;
                        if (typeVar.length > 1) { //je check la longueur de typeVar ce qui me permet de déterminer si il y a un deuxième type
                        typeConst1 = typeVar[1].type.name;

                        //switch pour le deuxième fond
                        switch (typeConst1) {
                            case "normal":
                                backGround1 = "photo/normal.png"
                                break;
                            case "fighting":
                                backGround1 = "photo/combat.png"
                            break;
                            case "flying": 
                            backGround1 = "photo/vol.jpg"
                            break;
                            case "poison":
                                backGround1 = "photo/toxic.png"
                                break;
                            case "ground":
                                backGround1 = "photo/ground.webp"
                                break;
                            case "bug":
                                backGround1 = "photo/grass2.avif"
                                break;
                            case "ghost":
                                backGround1 = "photo/ghost.jpg"
                                break;
                            case "rock":
                                backGround1 = "photo/rock.webp"
                                break;
                            case "steel":
                                backGround1 = "photo/steel.jpg"
                                break;
                            case "fire":
                                backGround1 = "photo/lava.png"
                                break;
                            case "water":
                                backGround1 = "photo/water.jpg"
                                break;
                            case "grass":
                                backGround1 = "photo/grass.png"
                                break;
                            case "electric":
                                backGround1 = "photo/electric.jpg"
                                break;
                            case "psychic":
                                backGround1 = "photo/psychic.png"
                                break;
                            case "ice":
                                backGround1 = "photo/ice.jpg"
                                break;
                            case "dragon":
                                backGround1 = "photo/dragon.png"
                                break;
                            case "dark":
                                backGround1 = "photo/dark.png"
                                break;
                            case "fairy":
                                backGround1 = "photo/fairy.png"
                                break;
                            default:
                                console.log("default");
        
                            }

                            //modèle de ma carte pokémon pour deux types en html
                            newP.innerHTML += `<br>
                                            <div class="container">
                                                <div class="card bg-dark text-white" style="width: 15rem; height: 300px;">
                                                <div class="container h-100">
                                                <div class="row h-100">
                                                <div class="col-6  p-0">
                                                    <img src=${backGround} class="card-img img_type" style="object-fit: cover; width: 100%; height: 100%;">
                                                    </div>
                                                <div class="col-6  p-0">
                                                    <img src=${backGround1} class="card-img img_type" style="object-fit: cover; width: 100%; height: 100%;">
                                                </div>
                                                </div>
                                                </div>
                                                    <div class="card-img-overlay">
                                                        <h5 class="card-title p" style="text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;">${pokeApi.name}</h5><br>
                                                        <p class="card-text p2" style="text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;">id: ${pokeApi.id}</p>
                                                        <p class="card-text p2" style="text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;">type : ${typeConst}, ${typeConst1}</p> 
                                                        <p class="card-text p2" style="text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;">height : ${pokeApi.height}</p>
                                                        <p class="card-text " style="text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;">weight : ${pokeApi.weight}</p> 
                                                        <img src=${pokeApi.sprites.front_default}>
                                                        <img src=${pokeApi.sprites.back_default}>




                                                    </div>
                                                </div>
                                            </div>
                                            <br><br>
                        `
                        } else {

                                //modèle de ma carte pokémon pour un seul type en html
                        newP.innerHTML += `<br>
                                            <div class="container">
                                                <div class="card bg-dark text-white" style="width: 15rem; height: 300px;">
                                                    <img src=${backGround} class="card-img img_type" style="object-fit: cover; width: 100%; height: 100%;">
                                                
                                                
                                                    <div class="card-img-overlay">
                                                        <h5 class="card-title p" style="text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;">${pokeApi.name}</h5><br>
                                                        <p class="card-text p2" style="text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;">id :${pokeApi.id}</p>
                                                        <p class="card-text p2" style="text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;">type :${typeConst}</p>
                                                        <p class="card-text p2" style="text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;">height : ${pokeApi.height}</p>
                                                        <p class="card-text" style="text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;">weight : ${pokeApi.weight}</p>
                                                        <img src=${pokeApi.sprites.front_default}>
                                                        <img src=${pokeApi.sprites.back_default}>




                                                    </div>
                                                </div>
                                            </div>
                                            <br><br>
                        `}
                        
                        myPerso.appendChild(newP); //ajoujout de la carte pokémon grace a appendChild
                    })
                        
                    .catch((err) => console.error(err)); //gestion des erreurs
                
    } else {
        alert("Veuillez entrer un nom de Pokémon.");
    }
});






//liste de carte pokémon commence ici--->
//je réutilise le code du dessus pour faire mes card pokémon
// Requête à l'API PokeAPI pour obtenir les informations sur les 1008 premiers Pokémon
        fetch("https://pokeapi.co/api/v2/pokemon?limit=1008")
        .then((response) => response.json())
        .then((pokeLimit) => {
            //je prends les urls dans results
            let pokeUrl = pokeLimit.results

            //for each pour prendre resultat
            pokeUrl.forEach(element => {
            
                let pokePokemon = element.url //je store les url dans pokePokemon

                const words = pokePokemon.split("/"); //je split les éléments
                var last = words[words.length - 2]; //je garde que l'id ou le nom du pokemon

                fetch("https://pokeapi.co/api/v2/pokemon/"+last)// j'ajoute à la fin l'id ou le nom du pokemon. j'aurais juste pu mettre pokePokemon mais j'ai voulu tester qqc et comme ça marchait je l'ai laissé
                    .then((response) => response.json())
                    .then((pokeApi) => {


                        const myPerso = document.getElementById('liste');
                        let newP = document.createElement("div");
                        newP.classList.add("col")

                        let typeVar = pokeApi.types
                        let typelet = typeVar[0]
                        let typeConst = typelet.type.name

  
//rien de nouveau


                    switch (typeConst) {
                        case "normal":
                            backGround = "photo/normal.png"
                            break;
                        case "fighting":
                        backGround = "photo/combat.png"
                        break;
                        case "flying": 
                        backGround = "photo/vol.jpg"
                        break;
                        case "poison":
                            backGround = "photo/toxic.png"
                            break;
                        case "ground":
                            backGround = "photo/ground.webp"
                            break;
                        case "bug":
                            backGround = "photo/grass2.avif"
                            break;
                        case "ghost":
                            backGround = "photo/ghost.jpg"
                            break;
                        case "rock":
                            backGround = "photo/rock.webp"
                            break;
                        case "steel":
                            backGround = "photo/steel.jpg"
                            break;
                        case "fire":
                            backGround = "photo/lava.png"
                            break;
                        case "water":
                            backGround = "photo/water.jpg"
                            break;
                        case "grass":
                            backGround = "photo/grass.png"
                            break;
                        case "electric":
                            backGround = "photo/electric.jpg"
                            break;
                        case "psychic":
                            backGround = "photo/psychic.png"
                            break;
                        case "ice":
                            backGround = "photo/ice.jpg"
                            break;
                        case "dragon":
                            backGround = "photo/dragon.png"
                            break;
                        case "dark":
                            backGround = "photo/dark.png"
                            break;
                        case "fairy":
                            backGround = "photo/fairy.png"
                            break;
                        default:
                            console.log("default");

                        }

                        let typeConst1 = null;
                        let backGround1 = null;
                        if (typeVar.length > 1) {
                        typeConst1 = typeVar[1].type.name;

                        switch (typeConst1) {
                            case "normal":
                                backGround1 = "photo/normal.png"
                                break;
                            case "fighting":
                                backGround1 = "photo/combat.png"
                            break;
                            case "flying": 
                            backGround1 = "photo/vol.jpg"
                            break;
                            case "poison":
                                backGround1 = "photo/toxic.png"
                                break;
                            case "ground":
                                backGround1 = "photo/ground.webp"
                                break;
                            case "bug":
                                backGround1 = "photo/grass2.avif"
                                break;
                            case "ghost":
                                backGround1 = "photo/ghost.jpg"
                                break;
                            case "rock":
                                backGround1 = "photo/rock.webp"
                                break;
                            case "steel":
                                backGround1 = "photo/steel.jpg"
                                break;
                            case "fire":
                                backGround1 = "photo/lava.png"
                                break;
                            case "water":
                                backGround1 = "photo/water.jpg"
                                break;
                            case "grass":
                                backGround1 = "photo/grass.png"
                                break;
                            case "electric":
                                backGround1 = "photo/electric.jpg"
                                break;
                            case "psychic":
                                backGround1 = "photo/psychic.png"
                                break;
                            case "ice":
                                backGround1 = "photo/ice.jpg"
                                break;
                            case "dragon":
                                backGround1 = "photo/dragon.png"
                                break;
                            case "dark":
                                backGround1 = "photo/dark.png"
                                break;
                            case "fairy":
                                backGround1 = "photo/fairy.png"
                                break;
                            default:
                                console.log("default");
        
                            }


                            newP.innerHTML += `<br>
                                            <div class="container">
                                                <div class="card bg-dark text-white" style="width: 15rem; height: 300px;">
                                                <div class="container h-100">
                                                <div class="row h-100">
                                                <div class="col-6  p-0">
                                                    <img src=${backGround} class="card-img img_type" style="object-fit: cover; width: 100%; height: 100%;">
                                                    </div>
                                                <div class="col-6  p-0">
                                                    <img src=${backGround1} class="card-img img_type" style="object-fit: cover; width: 100%; height: 100%;">
                                                </div>
                                                </div>
                                                </div>
                                                    <div class="card-img-overlay">
                                                        <h5 class="card-title p" style="text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;">${pokeApi.name}</h5><br>
                                                        <p class="card-text p2" style="text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;">id: ${pokeApi.id}</p>
                                                        <p class="card-text p2" style="text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;">type: ${typeConst},${typeConst1}</p>
                                                        <p class="card-text p2" style="text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;">height: ${pokeApi.height}</p>
                                                        <p class="card-text " style="text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;">weight: ${pokeApi.weight}</p>                                                        <img src=${pokeApi.sprites.front_default}>
                                                        <img src=${pokeApi.sprites.back_default}>




                                                    </div>
                                                </div>
                                            </div>
                                            <br><br>
                        `
                        } else {

                        newP.innerHTML += `<br>
                                            <div class="container">
                                                <div class="card bg-dark text-white" style="width: 15rem; height: 300px;">
                                                    <img src=${backGround} class="card-img img_type" style="object-fit: cover; width: 100%; height: 100%;">
                                                
                                                
                                                    <div class="card-img-overlay">
                                                        <h5 class="card-title p" style="text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;">${pokeApi.name}</h5><br>
                                                        <p class="card-text p2" style="text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;">id: ${pokeApi.id}</p>
                                                        <p class="card-text p2" style="text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;">type: ${typeConst}</p>
                                                        <p class="card-text p2" style="text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;">height: ${pokeApi.height}</p>
                                                        <p class="card-text " style="text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;">weight: ${pokeApi.weight}</p>
                                                        <img src=${pokeApi.sprites.front_default}>
                                                        <img src=${pokeApi.sprites.back_default}>



<br>
                                                    </div>
                                                </div>
                                            </div>
                                            <br><br>
                        `}

                        myPerso.appendChild(newP);
                    })
                        
                    .catch((err) => console.error(err));
                    });
                    })
                    .catch((err) => console.error(err));










