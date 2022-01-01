"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////
const renderCountry = function (data) {

      for (let i = 0; i < data.length; i++) {
            const html = `
    
  <article class="country">
    <img class="country__img" src="${data[i].flag}" />
    <div class="country__data">
      <h3 class="country__name">${data[i].name}</h3>
      <h4 class="country__region">${data[i].region}</h4>
      <p class="country__row"><span>🏙️</span>${data[i].capital}</p>
      <p class="country__row"><span>👫</span>${
        data[i].population}</p>
      <p class="country__row"><span>🗣️</span>${data[i].languages[0].name}</p>
      <p class="country__row"><span>🗺️</span>${data[i].region}</p>
      <p class="country__row"><span>🏝️</span>${data[i].subregion}</p>
    </div>
  </article>
  `;
            countriesContainer.insertAdjacentHTML("beforeend", html);
            countriesContainer.style.opacity = 1;
      }
};


const getCountryData = function (country) {
      fetch(`https://restcountries.com/v2/${country}`)
            .then((response) => response.json())
            .then((data) => {
                  renderCountry(data);
            });
};

getCountryData("all");
