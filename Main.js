let prompt = require('prompt-sync')()
let candidat = {
    cin: "",
    nom: "",
    prenom: "",
    partiPolitique: "",
    age: 0,
    electeurs: []
}
let candidats = [{
    cin: "AB123456",
    nom: "Boushaba",
    prenom: "Soufiane",
    partiPolitique: "pam",
    age: 35,
    electeurs: ["ab1234", "ac1425", "ad7896", "ae4567", "je32154", "bj41256"]
},
{
    cin: "BA127856",
    nom: "boulama",
    prenom: "Safouane",
    partiPolitique: "rni",
    age: 40,
    electeurs: ["jl478596", "d", "e", "e"]
},
{
    cin: "je94254",
    nom: "alami",
    prenom: "Soad",
    partiPolitique: "pam",
    age: 21,
    electeurs: ["a", "g", "h", "y", "i", "o"]
},
{
    cin: "bj142513",
    nom: "sebar",
    prenom: "yassine",
    partiPolitique: "rni",
    age: 20,
    electeurs: ["a", "g", "h", "y", "u", "i", "o"]
},
{
    cin: "lm47120",
    nom: "tamel",
    prenom: "yasser",
    partiPolitique: "independant",
    age: 21,
    electeurs: []
},
{
    cin: "jb71215",
    nom: "amrani",
    prenom: "ali",
    partiPolitique: "pam",
    age: 21,
    electeurs: []
},
{
    cin: "cb98755",
    nom: "idrissi",
    prenom: "brahim",
    partiPolitique: "pam",
    age: 21,
    electeurs: ["a", "g", "h", "y", "u", "i", "o"]
},
{
    cin: "cv98754",
    nom: "Bouhafa",
    prenom: "Soufiane",
    partiPolitique: "rni",
    age: 21,
    electeurs: ["a", "g", "h", "y", "u", "i", "o"]
},
{
    cin: "cv98754",
    nom: "yakoubi",
    prenom: "driss",
    partiPolitique: "pam",
    age: 21,
    electeurs: ["a", "g", "h", "y", "u", "i", "o"]
},
{
    cin: "cv98754",
    nom: "berada",
    prenom: "yahya",
    partiPolitique: "rni",
    age: 21,
    electeurs: ["a", "g", "h", "y", "u", "i", "o"]
},
{
    cin: "jk10245",
    nom: "koubihi",
    prenom: "wiam",
    partiPolitique: "rni",
    age: 21,
    electeurs: ["a", "g", "h", "y", "u", "i", "o"]
},
{
    cin: "kl54788",
    nom: "Bokayo",
    prenom: "saka",
    partiPolitique: "independant",
    age: 60,
    electeurs: ["o", "l"]
}];

//------------------------//Homepage func is for user input for choice//--------------------//
//------------------------//Homepage func checks if user input is valid//----------------
//------------------------//if yes it runs a function with every case//-------------------
function HomePage() {
    let x;
    while (x !== 0) {
        console.log(`#######################################################`);
        console.log(`######--------APPLICATION D'ELECTION--------###########`);
        console.log(`#######################################################`);
        console.log(`###                                                 ###`);
        console.log(`###    1. Ajouter un nouveau candidat               ###`);
        console.log(`###    2. Ajouter plusieurs candidats à la fois     ###`);
        console.log(`###    3. Afficher la liste des candidats           ###`);
        console.log(`###    4. Voter pour un candidat                    ###`);
        console.log(`###    5. Modifier les informations d'un candidat   ###`);
        console.log(`###    6. Supprimer un candidat                     ###`);
        console.log(`###    7. Rechercher des candidats                  ###`);
        console.log(`###    8. Statistiques de l'élection                ###`);
        console.log(`###    0. Quitter                                   ###`);
        console.log(`###                                                 ###`);
        console.log(`#######################################################`);
        console.log(`#######################################################`);
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
            case 5: modifCandidat();
                break;
            case 6: deleteCandidat();
                break;
            case 7: rechercheCandidat();
                break;
            case 8: afficherStats();
                break;
        }
    }
}
HomePage();


