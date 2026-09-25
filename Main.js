let prompt = require('prompt-sync')()
let candidat = {
    cin: "",
    lname: "",
    fname: "",
    partiPolitique: ""
    , age: 0,
    electeurs: []
}
let candidats = [{
    cin: "AB123456",
    nom: "Boushaba",
    prenom: "Soufiane",
    partiPolitique: "pam",
    age: 35,
    electeurs: ["a", "b", "b", "v", "r"]
},
{
    cin: "BA127856",
    nom: "boulama",
    prenom: "Safouane",
    partiPolitique: "Independant",
    age: 40,
    electeurs: ["s", "d", "e", "e"]
},
{
    cin: "cv98754",
    nom: "Bouhafa",
    prenom: "Soufiane",
    partiPolitique: "pam",
    age: 21,
    electeurs: ["a", "g", "h", "y", "u", "i", "o"]
},
{
    cin: "kl54788",
    nom: "Bokayo",
    prenom: "saka",
    partiPolitique: "Independant",
    age: 60,
    electeurs: ["o", "l"]
}];

//------------------------//Homepage func is for user input for choice//--------------------//
//------------------------//Homepage func checks if user input is valid//----------------
//------------------------//if yes it runs a function with every case//-------------------
function HomePage() {
    let x;



    while (x !== 0) {
        console.log(`############################################`)
        console.log(`-----------APPLICATION D'ELECTION-----------`)
        console.log(`############################################`)
        console.log(`1. Ajouter un nouveau candidat `)
        console.log(`2. Ajouter plusieurs candidats à la fois`)
        console.log(`3. Afficher la liste des candidats`)
        console.log(`4. Voter pour un candidat`)
        console.log(`5. Modifier les informations d'un candidat`)
        console.log(`6. Supprimer un candidat `)
        console.log(`7. Rechercher des candidats `)
        console.log(`8. Statistiques de l'élection`)
        console.log(`0. Quitter`)
        console.log(`############################################`)
        console.log(`############################################`)
        x = +prompt(`Entrer votre choix:`);
        switch (x) {
            case 1: addCandidat();
                break;
            case 2: addCandidats();
                break;
            case 3: afficheListe();
                break;
            case 4: voteCandidat();
                break;
            case 5:
                break;
            case 6:
                break;
            case 7:
                break;
            case 8:
                break;
            case 0: console.log(`------- CHOIX INVALIDE--------`)
        }
    }
}
HomePage();


function addCandidat() {
    let candidat = {
        cin: "",
        lname: "",
        fname: "",
        partiPolitique: ""
        , age: 0,
        electeurs: []
    }
    candidat.cin = prompt("entrer le cin du candidat : ");
    candidat.lname = prompt("entrer le nom du candidat : ");
    candidat.fname = prompt("entrer le prenom du candidat : ");
    candidat.partiPolitique = prompt("entrer le parti politique du candidat : ");
    candidat.age = prompt("entrer l'age du candidat : ");
    if (candidat.cin == "" || candidat.lname == "" || candidat.fname == "") {
        console.log("invalid input, le candidat n'est pas inscrit")
    } else {
        candidats.push(candidat);
        console.log(`le candidat est inscrit`)
    }
}
function addCandidats(cin, lname, fname, partiPolitique, age, electeurs) {
    let N = +prompt("entrer le nombre de candidats à ajouter : ");
    for (let i = 0; i < N; i++) {
        let candidat = {
            cin: cin,
            lname: lname,
            fname: fname,
            partiPolitique: partiPolitique,
            age: Number(age),
            electeurs: [],
        }
        console.log(`------candidat n° ${i + 1} ------`)
        candidat.cin = prompt(`entrer le cin du candidat ${i + 1} : `);
        candidat.lname = prompt(`entrer le nom du candidat ${i + 1} : `);
        candidat.fname = prompt(`entrer le prenom du candidat ${i + 1} : `);
        candidat.partiPolitique = prompt(`entrer le parti politique du candidat ${i + 1} : `);
        candidat.age = +prompt(`entrer l'age du candidat ${i + 1} :`);
        console.log(`le candidat ${i + 1} a été ajouté avec succès !`);
        console.log(`---------------------------------------------`);
        if (candidat.cin == "" || candidat.lname == "" || candidat.fname == "") {
            console.log(`invalid input, le candidat ${i + 1} n'est pas inscrit`)
            continue;
        } else candidats.push(candidat);

    }

}
function afficheListe() {
    let n = +prompt(` 
        ############################################
        -----------LISTE DES CANDIDATS-----------
        ############################################
        1. Liste triée par ordre décroissant 
        2. Filtrer par parti politique
        3. Quitter au menu principale
        "############################################
 `);
    if (n == 1) {
        let swap;
        for (let i = 0; i < candidats.length; i++) {
            for (let j = i + 1; j < candidats.length; j++) {
                if (candidats[i].electeurs.length < candidats[j].electeurs.length) {
                    swap = candidats[j];
                    candidats[j] = candidats[i];
                    candidats[i] = swap;
                }
            }
        }
        console.table(candidats);
    }
    else if (n == 2) {
        let parti = prompt(`entrer la parti désigné :`)
        let tabtrie = [];
        for (i = 0; i < candidats.length; i++) {
            if (candidats[i].partiPolitique.toLowerCase ()=== parti.toLowerCase()) {
                tabtrie.push(candidats[i])
            }

        }
        console.table(tabtrie);
    }
    else HomePage();
}
function voteCandidat() {
    let y = prompt(`-----saisis ton CIN :-----`);
    for (i = 0; i < candidats.length; i++) {
        for (j = 0; j < electeurs.length; j++) {
            if (y == candidats[i].electeurs[j]) {
                console.log(`Vous avez déja Vous avez déjà voté et vous n’avez pas le droit de modifier votre vote ni de voter à nouveau`)
                break;
            }
            else {
                let ccin = prompt(`entrer la cin du candidat`)
                if (ccin == candidats[i].cin) {
                    candidats.push(candidat.electeurs);
                    break;
                }
                else
                    console.log(`Aucun candidat ne posséde cet CIN :`);
            }
        }
    }
}

