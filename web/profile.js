let favColBtn = document.querySelector("#color")
let favPlaBtn = document.querySelector("#place")
let favRitBtn = document.querySelector("#ritual")

let favColBtnClick = (e) => {
    e.preventDefault()
    alert("Red, specifically the 11 time World Champion St. Louis baseball Cardinals Red")
}

let favPlaBtnClick = (e) => {
    e.preventDefault()
    alert("St. Louis to visit for baseball, but not to live. Living I actually really like it here in Utah, tbh.")
}

let favRitBtnClick = (e) => {
    e.preventDefault()
    alert("Watching \"Independence Day\" every Independence Day.")
}


favColBtn.addEventListener("click", favColBtnClick)
favPlaBtn.addEventListener("click", favPlaBtnClick)
favRitBtn.addEventListener("click", favRitBtnClick)