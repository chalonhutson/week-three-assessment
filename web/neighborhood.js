let chosenRestaurant = document.querySelector("#chosen")
let majorBtn = document.querySelector("#major")
let minorBtn = document.querySelector("#minor")
let pickBtn = document.querySelector("#pickBtn")

let majorPicked = true

let majorList = ["McD\'s", "Applebees", "In and Out", "Taco Bell", "Subway"]
let minorList = ["Chubby's", "Joe\'s Cafe", "Bangkok Grill", "Maria Bonita", "Oishii Sushi", "Apollo Burger", "TRUreligion Pancake and Steakhouse"]

let pickRand = () => {
    if (majorPicked === true){
        let int = Math.floor(Math.random() * (majorList.length))
        return majorList[int]
    } else {
        let int = Math.floor(Math.random() * (minorList.length))
        return minorList[int]
    }
}

let doThing = () => {
    chosenRestaurant.textContent = pickRand()
}

pickBtn.addEventListener("click", doThing)
minorBtn.addEventListener("click", () => {majorPicked=false})
majorBtn.addEventListener("click", () => {majorPicked=true})