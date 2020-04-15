// tao array person
var persons = [
    {name: "Viet",age:22,weight:71},
    {name: "Minh",age:23,weight:85},
    {name: "Tan",age:21,weight:50}
]

// hien thi tt person
function display(persons){
    persons.map(function(obj){
        console.log("Ten:" + obj.name + ", Tuoi:" + obj.age + ", can nang:" + obj.weight +"kg");
    });
};

display(persons);
// // them person vao cuoi bang
persons.push({name: "Nguyen",age:18,weight:45});
display(persons);

// // them person vao dau mang
persons.unshift({name: "Kim",age:21,weight:56});
display(persons);

// // lay person dau mang
console.log(persons.shift());
display(persons);

// // lay person cuoi mang
console.log(persons.pop({name: "Luan",age:22,weight:50.6}));
display(persons);

// // lay list person co can nang > 50kg
display(persons.filter(function (obj){
    if(obj.weight>50) return true;
}))

// tinh can nang trung binh cua toan bo person
var weight = persons.reduce(function(a,b){
    return a + b.weight;
},0)/persons.length;
console.log("Can nang trung binh: ",weight);

// su dung FilTer de in ra tt person
const FilTer = persons.filter(function(person){
    return person;
});
console.log(FilTer);

// su dung for loop de in ra tt person
for(let obj of persons)
{
    console.log(obj);
}

// destructuring, forEach, arrow function
function displayarrow({name,age})
{
    console.log(name + ":" + age);
}
persons.forEach(obj => displayarrow(obj));