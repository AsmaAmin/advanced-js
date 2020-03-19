<<<<<<< HEAD
///**map */

//simple loop

const numbers = [1,2,3,4,5,5.5,6,7,8]
const output = [];
for(let i=0; i<numbers.length; i++){
    const element = numbers[i];
    const result = element*element;
    output.push(result);
}

console.log(output);

//map use 

function squre(element){
return element*element;
}
const result1=numbers.map(function(element){
   // console.log(element);
   return element*element;
})

console.log(result1)

//const squre = element =>element*element;

const result3 =numbers.map(x=>x*x);
console.log(result3);


////*** Filter */
const bigger = numbers.filter(x=>x>5);
console.log(bigger);


///reduce
//find

const search = numbers.find(x=>x==5);
console.log(search);
//foreach
=======
///map 3 parameters pass
//1. Element
//2. Index
//3. Array
>>>>>>> 5962ea5325805e65448d63283f024f8a778e146d
