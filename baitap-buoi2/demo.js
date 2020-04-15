
// display info
console.log('test log js');
console.error('test error');
console.warn('test warning');

// 
function sum(n1, n2){    
    console.log(n1  +  n2);
}
sum(3,4);
const getSum=(n1, n2)=>{
    return  n1  +  n2;
};
console.log(getSum(5,6));
var greeting ={    
    name:'UDCK',
    handleMessage = (message) =>
    {        
        console.log("Hi, ",this.name)
    }
}
handleMessage()

// var/ let / const
let mark = 10;
console.log(mark);
mark = 5;
console.log(mark);
const score = 10;
console.log(score);
// function with var/ let/ const
function test(){
    var test1 = "testvar";
    let test2 = "testlet";
    console.log(test1,test2);
    {
        let test3 = "testlet 2";
        console.log(test3);
    }
    console.log(test3); //loi do let ko the ra ngoai cap {}
}
test();
// vong lap for
var funcs = ["bbb","ccc","ddd"];
for (var i = 0; i < 3; i++){
    funcs[i] = function(){
        console.log("string: " +i);
    }
}
for (var j = 0; i < 3; j++){
    funcs[j]();
}
// Hoisting
function run(){
    console.log(z); //error
    var z = "xxx";
    console.log(z); //print xxx
}
run();
function checkHoisting(){
    console.log(z);
    let z = "xxx";
    console.log(x);
}
checkHoisting();
// global object property
var a = "aaa";
let b = "bbb";
console.log(window.a);
console.log(window.b);

// datatype
const name = "Viet";
const age = 22;
const score = 7.1;
const isCool = true;
const test = null;
const check = undefined;
console.log(typeof isCool);
console.log(typeof score);

// string operations
const name = "viet";
const age = 22;
console.log('Name: ' + name + ", age: " + age);
const greeting = `Name: ${name}, age: ${age}`;
console.log(greeting);
console.log(name.length);
console.log(name.toUpperCase()); //viet hoa het
console.log(name.toLowerCase()); //viet thuong het
console.log(name.substring(1,2)); 
console.log(name.split(''));
const languages ='java, c++, pascal, python';
console.log(languages.split(', '));

// array
const numbers =newArray(0,1,2,3,4,5,6,7,8,9);
console.log(numbers);
console.log(Array.isArray(numbers));
const languages =['java','c++','pascal','python'];
console.log(languages);
console.log(languages.indexof('pascal'));
languages =['java','c++'];
const[j,c]= languages;
console.log(j);
console.log(c);
const[a,...b]=[1,2,3];
console.log(a);
console.log(b);

// object
const user ={
    name:'viet',
    age:22,
    hobbies:['shopping','study','travel'],
    address:{
        street:'nguyen van linh',
        city:'Kontum',
        country:'Vietnam'
    }
}
console.log(user);
const{
    name,
    age,
    address:{        
        city
    }
}= user;
console.log(name, age, city);
user.email ='viet@gmail.com';
console.log(user);
// or
user ={...user, email:'viet@gmail.com'}
function displayInfo({name, age}){
    console.log(name, age);
}
displayInfo(user);

// json
const projects =[
    {        
        id:1,        
        title:'Web dev',        
        isFinished:true
    },
    {        
        id:2,        
        title:'last one',        
        isFinished:false
    },
    {        
        id:3,
        title:'third',        
        isFinished:true
    }
];
console.log(typeof projects);
console.log(projects);
const projectsJSON = JSON.stringify(projects);
console.log(projectsJSON);
console.log(JSON.parse(projectsJSON));
// for,while
for(let i =0; i < projects.length; i++){    
    console.log(projects[i].title);
}
for(let project of projects){
        console.log(project.title);
}
// forEach, map, 
filterprojects.forEach(function(project){
        console.log(project.title);
});
const titleList = projects.map(function(project){
    return project.title;
});
console.log(titleList);
const finishedList = projects.filter(function(project){
    return project.isFinished == true;
});
console.log(finishedList);
const finishedList = projects
    .filter(function(project){
        return project.isFinished ==true;
    })
    .map(function(project){
        return project.title;
});
console.log(finishedList);

// conditionals
const score =9;
if(score ==10){    
    console.log('score is 10');
} else{    
    console.log('score is not 10')
}
    // elseif,  >,  <,  ||,  &&
const msg = score >10?'pass':'fail';
console.log(msg);
switch(msg){
    case'pass':        
        console.log('You are passed');
    break;
    case'fail':        
        console.log('You are failed');
    default:
        break;
};

// OOP
function Person(firstName, lastName, dob){
    this.firstName  =  firstName;
    this.lastName  =  lastName;
    this.dob  =  dob;
    
    this.getDateOfBirth = function(){
        returnthis.dob;
    }
};
Person.prototype.getFullName = function(){
    return`${this.firstName}${this.lastName}`;
}
const p1 =newPerson("nguyen","viet","7-5-1998");
console.log(p1);