function addCandidat() {
    let candidat = {
        cin: "",
        nom: "",
        prenom: "",
        partiPolitique: ""
        , age: 0,
        electeurs: []
    }
    candidat.cin = prompt("----> entrer le cin du candidat : ").toLowerCase();
    for (i = 0; i < candidats.length; i++) {
        if (candidat.cin == candidats[i].cin) {
            console.log(` -----Cette CIN est déja utilisé------ `)
            return;
        }
    };

    candidat.nom = prompt("----> entrer le nom du candidat : ").toLowerCase();
    candidat.prenom = prompt("----> entrer le prenom du candidat : ").toLowerCase();
    candidat.partiPolitique = prompt("----> entrer le parti politique du candidat : ").toLowerCase();
    if (candidat.partiPolitique == " " || candidat.partiPolitique == "") {
        candidat.partiPolitique = "independant";
    }
    candidat.age = +prompt("----> entrer l'age du candidat : ");
    if (candidat.age < 18) {
        console.log(`----- vous n'avez pas le droit de voter ou d'etre candidat -----`);
        return;
    }
    else if (candidat.age == 0 || candidat.age == null) {
        console.log(`---- l'age est invalide -----`);
        return;
    }
    if (candidat.cin == "" || candidat.nom == "" || candidat.prenom == "") {
        console.log("invalid input, le candidat n'est pas inscrit")
    } else {
        candidats.push(candidat);
        console.log(`|------------------------------------------------------------|`);
        console.log(`|-----------------le candidat est inscrit--------------------|`);
        console.log(`|------------------------------------------------------------|`);
    }
}
function addCandidats() {
    let N = +prompt("entrer le nombre de candidats à ajouter : ");
    for (let i = 0; i < N; i++) {
        let candidat = {
            cin: "",
            nom: "",
            prenom: "",
            partiPolitique: "",
            age: 0,
            electeurs: [],
        }
        console.log(`------candidat n° ${i + 1} ------`)
        candidat.cin = prompt(`-----> entrer le cin du candidat ${i + 1} : `).toLowerCase();
        for (j = 0; j < candidats.length; j++) {
            if (candidat.cin == candidats[j].cin) {
                console.log(` -----Cette CIN est déja utilisé------ `)
                return;
            }
        };
        candidat.nom = prompt(`-----> entrer le nom du candidat ${i + 1} : `).toLowerCase();
        candidat.prenom = prompt(`-----> entrer le prenom du candidat ${i + 1} : `).toLowerCase();
        candidat.partiPolitique = prompt(`-----> entrer le parti politique du candidat ${i + 1} : `).toLowerCase();
        if (candidat.partiPolitique == " " || candidat.partiPolitique == "") {
            candidat.partiPolitique = "independant";
        }
        candidat.age = +prompt(`-----> entrer l'age du candidat ${i + 1} :`);
        if (candidat.age < 18) {
            console.log(`----- vous n'avez pas le droit de voter ou d'etre candidat -----`);
            return;
        }
        console.log(`***   le candidat ${i + 1} a été ajouté avec succès !   ***`);
        console.log(`---------------------------------------------`);
        if (candidat.cin == "" || candidat.lname == "" || candidat.fname == "") {
            console.log(`|---------------------------------------------------------------|`);
            console.log(`|-----invalid input, le candidat ${i + 1} n'est pas inscrit-----|`);
            console.log(`|---------------------------------------------------------------|`);
            continue;
        } else candidats.push(candidat);

    }

}
function afficheListe() {
    let n
    console.log(`############################################`)
    console.log(`-----------LISTE DES CANDIDATS-----------`)
    console.log(`############################################`)
    console.log(`1. Liste triée par ordre décroissant`)
    console.log(`2. Filtrer par parti politique`)
    console.log(`3. Quitter au menu principale`)
    console.log(`############################################`)
    n = +prompt(`entrer votre choix :`)
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
        let parti = prompt(`entrer la parti désigné :`);
        let tabtrie = [];
        for (i = 0; i < candidats.length; i++) {
            if (candidats[i].partiPolitique.toLowerCase() === parti.toLowerCase()) {
                tabtrie.push(candidats[i])
            }

        }
        console.table(tabtrie);
    }
    else HomePage();
}
function voteCandidat() {
    let candidat = {
        cin: "",
        lname: "",
        fname: "",
        partiPolitique: "",
        age: 0,
        electeurs: []
    }
    let y = prompt(`-----saisis ton CIN :-----`);
    if (!y) return;
    let cinexiste = false;
    for (i = 0; i < candidats.length; i++) {
        for (let j = 0; j < candidats[i].electeurs.length; j++) {
            if (y.toLowerCase() == candidats[i].electeurs[j]) {
                cinexiste = true;
                break;
            }
        }
        if (cinexiste) break;
    }
    if (cinexiste) {
        console.log(`Vous avez deja voté pour le candidat ayant comme cin : ${candidats[i].cin}`)
        return;
    }
    let ccin = prompt(`entrer le cin du candidat : `);
    if (!ccin) return;
    let candidatexiste = false;
    for (let i = 0; i < candidats.length; i++) {
        if (ccin == candidats[i].cin) {
            candidatexiste = true;
            candidats[i].electeurs.push(y);
            console.log(`Votre vote a été enregistré avec succés .`);
            break;
        }
    }
    if (!candidatexiste) {
        console.log(`le candidat ayant ce cin : ${ccin} n'existe pas .`);
    }
}
function modifCandidat() {
    let m;
    console.log(`############################################`)
    console.log(`--- Modifier les informations d'un candidat :---`)
    console.log(`############################################`)
    console.log(`---->  1. Modifier le parti politique d'un candidat`)
    console.log(`---->  2.Modifier l'âge d'un candidat.`)
    console.log(`---->  3. Quitter au menu principale`)
    console.log(`############################################`)
    m = +prompt(`entrer un valeur pour choisir :`)
    if (m <= 3 && m >= 1) {
        let cin = prompt(`entrer le CIN du candidat que vous voulez modifier ses informations: `);
        switch (m) {
            case 1: for (i = 0; i < candidats.length; i++) {
                if (cin == candidats[i].cin) {
                    candidats[i].partiPolitique = prompt(`entrer une parti politique: `).toLowerCase();
                    console.log(`la parti politique du candidat ayant comme cin ${cin} est modifiée`)
                }
            }
                break;
            case 2: for (i = 0; i < candidats.length; i++) {
                if (cin == candidats[i].cin) {
                    candidats[i].age = +prompt(`entrer le nouvaue age: `);
                    console.log(`l'age du candidat ayant comme cin ${cin} est modifiée `)

                }
            }
                break;
        }
    }
    else console.log(`------Choix invalide-----`) ;

}
function deleteCandidat() {
    let cin = prompt(`-----> enter le cin du candidat à supprimer : `)
    let existe = false;
    for (let i = 0; i < candidats.length; i++) {
        if (cin == candidats[i].cin) {
            candidats.splice(i, 1);
            console.log(`----le candidat ayant comme cin ${cin} a été supprimé----`);
            existe = true;
            break;
        }
    }
    if (existe == false) {
        console.log(`le candidat ayant comme cin ${cin} n'existe pas`) ;
    }
}
function rechercheCandidat() {
    let existe = false;
    let index ;
    let nom = prompt(`entrer le nom du candidat à rechercher :`);
    for (let i = 0; i < candidats.length; i++) {
        if (nom.toLowerCase() == candidats[i].nom.toLowerCase()) {
            console.table([candidats[i]]);
            existe = true;
            index=i ;
            break;
        }
    }
    if (existe == false) {
        console.log(`le candidat ayant le nom ${nom} n'existe pas .`)
    }
   /*else {
        console.log(`---> Le candidat souhaité : }`);
        console.log(`---> nom : ${candidats[index].nom}`);
        console.log(`---> prenom : ${candidats[index].prenom}`);            // Pour afficher la recherche comme ca ...
        console.log(`---> CIN : ${candidats[index].cin}`);
        console.log(`---> parti politique : ${candidats[index].partiPolitique}`);

    }*/
}

