const obj1 = { name: "person1", age: 5};
const keys1 = Object.keys(obj1);
console.log(keys1);

const obj2 = { age:5, name:"person1"};
const keys2 = Object.keys(obj2);
console.log(keys2);

if (JSON.stringify(keys1) === JSON.stringify(keys2)){
    console.log("Equal");
}
else{
    console.log("Not equal");
}