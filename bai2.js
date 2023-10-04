// console.log("Hello world");

// var print =(callback) =>{
//     console.log ("start print");
//     setTimeout (() => {
//         console.log ("count done!");
//         callback();
//     }, 1000);
// }

// var callbackFunction = () => {
//     console.log("End"); 
// }
// console.log("Start");
// print( callbackFunction);
// console.log("End");


// var a =5 ;

// var print = () =>{
//     console.log(a);
//     var b = 3;
//     console.log (b);

// }
// print ();
//  console.log(a);
//  console.log(b);

// var countDown = (time) => {
//     for (let i = time ; i>= 0; i--){
//         setTimeout (()=>{;
//             console.log(i)
//         }, (time-i)*1000);
//     }
// }
// countDown(5);
//+ đếm ngược 

var a = 6 ;

var changeA = () =>{
    a=7 ;
    console.log (a);
};
console.log (a);
changeA();
console.log(a);



