///array slice
//array splice
//array join


const nums = [1,2,3,4,5,6,7,8]
const part = nums.slice(2, 5);
const removed = nums.splice(2, 5);
console.log(part);
console.log(removed);


const together =nums.join(" , ");
console.log(together);


///break
///continue;

function doSomething(x, y = 4){

    console.log(y);
    
    }
    
     
    
    doSomething(3,2);