//#1
const macDack = (hamburgers, fries) => {
    if (hamburgers > 3 && fries) console.log("Ми поїли");
    else console.log("Ми йдемо в інше кафе");
  };
  
  macDack(1, 5);

//#2
  
const priceCheck = (price) => {
    if (price > 1000 && price <= 1900) console.log("Correct price");
    else console.log("Wrong price");
  };
  
  priceCheck(1500)

  //#3

  const priceCheck1 = (price) => {
    if(!(price >= 1000 && price <= 1900))
      console.log(price + ' is not beetween 1000 and 1900')
   else 
      console.log(price + ' is between 1000 and 1900')
  }
  
  priceCheck1(1500)



  
const priceCheck2 = (price) => {
    if (price < 1000 || price >= 1900) console.log(false);
    else console.log(true);
  };
  
  priceCheck2(2000);

  //#4

  const seasonPeriod = (season) => {
    if (season == 1) console.log("winter");
    else if (season == 2) console.log("spring");
    else if (season == 3) console.log("summer");
    else if (season == 4) console.log("autumn");
  };
  
  seasonPeriod(2)

  //#5
  const avarageValue = (a, b, c) => {
    if (a > b && b > c) console.log(b);
    else if (a < b && a > c) console.log(a);
    else if (c < a && c > b) console.log(c);
  };
  
  avarageValue(30,10,20)

  //#6
  const dayWeek = (numWeek) => {
    let day;
    switch (numWeek) {
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case 6:
        day = "Saturday";
        break;
      case 7:
        day = "Sunday";
        break;
      default:
        day = "This is default output";
        break;
    }
    console.log(day);
  };
  
  dayWeek(2)

  
  //#7
  const mathOperation = (action) => {
    switch (action) {
      case "+":
        console.log(20 + 30);
        break;
      case "-":
        console.log(100 - 30);
        break;
      case "*":
        console.log(20 * 30);
        break;
      case "/":
        console.log(100 / 4);
        break;
      default:
        console.log("This is default output");
        break;
    }
  };
  mathOperation("*");