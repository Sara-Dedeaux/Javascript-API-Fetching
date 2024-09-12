// API = Application Programming Interface
// What it means: It's the middle man between the front ene (website) and the DATABASE

//JSON is set up the same way as an object
//JSON = Javascript Object Notation
let person = {
    firstName: "Sara",
    lastName: "Dedeaux"
}

//FETCHING

// let url = 'https://swapi.dev/api/people/1'; 

// fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     })

//     .catch(error => {
//         console.log(error)
//     });
    
    
// Fetching Manipulation 

//CREATE GLOBAL VARIABLE
let currentCharacter; 
let showButton=document.querySelector(".characterName button");
let counter = 1; 

async function fetchData(currentCount){
    //CREATE VARIABLE INSIDE OF FUNCTION BECAUSE IT MAY CHANE
    let url = `https://swapi.dev/api/people/${currentCount}`; 
    await fetch(url)
        .then(response => response.json())
        .then(data => {
            currentCharacter = data;
            console.log(currentCharacter); 
            pasteTraits(data.height, data.mass); 
        })

        .catch(error=> {
            console.log(error)
        })

}

fetchData(counter); 

async function pastDataToPage(){
    //fetchData must run first so the currentcharacter exists 

    showButton.disabled= "true";
    counter++
    await fetchData(counter); 

    let paragraph = document.createElement("p"); 
    paragraph.innerHTML=currentCharacter.name; 
    console.log(paragraph.innerHTML)

    let characterDivBox = document.querySelector(".characterName"); 
    console.log(characterDivBox);

    characterDivBox.append(paragraph)

    showButton.removeAttribute("disabled"); 

}

function pasteTraits(currentHeight, currentWeight){
    console.log(currentHeight, currentWeight); 
}

showButton.addEventListener("click", pastDataToPage )




//CREATE GLOBAL VARIABLES
let currentSpecies; 
let speciesButton= document.querySelector(".speciesInfo button")
let speciesCount=1;

speciesButton.addEventListener("click", pageDisplay )

//CREATE ASYNC FUNCTION TO FETCH THE SPECIES
async function fetchSpecies(countSpec){
    
    let speciesURL = `https://swapi.dev/api/species/${countSpec}`; 

    await fetch(speciesURL)
    .then(response => response.json())
    .then(data => {
        currentSpecies=data; 
        console.log(currentSpecies); 
        storeSpeciesInfo(data.name, data.classification, data.designation, data.average_lifespan);


    })

    .catch(error => {
        console.log(error); 
    })
}

async function pageDisplay() {
    speciesButton.disabled = "true"; 
    speciesCount++
    await fetchSpecies(speciesCount)

    let specParagraph= document.createElement("p");
    specParagraph.innerHTML=`Species Name: ${currentSpecies.name}, Species Class: ${currentSpecies.classification}, Species Designation: ${currentSpecies.designation}, Species Life-Span: ${currentSpecies.average_lifespan}`; 
    console.log(specParagraph.innerHTML); 

    let specDivBox= document.querySelector(".speciesInfo"); 
    console.log(specDivBox);
    specDivBox.append(specParagraph)

    speciesButton.removeAttribute("disabled"); 
    
}

function storeSpeciesInfo(specName, specClass, specDes, specLife){
    console.log(`Species Name: ${specName}, Species Class: ${specClass}, Species Designation: ${specDes}, Species Life-Span: ${specLife}`)

}

//TARGET INPUT BOX
let inputBox = 
