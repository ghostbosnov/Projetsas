let prompt=require('prompt-sync')()
let candidats = [];
let candidat = {cin:"",lname:"",fname:"",partiPolitique:"",age:0,electeurs:[]};
function addCandidats(cin,lname,fname,partiPolitique,age,electeurs) {
    let N=+prompt("entrer le nombre de candidats à ajouter : ");
    for(let i=0;i<N;i++){
   candidat.cin=prompt(`entrer le cin du candidat ${i+1} :` );
   candidat.lname=prompt(`entrer le nom du candidat ${i+1} :` );
   candidat.fname=prompt(`entrer le prenom du candidat ${i+1} :` );
   candidat.partiPolitique=prompt(`entrer le parti politique du candidat ${i+1} :` );
   candidat.age=prompt(`entrer l'age du candidat ${i+1} :` );
   console.log(`le candidat ${i+1} a été ajouté avec succès !`);
   console.log(`---------------------------------------------`);
   candidats.push(candidat);
    }
} 
console.log(addCandidats());
console.log(candidats);