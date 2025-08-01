// // const myfun = (a,b)=>{
// //     return a+b;
// // }
// // console.log(myfun(10,20));

// // callback function :> function passed as a argument to another function
// // setTimeout(()=>{},);



// // Array object
// // 3 ways to create array

// // let arr = Array.from("mahesh")   // [ 'm', 'a', 'h', 'e', 's', 'h' ]
// let arr = Array.of(10,20,30,40,100,200,300);
// arr.push(40)  //add the element at last
// arr.pop()  //add the element at last
// arr.shift()  // removes the element from start
// arr.unshift()  // adds the element at start

// let newArr = arr.map((x)=> x*x) //map() function returns new Array the original array remain as it is
// console.log("map() -> "+newArr) //print new Array of squares

// let array = arr.filter((x)=>{  //filter() function selects and return new Array consist of returned elements
//     if(x<=40){
//         return x;
//     }
// });
// // let array = arr.filter((x)=> {if(x<=40) return x});   //another way to create filtered array 
// console.log("Filter() -> "+array) //printing filtered array




// // Object :> consist of key-value pairs
// // declaration:> ex., let obj = {}

// let obj = {name:"uday",roll:146}  //contains key-value pairs
// obj.prn = "0124UCSM2004"   //adding new key-value in object
// obj.address = {city:"yeola",pincode:423402}
// console.log(obj)

// //iterating over object :> printing keys & values
// console.log("Printing Keys and values using for loop :> ")
// for(let key in obj){
//     console.log(key)        //printing keys
//     console.log(obj[key])   //printing values
// }

// console.log(obj.prn)  //printing value using obj.key
// console.log(obj["prn"])  //printing value using obj.key

// // ### Array of Objects
// console.log("\n### Array of OBJECT :> ")
// let objectArray = []
// objectArray.push(
//     {name:"abc",roll:150,marks:92,present:false},     //Array contains objects
// );
// objectArray.push( {name:"uday",roll:145,marks:90,present:false})
// objectArray.push( {name:"parth",roll:146,marks:80,present:true})
// objectArray.push({name:"abc",roll:111,marks:30,present:true})
// console.log(objectArray) 

// console.log("Iterating over the Array of Object :> ")
// for(let i=0;i<objectArray.length;i++){
//      let object1 = objectArray[i]
//      console.log("\nstudent no :> "+i)
//      for(let key in object1){
//         console.log(key+" => "+object1[key])
//      }
// }

// console.log("\n###Printing only passed student (marks >40)")
// let filteredArr = objectArray.filter(
//     (x)=>{
//         for(let key in x){
//             if(key=="marks"){
//                 if(x[key]>40){
//                     console.log(x)
//                 }
//             }
//         }
//     }
// )
// console.log("\n###Printing count of Present students)")
// let count = 0;
// let filtered123 = objectArray.filter(
//     (x)=>{
//         for(let key in x){
//             if(key=="present"){
//                 if(x[key]==true){
//                     console.log(x)   //printing object of students who present
//                     count++;
//                 }
//             }
//         }
//     }
// )
// console.log("Present students :> "+count)  




//31st JULY 2025

// Nesting of Callback -- Nested Callback
//Callback Hell -- when we are using nested callback (more complex to understand)

// console.log("1")

// function getData(x,callback1){
//     setTimeout(()=>{
//         console.log("Data received for user:"+x);
//         if(callback1){
//             callback1();
//         }
//     },4000);
// }
// getData(1,()=>{getData(2,()=>{getData(3)})});


//Promises --> It is special javascript object that represent task that will finish in the 
// future either successfully or failed.
let obj = new Promise((resolve,reject)=>{
    // these resolve and reject are functions -- we can give any name for these two functions
    console.log("function execution stated...")
    resolve("Succesfully")            // if request is successfully
    // reject("Network Error");       // if operation failed due to some reason
});
console.log(obj)

// There are 3 states for Promises 
// 1.pending      --- when successfully
// 2.fulfilled    --- intial state
// 3.rejected     --- when failed

// After Promise received data successfully (when state is fulfilled) .then() method is executed

obj.then(res => console.log("from resolve() "+res));    // if used resolve() in promise operation is successfully 
obj.catch(err => console.log("from reject() "+err));    // if used reject() in promise operation is failed  
// .catch() is used when we used reject() in promise

// practicing promises

function get1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // console.log("Function 1...")
            resolve("successfully")
        },3000);
    })
}
function get2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // console.log("Function 2...")
            reject("Network Error....")
        },3000);
    })
}
// let obj1 = get1();
// obj1.then((res)=> {
//     console.log("func1 resolve() :>  "+res)
//     get2().then(res => console.log("func2 resolve() :"+res))
// });
// obj1.catch((err)=>{
//     console.log("func1 reject() :> "+err)
//     get2().catch(err => console.log("func2 reject():"+err))
// });

// obj1 = get2();
// obj1.then(res => console.log("function 1 - resolve() :> "+res))
// obj1.catch(err => console.log("function 1 - reject() :> "+err))

/* Another way*/
get1().then((res) => {console.log("function1 resolved() : "+res);
     return get2();
    })
    .then((res) => {console.log("function2 resolved() : "+res);
     return get2();
    })