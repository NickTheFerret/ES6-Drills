const favMovie = (movie = "The Room", name = "Tommy Wiseau") => {
    console.log(`my name is ${name} and my favorite movie is ${movie}`);  //if you're not using curly braces, put it on 1 line
}    //this is an arrow function

favMovie()

favMovie("Star Wars")

                        //written with function

// function favMovie (movie = "The Room", name = "Tommy Wiseau") {
//     console.log(`my name is ${name} and my favorite movie is ${movie}`);
// }           


const getFirstName = (fullName) => {
    const splitName = fullName.split(" ");
    return splitName[0];
};

// these make the sentence split on what value you set it to: here it is the space

const getFirstNameConcise = (fullName = "Nick Harris") => fullName.split(" ")[0];

console.log(getFirstName("Nick Harris"));
console.log(getFirstNameConcise());


const doMath = (num1, num2) => {
    return {
        exp: num1**num2,
        prod: num1 * num2
    };
};                      //

const stuff = doMath(3, 3);
console.log(stuff.exp, stuff.prod);


const logS = (name, location, favFood) => {
    console.log(`My name is ${name}. I live in ${location} and my favorite food is ${favFood}.`)

    let arr = ["Paul", "Birmingham", "Kimchi"];

    logS(...arr)
}
const myName = ("Garrett")

const AnotherFunction = (name) => {
    const splitStringArr = [...name];

    for (let i = 0; i < splitStringArr.length; i++) {
        const element = splitStringArr[i];
        console.log(element)
    };
};

AnotherFunction(myName)



