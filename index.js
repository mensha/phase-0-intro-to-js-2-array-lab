// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat() {
  return cats.push('Ralph') 
} 

function destructivelyPrependCat() {
    return cats.unshift("Bob")
}

function destructivelyRemoveLastCat() {
    return cats.pop(-1)
}

function destructivelyRemoveFirstCat() {
    return cats.shift(0)
}

function appendCat() {
    const newCats  = [...cats,'Broom'] 
     return newCats
}

function prependCat() {
    const newCatsToo = ['Arnold', ...cats]
    return newCatsToo
}

function removeLastCat() {
    const subtractLastCat = cats.slice(0, cats.length-1)
    return subtractLastCat
}

function removeFirstCat() {
    const subtractFirstCat = cats.slice(1)
    return subtractFirstCat
}