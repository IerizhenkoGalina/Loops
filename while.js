let i=0;
while(i<5){
i++; //увеличиваем i на единицу при каждом прохождении цикла
console.log(i);
};
//Prints:
/*
1
2
3
4
5
*/
let k=0;
while(k<10){
  k+=2; //выводим столбец четных чисел от 0 до 10
  console.log(k);
};
//Prints:
/*
2
4
6
8
10
*/

let a=1;
let sum=0;
while(a<=100){
  sum+=a;//cумма чисел
  a++;
}
console.log(sum);
//Prints: 5050

let n=1000;
let number=0;
while(n>50){
  number++;
  n/=2;
}
console.log(n); //результат деления меньше 50
console.log(number);// количество итераций(проход цикла)
//Prints:
/*
31.25 
5
*/
