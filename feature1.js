let prompt=require('prompt-sync')()
let candidats = [{}];
let candidat = {cin:"",lname:"",fname:"",partiPolitique:"",age:0,electeurs:[]};
function addCandidat(cin,lname,fname,partiPolitique,age,electeurs) {
   candidat.cin=prompt("entrer le cin du candidat : ");
   candidat.lname=prompt("entrer le nom du candidat : ");
   candidat.fname=prompt("entrer le prenom du candidat : ");
   candidat.partiPolitique=prompt("entrer le parti politique du candidat : ");
   candidat.age=prompt("entrer l'age du candidat : ");
   candidats.push(candidat);
   return candidat;
}
console.log(addCandidat());