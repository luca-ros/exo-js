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
let aPayer = 120;
let verse = 200;
let resteApayer = verse - aPayer;



