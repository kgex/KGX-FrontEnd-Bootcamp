// Call back


// get all orders
// order food 
// payment of food 
// deliver message  



function getAllOrders(orderFood){
    // api call api : /getAllorders // JSON // display 
    console.log("displayed all orders")
    //return all orders 
    orderFood("orders",Orderpayment)
}

function orderFood(orders,Orderpayment){
    // api : /orders // one single order
    console.log("Selected one order")
    Orderpayment("order",message)
    // return order  
}

function Orderpayment(order,message){
    // api : /orderpayment // JSON // payment message 
    console.log("Order payment message")
    // return paymentMessage 
    message("paymentMessage")

}

function message(paymentMessage){
    console.log("Display")
}

getAllOrders(orderFood)
// download(url1, function (url) {
//     console.log(`Processing ${url}`);
//     download(url2, function (url) {
//       console.log(`Processing ${url}`);
//       download(url3, function (url) {
//         console.log(`Proces msing ${url}`);
//       });
//     });
//   });





// function sum(num,callback){
//     num = callback(num)
//     return num 
// }

// function callback(num){
//     return num + num
// }

// console.log(sum(2,callback))














// console.log("Hello world")


// Map 

// const cars = new Map([
//     ["car 1" , "BMW"],
//     ["car 2" , "Benz"],
//     ["car 3" , "Audi"],
// ])

// console.log(cars.get("car 1"))
// Array 

// const cars = ["Saab", "Volvo", "BMW","safari","audi"];

// const nums = [1,2,4,3,5]
// // map 
// const mappedCar =  cars.map((car,i)=>{
//     // console.log(car,i)
//     return car
// })

// console.log("map", mappedCar)

// const sum = nums.reduce((previous,current)=>{
//     return previous + current
// })
// console.log("reduce",sum)
// const even = nums.filter((num,item)=>{
//     // console.log(num,item)
//     return num % 2 ==0
// })
// console.log("filter",even)


// cars[1] = "Bence"

// console.log(cars.includes("BsMW"))



// cars.forEach(print)

// function print(item){
//     console.log(item)
// }

// for(let i of cars){
//     console.log(i)
// }

// console.log(cars.slice(1,2))

// console.log(cars.splice(1,2,"benz"))

// console.log(cars)

// cars.push("DD")

// cars.pop()
// console.log(cars)


// string 

// var s = " elon musk "
// console.log(s.trim())

// console.log(s.padStart(12,"D"))
// console.log(s)



// const persons = [
//     {
//     name : "john",
//     age : 5,
//     },
//     {
//     name : "john2 ",
//     age : 5,
//     },
//     {
//     name : "john3",
//     age : 5,
//     }

// ]

// console.log(persons[0].name)


// function 
const users = () =>{
    console.log("i am users func")
}
// users()



const func = () =>{
    console.log("i am called")
    // console.log(s)   
    // console.log(g)
    // let s = "string"
    // var s = "somthing"

    // let m = 3;
    // m = 4;
    // console.log(s)
    // n = 4 
    // console.log(n)

    // const d;
    // d = 4;

    // for(let i = 0; i < 5;i++){

    // }
    // console.log(i)
}
// func()
// console.log(s)



// const div = document.getElementById("container")
// console.log(div)