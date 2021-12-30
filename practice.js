//1.Declare two variables: firstName and lastName.
//Answer is

// let firstName;
// let lastName;

//2.Assign the value "Kehinde" to firstName
//Answer is.....

let firstName = "kehinde";
console.log(firstName);

//3.Assign the value "Odetola" to   lastName
//Answer is.....

let lastName = "Odetola";
console.log(lastName);

//4.Copy the value from firstName AND lastName to boss. i.e variable  boss should be equal to Kehinde Odetola
//Answer is.....
let boss = "Kehinde Odetola";
console.log(boss);

//5.Show the value of boss using alert
//Answer is.....
alert("Kehinde Odetola");

//6.Create a variable with the name of our planet. How would you name such a variable?
//Answer is.....
let ourPlanetname = "Earth";
console.log(ourPlanetname);

//7.Create a variable to store the name of a current visitor to a website. How would you name that variable? 2
//Answer is.....
let currentvisitor = "Wuraola";
console.log(currentvisitor);

//8.create an array arr of 20 items in it
//Answer is.....
let arr = [
  "Fruits",
  "Bottles",
  "Paints",
  "Plates",
  "Pens",
  "Pans",
  "Birkin stock",
  "Gladiators",
  "Polish",
  "Nails",
  "Cups",
  "Sieve",
  "Flour",
  "Cake",
  "Snack",
  "Donut",
  "Gum",
  "Pie",
  "Chocolate",
  "Sweets",
];

// 9.output the items with positions in a  multiple of 5  in  array
//Answer is.....
let item = arr[4];
console.log(item);

let nails = arr[9];
console.log(nails);

let snack = arr[14];
console.log(snack);

let sweets = arr[19];
console.log(sweets);

//10.create an dog Object with 4 properties
//Answer is.....
let dog = {
  limbs: 4,
  ears: 2,
  color: "white",
  sex: "male",
};

// 11.create an array of objects of 8  different animals and output 1 of each animal's properties
//Answer is.....

let animal = [
  { name: "fish", skin: "scales", color: "black" },

  { name: "Snake", skin: "Scales", color: "Multicolor" },

  {
    name: "Hen",
    skin: "Feathery",
    color: "White",
  },

  {
    name: "lizard",
    skin: "Scales",
    color: "Orange",
  },

  {
    name: "Ant",
    skin: "Exoskeleton",
    color: "Black",
  },

  { name: "Spider", skin: "Exoskeleton", color: "Multicolor" },

  {
    name: "Cow",
    skin: "Hairy",
    color: "White",
  },

  {
    name: "Bird",
    skin: "Feathery",
    color: "Multicolor",
  },
];
// output
let fish = animal[0];
console.log({ skin: "scales" });

let snake = animal[1];
console.log({ color: "Multicolor" });

let hen = animal[2];
console.log({ color: "White" });

let lizard = animal[3];
console.log({ color: "Orange" });

let ant = animal[4];
console.log({ color: "Black" });

let spider = animal[5];
console.log({ color: "Multicolor" });

let cow = animal[6];
console.log({ color: "White" });

let bird = animal[7];
console.log({ skin: "Feathery" });

// 12. Create a variable for ptpAmount and write a conditional statement using if and else for different cases of the PTP Amount; Have an output for any possible amount. (be creative here for the possible scenarios of PTP). 5
//Answer is.....
let ptpAmount = 10000;
if (ptpAmount === 10000) {
  console.log("PTP Submitted");
} else if (ptpAmount === 5000) {
  console.log("PTP cannot be submitted");
} else if (ptpAmount === 20000) {
  console.log("PTP submitted");
} else if (ptpAmount === 500000) {
  console.log("PTP Limit Exceeded");
}

// 12. Bonus question.. At Bfree Mentorship Programme Which team stands out as the best ? and why?
//Answer is.....
let best = "frontend";
console.log(best);

let why =
  "Coding is broken down to seem like a piece of cake, motivating one to want to learn more";
console.log(why);
