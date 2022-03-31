// Exo 1
let text = "Notre formation DL commence aujourd'hui"
console.log("This string  contain " + text.length + " letters")

// Exo 2
let word = (text.split(/\s+/).length)
console.dir("This string contain " + word + " word")

// Exo 3
console.log(text.replace("aujourd'hui", "demain"))

// Exo 4                        Uncomplete
let text1 = "Engage le jeu que je le gagne"
let text1LowerCase = text1.toLowerCase()
console.log(text1LowerCase)

// Exo 5
let franc = 100
let convert = 0.152449
let euro = franc * convert
let arrondi = euro.toFixed(2)
console.log("montant en franc : " + franc + " Fr")
console.log("montant en euro : " + arrondi + " €")

// Exo 6
let article = 9.99
let quantite = 5
let TVA = 0.2
let prix = article * quantite * (TVA + 1)
console.log("Prix unitaire de l'article : " + article + "€")
console.log("Quantité : " + quantite + "")
console.log("Taux de TVA " + TVA + "")
console.log("Le montant de la facture à régler est de : " + prix + "€")

// Exo 7
let age = 8

if (age >= 12)
    categorie = "Cadet"
else if (age >= 10)
    categorie = "Minime"
else if (age >= 8)
    categorie = "Pupille"
else if (age >= 6)
    categorie = "Poussin"
else
    categorie = "N'appartient à aucune catégorie"

console.log(categorie)

// Exo 8                          
const number = 8;

//creating a multiplication table
for (let i = 1; i <= 10; i++) {

    // multiply i with number
    const result = i * number;

    // display the result
    console.log(`${number} * ${i} = ${result}`);
}

// Exo 9
const ageH = 22;
let sex = "femme";

condition1 = (sex == "f" || sex == "femme") && (ageH >= 18 && ageH <= 35);
condition2 = (sex == "h" || sex == "homme") && (ageH >= 20);

if (condition1 || condition2) {
    console.log(" Age : " + ageH )
    console.log(" genre " + sex )
    console.log(" La personne est imposable.")
} else {
    console.log(" Age : " + ageH )
    console.log(" genre " + sex )
    console.log(" La personne est non imposable.")
}

// Exo 10                         
let aPayer = 147;
let verse = 200;
let resteApayer = verse - aPayer;

let billet10 = Math.floor(resteApayer/10);
console.log(billet10 +" "+ "billet de 10");
resteApayer = resteApayer - 10 * billet10;

let billet5 = Math.floor(resteApayer/5);
console.log(billet5 + " " +"billet de 5");
resteApayer = resteApayer - 0 * billet5;

let piece2 = Math.floor(resteApayer/2);
console.log(piece2 +" "+ "pieces de 2");
resteApayer = resteApayer - 2 * piece2;

console.log(resteApayer +" "+ "pieces de 1");



// Exo 11
const voitures = ["Peugeot", "Renault", "BMW", "Mercedes"];

console.log(voitures.length + " marques de voitures");
console.log(voitures)


// Exo 12                   uncompleted... need to sort 
prenomsClients = {
    "Mickaël": "FRA",
    "Virgile": "ESP",
    "Marie-Claire": "ENG"
}

// prenomsClients.sort();

for (let prenom in prenomsClients) {
    if (prenomsClients[prenom] === "FRA") {
        console.log("Salut " + prenom)

    } else if (prenomsClients[prenom] === "ESP") {
        console.log("Hola " + prenom)

    } else if(prenomsClients[prenom] === "ENG") 
    console.log("Hello " + prenom)

}   


// Exo 13

let arraynotes = [10, 12, 8, 19, 3, 16, 11, 13, 9]
let noteslength
let summ
function ArrayAvg(arraynotes){  
    let i = 0, summ = 0, noteslength = arraynotes.length
    while (i < noteslength) {
         summ += arraynotes[i++]
        
}
    return (summ / noteslength).toFixed(2)
}
let moyenne = ArrayAvg(arraynotes)
console.log("la moyenne générale : " + moyenne)


// Exo 14                                   needs deepening!!

function getAge(date) { 
    let diff = Date.now() - date.getTime();
    let age = new Date(diff); 
    return Math.abs(age.getUTCFullYear() - 1970); // Why - 1970 ? => is the number of milliseconds that have passed since January 1, 1970
}
console.log(getAge(new Date(1985, 02, 14))+" ans"); //Date(année, mois, jour) janvier = 0


// Exo 15

//      Créer une classe Personne (nom, prénom et date de naissance).
//     Instancier 2 personnes et afficher leurs informations : nom, prénom et âge.


// déclaration de classe
class Personne {
    constructor(nom, pre, dateN) {
        this.nom = nom;
        this.pre = pre;
        this.dateN = new Date(dateN);
    }
    
    getAgeP(){
        let diff = Date.now() - this.dateN.getTime();
        let age = new Date(diff);
        return Math.abs(age.getUTCFullYear() - 1970);

    }

    getFullName(){
        return this.pre + " " + this.nom;

    }
    
}
const p1 = new Personne("DUPONT", "Michel", "1980-02-19")
const p2 = new Personne("DUCHEMIN", "Alice", "1985-01-17")

console.log(p1.getFullName() + " a "+ p1.getAgeP() + " ans")

//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes

