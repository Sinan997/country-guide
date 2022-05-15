const input = document.getElementById("textInput");
const button = document.getElementById("submitInput");
const content = document.getElementById("content");



async function getData(countryName) {
    const fetchedData = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        .then(response => response.json())
        .then(data => {
            content.innerHTML = `
        <img src="${data[0].flags.png}" alt="">
        <p><b>Country Name</b>: ${data[0].name.common}</p>
        <p><b>Offical</b>: ${data[0].name.official}</p>
        <p><b>Capital</b>: ${data[0].capital}</p>
        <p><b>Independent</b>: ${data[0].independent ? "Yes" : "No"}</p>
        <p><b>Currencies</b>:${data[0].currencies[`${Object.keys(data[0].currencies)[0]}`].name}(${data[0].currencies[`${Object.keys(data[0].currencies)[0]}`].symbol})</p>
        <p><b>Language</b>: ${data[0].languages[`${Object.keys(data[0].languages)[0]}`]}</p>
        <p><b>Population</b>: ${data[0].population}</p>
        <p><b>Timezone</b>: ${data[0].timezones[`${Object.keys(data[0].timezones)[0]}`]}</p>`
            content.classList.add("active");
        }

        ).catch((error) => {
            input.value = "Country Not Found";
            content.classList.remove("active");
        })

}

input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        getData(input.value);
    }
});

button.addEventListener("click", () => {
    getData(input.value);
})

