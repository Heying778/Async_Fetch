const section = document.querySelector("#country");
const ul = document.createElement('ul');

const fetchCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const jsonData = await response.json();
    
    const countryName = countries.map(country => {
        const name = country.name;
        const flag = country.flag;// how to assign flag to country
        return name;
    }) 

    countryName.forEach((countryname) => {
        const nameLi = document.createElement("li");
        nameLi.textContent = countryname;
        ul.appendChild(nameLi);
    })

}

fetchCountries()