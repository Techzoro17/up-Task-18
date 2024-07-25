// Question 1

// const num =[1,2,3,4,5,6,7,8,9,10]
// num.map((data)=>{   console.log(data*data) })

//Question 2

// const Evaluate =(num)=>{
//     return num >=90?'A':
//             num>=80?'B':
//             num>=70?'C':
//             num>=60?'D':'F'
// }
// const grade = Evaluate(79);
// console.log(grade)

//Question 3 

// var Cardetail ={
//     name:"Kia",
//     Model:"Carrens",
//     year:"2022"
// }

// const Changeyear =(newyear)=>{
//     Cardetail ={...Cardetail,year:newyear}
// }

// Changeyear(2023);

// const{Model,year}=Cardetail;
// console.log(Model)
// console.log(year)

//Question 4

// const  data = [1,2,3,4,5,6,7,8,9,10,11];

// const isPrime=(number)=>{
//     if(number<=1)
//         return false;
//     for(let i=2;i<=Math.sqrt(number);i++)
//     {
//         if(number % i===0)
//             return false
//     }
//     return true
// }
// const prime= data.filter(num=>isPrime(num))
// console.log(prime)

// Question 5

// const data =[1,2,3,4,5,6,7,8,9];

// //Map used to map the data  instead of for loop

// console.log("Below the example of map")
// data.map((num)=>console.log(num))

// //Filter used to filter the data in react

// console.log("Use case of Filter function")

// const filtered =data.filter((num)=>num>=5);
// console.log(filtered)

// console.log("Use case of Reduce function")
// const total = data.reduce((num,sum)=>num)
// console.log(total);


//Question 6 


// const fetching =async()=>{
//     const data = await fetch('https://jsonplaceholder.typicode.com/todos/1').then((res)=>res.json())
//     console.log(data)
// }
// fetching();

//Question 7

// const person = {
//     name: 'Abdul Askar S',
//     address: {
//       street: '20/17 Manivilan',
//       city: 'Pudkottai',
//       zipCode: '614616'
//     },
//     contact: {
//       email: 'abdulaskar45@gmail.com',
//       phone: '9876543210'
//     }
//   };

//   const phonenumber = person.contact?.phone
//   console.log(phonenumber)



