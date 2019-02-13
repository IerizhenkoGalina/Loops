const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both loops have the number: ' + yourArray[j])
    }
  }
};
//Prints: Both loops have the number: 19

const bobsFollowers = ['Den', 'Ken', 'Nick', 'Mark'];
const tinasFollowers = ['Den', 'Ken', 'Bill'];
const mutualFollowers = ['Den', 'Ken'];
for (let i=0; i<bobsFollowers.length; i++) {
  for (let j=0; j<tinasFollowers.length; j++) {
    
    if (bobsFollowers[i]===tinasFollowers[j]) {
      console.log(tinasFollowers[j]);
    }
  }
};
//Prints:
/*
Den
Ken
*/

const animals=[9,7,8,20,30,50,80];//7,8
const foods=[6,7,8,21,35,60,90,100];//7,8
for(i=0; i<animals.length; i++)
  { for(a=0; a<foods.length; a++)
    {
      if(animals[i]===foods[a])
        {
          console.log('Both number: '+ foods[a])
        }
    }
    
  };
  //Prints:
  /*
  Both number: 7
  Both number: 8
  */
