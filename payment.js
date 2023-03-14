//task1
const cost = (payment) => {
 
    return (0.01*payment) +3;
}

console.log(cost(100));

//task 2.1
const greeting = (name1, name2, name3) => {

    return `Welcome ${name1}, ${name2}, ${name3}.`;
}

console.log(greeting('John', 'Doe', 'Smith'));

//task 2.2
const birthYear = (year) => {
    return 2023-year;
}
console.log(birthYear(1990));

//task 2.3
const welcome = (name1, name2, name3 ,age1, age2, age3) => {
    return `Welcome ${name1}, you are ${age1} .Welcome ${name2} you are ${age2} .Welcome ${name3}, you are ${age3}.`;
};

console.log(welcome('John', 'Doe', 'Smith', 20, 30, 40));

//task 3
const pass = yourScore => {
    if (yourScore >= 5) {return true}
    else {return false}
}

const grade = yourScore =>{
    if (yourScore >= 8) {return 'Excellent'} else if (yourScore === 11) {return 'Perfect'} else {return 'OK'}
}

console.log(pass(9));
console.log(grade(10));

