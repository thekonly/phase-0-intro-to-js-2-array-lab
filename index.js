// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name) {
    return cats.push(name);
}

function destructivelyPrependCat(name) {
    return cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    return cats.pop();
}

function destructivelyRemoveFirstCat() {
    return cats.shift();
}

function appendCat(name) {
    let newArray;
    newArray = [...cats,name]
    return newArray;
}

function prependCat(name) {
    let newArray;
    newArray = [name, ...cats]
    return newArray;
}

function removeLastCat() {
    let newArray;
    newArray = cats.slice(0,cats.length-1)
    return newArray;
}

function removeFirstCat() {
    let newArray;
    newArray = cats.slice(1,cats.length)
    return newArray;
}