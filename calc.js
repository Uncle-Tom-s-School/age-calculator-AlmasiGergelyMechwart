const dayEl = document.getElementById("day")
const monthEl = document.getElementById("month")
const yearEl = document.getElementById("year")

const yearResEl = document.getElementById("yearRes")
const monthResEl = document.getElementById("monthRes")
const dayResEl = document.getElementById("dayRes")

const calcBtnEl = document.getElementById("calcBtn")

calcBtnEl.addEventListener("click", () => {
    let day = dayEl.value * 1;
    let month = monthEl.value * 1;
    let year = yearEl.value * 1;

    const inputDate = new Date(`${year}-${month}-${day}`)

    if (inputDate == "Invalid Date") {
        console.log("nem jó :(")
    }

    const currentDate = new Date()

    let resDate = new Date(currentDate - inputDate)
    let zeroDate = new Date(0)

    yearResEl.innerText = resDate.getFullYear() - zeroDate.getFullYear()
    monthResEl.innerText = resDate.getMonth() - zeroDate.getMonth()
    dayResEl.innerText = resDate.getDate() - zeroDate.getDate()

    console.log(zeroDate.getFullYear(), zeroDate.getMonth(), zeroDate.getDate())
})