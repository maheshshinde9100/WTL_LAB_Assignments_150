// const myfun = (a,b)=>{
//     return a+b;
// }
// console.log(myfun(10,20));

// callback function :> function passed as a argument to another function
// setTimeout(()=>{},);



// Array object
// 3 ways to create array

// let arr = Array.from("mahesh")   // [ 'm', 'a', 'h', 'e', 's', 'h' ]
let arr = Array.of(10,20,30,40,100,200,300);
arr.push(40)  //add the element at last
arr.pop()  //add the element at last
arr.shift()  // removes the element from start
arr.unshift()  // adds the element at start

let newArr = arr.map((x)=> x*x) //map() function returns new Array the original array remain as it is
console.log("map() -> "+newArr) //print new Array of squares

let array = arr.filter((x)=>{  //filter() function selects and return new Array consist of returned elements
    if(x<=40){
        return x;
    }
});
// let array = arr.filter((x)=> {if(x<=40) return x});   //another way to create filtered array 
console.log("Filter() -> "+array) //printing filtered array




// Object :> consist of key-value pairs
// declaration:> ex., let obj = {}

let obj = {name:"uday",roll:146}  //contains key-value pairs
obj.prn = "0124UCSM2004"   //adding new key-value in object
obj.address = {city:"yeola",pincode:423402}
console.log(obj)

//iterating over object :> printing keys & values
console.log("Printing Keys and values using for loop :> ")
for(let key in obj){
    console.log(key)        //printing keys
    console.log(obj[key])   //printing values
}

console.log(obj.prn)  //printing value using obj.key
console.log(obj["prn"])  //printing value using obj.key

// ### Array of Objects
console.log("\n### Array of OBJECT :> ")
let objectArray = []
objectArray.push(
    {name:"abc",roll:150,marks:92,present:false},     //Array contains objects
);
objectArray.push( {name:"uday",roll:145,marks:90,present:false})
objectArray.push( {name:"parth",roll:146,marks:80,present:true})
objectArray.push({name:"abc",roll:111,marks:30,present:true})
console.log(objectArray) 

console.log("Iterating over the Array of Object :> ")
for(let i=0;i<objectArray.length;i++){
     let object1 = objectArray[i]
     console.log("\nstudent no :> "+i)
     for(let key in object1){
        console.log(key+" => "+object1[key])
     }
}

console.log("\n###Printing only passed student (marks >40)")
let filteredArr = objectArray.filter(
    (x)=>{
        for(let key in x){
            if(key=="marks"){
                if(x[key]>40){
                    console.log(x)
                }
            }
        }
    }
)
console.log("\n###Printing count of Present students)")
let count = 0;
let filtered123 = objectArray.filter(
    (x)=>{
        for(let key in x){
            if(key=="present"){
                if(x[key]==true){
                    console.log(x)   //printing object of students who present
                    count++;
                }
            }
        }
    }
)
console.log("Present students :> "+count)  
