// 1 
function sommeDeN(n) {
   var somme = 0;
   var i = 1;

   while (i <= n) {
      somme = somme + i;
      i++;
   }

   return somme;
}

// 2
function factorielleDeN(n) {
   var resultat= 1;
   var i = 1;

   while (i <= n) {
      resultat = resultat * i;
      i++;
   }

   return resultat;
}

// 3 
function répéterChaîne(chaîne, nombre) {
   var resultat = "";
   var i = 0;

   while (i < nombre) {
      resultat = resultat + chaîne;
      i++;
   }

   return resultat;
}

// 4 
function sommeMinÀMax(minimum, maximum) {
   var somme = 0;
   var i = minimum;

   while (i < maximum) {
      somme = somme + i;
      i++;
   }

   return somme;
}

// 5
function produitMinÀMax(minimum, maximum) {
   var produit = 1;
   var i = minimum;

   while (i < maximum) {
      produit = produit * i;
      i++;
   }

   return produit;
}
