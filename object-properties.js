const students = [
    {id:21, name:"Sun"},
    {id:22, name:"Moon"},
    {id:23, name:"Mars"}
]

//console.log(students);
//simply find
const output=[];
for(let i=0;i<students.length;i++){
    const element = students[i]
    const result = element.name;
    output.push(result);
}
//console.log(output)

//pondit style
const result1=students.map(function(element){
    // console.log(element);
    return element.name;
 })
 console.log(result1);


 //www pondit style 
 const names = students.map(x=>x.name);
 const ids = students.map(x=>x.id);
 console.log(names);