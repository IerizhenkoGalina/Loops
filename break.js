const rapperArray = ["Lil", "Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let rapperArrayIndex = 0;
     rapperArrayIndex<rapperArray.length; rapperArrayIndex++){
 if (rapperArray[rapperArrayIndex]==="Notorious B.I.G."){
   break;
}
    console.log("Notorious B.I.G.");
 }; 

  console.log("And if you don't know, now you know.");
  //Prints:
  /*
  Notorious B.I.G.
  Notorious B.I.G.
  Notorious B.I.G.
  And if you don't know, now you know.
  */
