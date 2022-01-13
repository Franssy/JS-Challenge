// 1 Declare two variables: firstName and lastName

let firstName;
let lastName;

// 2 Assign the value "Kehinde" to firstName
// Assign the value "Odetola" to   lastName

firstName = "Kihinde";
lastName = "Odetola";

// 3  Copy the value from firstName AND lastName to boss. i.e variable  boss should be equal to Kehinde Odetola

let boss = firstName + " " + lastName;

// 4  Show the value of boss using alert

alert(boss);

// 5  Create a variable with the name of our planet. How would you name such a variable?

let ourPlanet = "earth";

// 6  Create a variable to store the name of a current visitor to a website. How would you name that variable?

let currentUser;
currentUser = "Victor";

// 7  create an array arr of 20 items in it 3

let arr = ['list one', 'list two', 'list three', 'list four', 'list five', 'list six', 'list seven', 'list eight', 'list nine', 'list ten', 'list eleven', 'list twelve', 'list thirteen', 'list fourteen', 'list fifteen', 'list sixteen', 'list seventeen', 'list eighteen', 'list nineteen', 'list tweenty'];

// 8   output the items with positions in a  multiple of 5  in  array  arr

console.log(arr[4], arr[9], arr[14], arr[19]);

// 9  create an dog Object with 4 properties.

let shib = {
    name: "shiberon",
    height: 4,
    age: 2,
    isMale: false,
};


// 10  create an array of objects of 8  different animals and output 1 of each animal's properties

let animals = [
    {
        name: "shiber",
        height: 4,
        age: 2,
        isMale: false,
    },

    {
        name: "shiba",
        height: 2,
        age: 1,
        isMale: true,
    },

    {
        name: "shibby",
        hasHeight: false,
        age: 12,
        physic: "huge",
    },

    {
        name: "shibru",
        location: "wild",
        eyeColour: "brown",
        hasHairs: true,
    },

    {
        name: "shibre",
        livesIn: "wild",
        legType: "long",
        hasHairs: true, 
    },

    {
        name: "Doge",
        hasCryptoReplica: true,
        sound: "barks",
        canSwim: false,
    },

    {
        name: "Dogelon",
        livesIn: "domestic",
        relates: "friendly",
        "is a pet": true,
    },

    {
        name: "Doggy",
        position: "squorting",
        eats: "bananas",
        cansquirt: true,
    },
];

console.log(animals[0].height, animals[1].height, animals[2].physic, animals[3].eyeColour, animals[4].livesIn, animals[5].hasCryptoReplica, animals[6].relates, animals[7].eats);

// 11  Create a variable for ptpAmount and write a conditional statement using if and else for different cases of the PTP Amount; Have an output for any possible amount. (be creative here for the possible scenarios of PTP).

let ptpAmount = 50000;

if (ptpAmount >50000){
console.log("Amount Too Low")
}

else {
    console.log("PTP Saved")
};