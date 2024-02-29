//Obtenemos los IDs de HTML mediante DOM
const previousPage = document.getElementById('prev-page');
const nextPage = document.getElementById('next-page');
const characterList = document.getElementById('character-list');

let actualPage = 1;
let totalPage = 42;

//fetch
    fetch('https://rickandmortyapi.com/api/character/?page=1')
        .then((response) => { //verificamos si la repsuesta HTTP es exitosa
            if(!response.ok){
                throw new Error ('La solicitud no fue exitosa'); //si la solicitud no es exitosa
            }
            return response.json(); //si la solicitud es exitosa se convierte en objeto json clave:valor
        })
        .then ((data) => { //Queremos obtener los datos json
            data.results.forEach(character => { 
            //Creamos los elementos que necesita cada personaje: imagen, nombre, especie
                const characterItem = document.createElement('div');
                const characterImage = document.createElement('img');
                const characterName = document.createElement('h1');
                const characterSpecies = document.createElement('p');
            
                //Asignamos atributos
                characterImage.src = character.image;
                characterImage.alt = character.name;
                characterName.textContent = character.name;
                characterSpecies.textContent = character.species;
                
                //Añadimos los elementos al contenedor
                characterItem.appendChild(characterImage);
                characterItem.appendChild(characterName);
                characterItem.appendChild(characterSpecies);

                //Añadimos el contenedor de cada personaje al contenedor principal (characterList)
                characterList.appendChild(characterItem);
            });
        })
        .catch((error) => {
            characterList.innerText = 'Error al obtener los datos';
        })


//eventos de click
previousPage.addEventListener('click' , () => {
    if(actualPage>1){
        actualPage --;
    }
});

nextPage.addEventListener('click', () => {
    if(actualPage < totalPage){
        actualPage ++;
    }
});