function afficherStats() {
    let n = 0;
    do {
        console.log(`############################################`);
        console.log(`---------Statistiques d'élections-----------`);
        console.log(`############################################`);
        console.log(`1. Afficher le nombre total de candidats.`);
        console.log(`2. Afficher le nombre total de votes exprimés.`);
        console.log(`3. Afficher le Top 3 des candidats ayant le plus de votes.`);
        console.log(`4. Afficher le nombre de candidat par parti politique.`);
        console.log(`############################################`);
        console.log(`############################################`);
        let n = +prompt(`---> veuiller entrer un choix : `);
        switch (n) {
            case 1: totalCandiats();
                break;
            case 2: totalVotes();
                break;
            case 3: top3Candidats();
                break;
            case 4: candidatParParti2();
                break;
            default: console.log(`------Choix invalid------`);
        }
    } while (n !== 0);
}
function totalCandiats() {
    let total = 0;
    for (i = 0; i < candidats.length; i++) {
        total++;
    };
    console.log(`|-------------------------------------------------------`);
    console.log(`|----le nombre total des candidats est : ${total}------`);
    console.log(`|-------------------------------------------------------`);
}
function totalVotes() {
    let totalvote = 0;
    for (i = 0; i < candidats.length; i++) {
        for (j = 0; j < candidats[i].electeurs.length; j++) {
            totalvote++;
        }
    }
    console.log(`|-------------------------------------------------------`);
    console.log(`|----le nombre total des votes est : ${totalvote}------`);
    console.log(`|-------------------------------------------------------`);
}
function top3Candidats() {
    let top = [];
    let temp;
    for (let i = 0; i < candidats.length - 1; i++) {
        for (let j = 0; j < candidats.length - 1 - i; j++) {
            if (candidats[j].electeurs.length < candidats[j + 1].electeurs.length) {
                temp = candidats[j];
                candidats[j] = candidats[j + 1];
                candidats[j + 1] = temp;
            }
        }
    }
    top = candidats.slice(0, 3);
    console.table(top);
};
function candidatParParti() {
    let tab = [];
    for (i = 0; i < candidats.length; i++) {
        let parti = candidats[i].partiPolitique;
        if (tab[parti]) {           // condition qui vérifie si parti existe dans tab si oui elle incrémente 
            tab[parti] += 1; 
        }
        else tab[parti] = 1;        // si non il initialize le premier candidat pour cette nouvelle parti ajoutéé
    }
    console.table(tab);
}
         
                          // Fonctionalitées additionelles ......

function candidatParParti2() {
    let nbr = 0;
    let n = prompt(`---->entrer la parti politique pour voire le nombre de candidats : `).toLowerCase();
    for (i = 0; i < candidats.length; i++) {
        if (n == candidats[i].partiPolitique.toLowerCase()) {
            nbr++;
        }
    }
    console.log(`|------------------------------------------------------------------|`);
    console.log(`|------le nombre total des votes du parti "${n}" est : ${nbr}------|`);
    console.log(`|------------------------------------------------------------------|`);
}
function votesParParti() {
    let total = 0;
    let n = prompt(`---->entrer la parti politique pour voire le nombre de votes : `).toLowerCase();
    for (i = 0; i < candidats.length; i++) {
        if (n == candidats[i].partiPolitique.toLowerCase()) {
            total += candidats[i].electeurs.length;
        }
    }
    console.log(`|------------------------------------------------------------------|`);
    console.log(`|----le nombre total des votes du parti "${n}" est : ${total}------|`);
    console.log(`|------------------------------------------------------------------|`);
};