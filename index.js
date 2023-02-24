// console.log("Hello, Good Afternoon! Here is my today's task on String and Date methods")
// console.log("\n")
// // Giving data of users
//  user = [
//     {'firstname': 'Alex','age': '15','salary': 10000},
//     {'firstname': 'John','age': '25','salary': 20000},
//     {'firstname': 'Urmi','age': '13','salary': 30000},
//     {'firstname': 'Redex','age': '18','salary': 40000},
//     {'firstname': 'Ali','age': '20','salary': 50000} 
// ]
// console.log(user)
// console.log("\n")


// // Print user data
// console.log("Print user data using loop----------------------------------------") 

// for(let i=0;i<=user.length-1;i++){
//     let newstr = `Hii, my name is ${user[i].firstname}, i'am ${user[i].age} year old and my salary is ₹${user[i].salary}`
//     console.log((i+1)+" "+newstr)
// }
// console.log("\n")



// // Calculation of total salary using loop
// console.log("Calculation of total salary using loop----------------------------")

// sum = 0;
// for (var i = 0; i < user.length; i++) {
//   sum += user[i].salary;
// }
// console.log("Total salary is " +sum);   //Output: Total salary is 15000
// console.log("\n")



// // Calculation of total salary using reduce method
// console.log("Calculation of total salary using reduce method---------------------")

// let add = user.map((curr) => curr.salary).reduce((first, second) => first + second);
// console.log(add);   //Output: 15000
// console.log("\n")




// let todaysDate = new Date()
// let string =  `Today's date is ${todaysDate.getDate()}.${todaysDate.getMonth()}.${todaysDate.getFullYear()} & time is ${todaysDate.getHours()}:${todaysDate.getMinutes()}:${todaysDate.getSeconds()} ${todaysDate.getHours()>=12?"Am":"Pm"}`
// console.log(string)



//Task 5 --- calculate the occurance of each characters

// const newString ="today is the friday"
// const count ={}
// for(let i=0;i<newString.length;i++){
//     const ch = newString[i]
//     if(!count[ch]){
//         count[ch]=0
//     }
//     count[ch]++
// }
// console.log(count)



//Task 6 --- calculate the occurance of each characters
const str ="Dwarkapuri Indore"
// function maxChar(str){
    let freqcount ={}
    let nwstr = str.toLowerCase()

    for(let char of nwstr){
        freqcount[char] = freqcount[char]+1 || 1
    }

    let maxCount =0
    let maxChar = null
    for(let key in freqcount){
        if(freqcount[key]>maxCount){
            maxCount = freqcount[key]
            maxChar=key
        }
    }
    console.log(maxChar)
    // return maxChar
// }
// console.log(maxChar("Dwarkapuri indore"))

const result = str.replaceAll(maxChar, "z")
console.log(result)