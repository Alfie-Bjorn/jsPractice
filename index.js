const prompt = require('prompt-sync') (); 

//-----------------------------------------------------------------------------------//



// inch into cm

// // const centimeters = 2.53; 
// // const inches = prompt('Enter inches: ');

// // let output = inches * centimeters; 

// // console.log(output)


//-----------------------------------------------------------------------------------//




// cm into inch

// const centimeters = prompt('Enter centimeters: ')
// const inches = centimeters / 2.54;

// console.log(inches); 



//-----------------------------------------------------------------------------------//

// mpg calculate the users mpg 


// const gallon = 4.54; 
// const gallons= prompt('Enter litres used: '); 
// const miles = prompt('Enter miles driven: '); 

// const mpg = miles / (gallons / 4.54); 

// console.log('Miles Per Gallon = ', mpg); 

//-----------------------------------------------------------------------------------//

// number of cans of paint per 100sqr meters

// const length = prompt('Enter the length of perimeter: '); 
// const width = prompt('Enter the width of the perimeter: '); 

// const area = length * width; 

// const numOfCans = area / 100; 

// console.log('The number of pain cans needed to pain this wall = ', numOfCans);

//-----------------------------------------------------------------------------------//

// convert celcius to farenhiet with user input

// const celcius = prompt('What is the temperature in celcius: '); 

// const farenheit = (9/5) * celcius + 32; 

// console.log('Temperature in Farenhiet =', farenheit); 

//-----------------------------------------------------------------------------------//

// ticket program- 3 types of ticket child, adult and senior calculate the cost based on the number of each ticket needed

// const child = 5; 
// const adult = 10; 
// const senior = 8; 

// const input0 = prompt(' How many child tickets do you want: '); 
// const input1 = prompt(' How many adult tickets do you want: '); 
// const input2 = prompt(' How many senior tickets do you want: ');

// const cost = ((child * input0) + (adult * input1) + (senior * input2)); 

// console.log(' The total cost for this transaction is: ', cost); 

//-----------------------------------------------------------------------------------//

// Inches to centimeters using a loop- if the value is greater than 0 then calculate otherwise invalid 

const input = prompt('Enter number of inches you wish to convert: ');

while(input > 0){
    const conversion = input * 2.54; 
    console.log(conversion, 'cm'); 
    break; 
}

//-----------------------------------------------------------------------------------//