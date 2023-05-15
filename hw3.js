//1. Task #1
let hamburgers2 = 4; 
let fries3 = 1;

if(hamburgers2 >= 4 && fries3 >= 1){
    console.log('ми поїли')
} else {
    console.log('Ми йдемо в інше кафе')
}

//2. Task #2

let price = 500;

if(price >= 1000 && price <= 1900){
    console.log(price)
} 

//3. Task #3

let price1 = 1200; 

if(!(price1 >= 1000 && price1 <= 1900)){
    console.log(price1 + ' is not beetween 1000 and 1900')
} else {
    console.log(price1 + ' is between 1000 and 1900')
}

let price2 = 200;

if(price2 < 1000 || price2 >= 1900){
    console.log(price2)
}

//4. Task #4


let season = 4; 

if(season == 1){
    console.log('winter')
} else if(season == 2){
    console.log('spring')
} else if(season == 3){
    console.log('summer')
} else if(season == 4){
    console.log('autumn')
}

//5. Task #5

let a = 60;
let b = 70;
let c = 30;

if(a > b && b > c) {
    console.log(b) 
} else if (a < b && a > c){
    console.log(a)
} else if (c < a && c > b){
    console.log(c)
}

//6. Task #6


let numWeek = 3;

switch(numWeek){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;  
    case 7:
        console.log('Sunday');
        break;  
    default:
        console.log('This is default output');
        break;
}

//7. Task #7



let action = '-';

switch(action){
    case '+':
        console.log(20 + 30);
        break;
    case '-':
        console.log(100 - 30);
        break;
    case '*':
        console.log(20 * 30);
        break;
    case '/':
        console.log(100 / 4);
        break;
    default:
        console.log('This is default output');
        break;
}


//8. Task #8

let someText1 = "Hello world!";

console.log(someText1.replace(/[aeiou]/gi,''));



//9. Task #9
function convertToKilometers(meters) {
  const kilometers = meters / 1000;
  let result;
  
  if (meters % 1000 === 0) {
    result = `${meters} метрів це ${kilometers} кілометрів`;
  } else if (meters % 10 === 1 && meters % 100 !== 11) {
    result = `${meters} метр це ${kilometers.toFixed(3)} кілометра`;
  } else if ([2, 3, 4].includes(meters % 10) && ![12, 13, 14].includes(meters % 100)) {
    result = `${meters} метри це ${kilometers.toFixed(3)} кілометра`;
  } else {
    result = `${meters} метрів це ${kilometers.toFixed(3)} кілометрів`;
  }
  
  console.log(result);
}

convertToKilometers(1000)