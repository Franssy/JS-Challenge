// 1. Declare two variables: firstName and lastName. 

let firstName = "kehinde"
let lastName = "Otedola"

// 2. Copy the value from firstName AND lastName to boss. i.e variable  boss should be equal to Kehinde Odetola


boss = "kehinde" + " " + "Otedola"

// 3. Show the value of boss using alert
alert(boss)



// 4. Create a variable with the name of our planet. How would you name such a variable? 

let Planet = "earth"

 
// 5. Create a variable to store the name of a current visitor to a website. How would you name that variable?

let currentUserName = "Francis"
isLoggedIn = true


// 6. create an array arr of 20 items in it

let christmasList = ['AC','light bulb','trees','flowers','cards','decorations','clothes','sofas', 'dining table','shoes','rice','tomatoes','spices','Chicken','Beef','salad cream','CatchUp','letus','sweet potatoes','carrot'];


// 7. output the items with positions in a  multiple of 5  in  array  arr  

console.log(christmasList[4])
console.log(christmasList[9])
console.log(christmasList[14])
console.log(christmasList[19])

// 8. create an dog Object with 4 properties.

let babyDoge = {
    age: 2,
    breed:"Shiba Inu",
    likesBarking:true,
    gender:"male"
}

// console.log(babyDoge)

// 9. create an array of objects of 8  different animals and output 1 of each animal's properties

let flokiDoge = {
    age: 2,
    breed:"Shib Floki",
    likesBarking:true,
    gender:"male"
}

console.log(flokiDoge.breed)


let dogeFloki = {
    age: 2,
    breed:"Boom Floki",
    likesBarking:true,
    gender:"male"
}

console.log(dogeFloki.age)


let shiba = {
    age: 2,
    breed:"Shiba Inu",
    likesBarking:true,
    gender:"male"
}

console.log(shiba.gender)


let cat = {
    age: 4,
    family:"cat",
    gender:"make",
};

console.log(cat.family)


let mice = {
    gender:"male"
}

console.log(mice.gender)


let floki = {
    age: 2,
    breed:"Shiba Inu",
    likesBarking:true,
    gender:"male"
}

console.log(floki.likesBarking)



let Bull = {
    attribute:"Aggressive",
    likesAttacking:true,
    gender:"male"
}

console.log(Bull.attribute)


let Bear = {
    attribute: "weak",
    likesAttacking:false,
}

console.log(Bear.likesAttacking)

// 10. Create a variable for ptpAmount and write a conditional statement using if and else for different cases of the PTP Amount; Have an output for any possible amount. (be creative here for the possible scenarios of PTP). 

let ptpAmount = 20000

if (ptpAmount === 20000){
console.log("Congratulations, You Made Him to BFree of Debt")
}

else if(ptpAmount === 10000){
    console.log("Made Partial Payment")
}

else if (ptpAmount === 21000){
    console.log("Client OverPaid")
}

else if(ptpAmount === 4500){
    console.log("Payment is below Average Amount Agreed")
}