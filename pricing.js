const toggleSwitch = document.querySelector("#switch")
const priceChange = document.querySelectorAll(".price")

let monthlyPrices = [19, 39, 99]


for (let i = 0; i < monthlyPrices.length; i++) {
    priceChange[i].textContent = "$" + monthlyPrices[i].toFixed(2);
}

toggleSwitch.addEventListener("click", () => {
    for (let i = 0; i < monthlyPrices.length; i++) {
        if (toggleSwitch.checked) {
            priceChange[i].textContent = "$" + (monthlyPrices[i] * 10).toFixed(2);
        } else {
            priceChange[i].textContent = "$" + (monthlyPrices[i]).toFixed(2);
        }
    }
});