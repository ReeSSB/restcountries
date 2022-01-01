"use strict";

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

// const getCountryData = function (country) {
// 	const request = new XMLHttpRequest();
// 	request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// 	request.send();

// 	request.addEventListener('load', function () {
// 		console.log(this.responseText);
// 		const [data] = JSON.parse(this.responseText);
// 		console.log(data);

// 		const html = `
//       <article class="country">
//           <img class = "country__img" src = "${data.flag}/>
//           <div class="country__data">
//             <h3 class="country__name">${data.name.common}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class = "country__row"><span>👫</span>${(
//               +data.population / 1000000
//             ).toFixed(2)}</p>
//             <p class = "country__row"> <span> 🗣️ </span>${data.languages[0]}, ${data.languages.tam}</p>
//             <p class = "country__row"><span>💰</span>${data.currencies[0].name}</p>
//           </div>
//         </article>
//       `;
// 		countriesContainer.insertAdjacentHTML('beforeend', html);
// 		countriesContainer.style.opacity = 1;
// 	});
// };

// getCountryData('india');
// getCountryData('portugal');

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//   <article class="country">
//     <img class="country__img" src="${data.flag}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(
//         +data.population / 1000000
//       ).toFixed(1)} people</p>
//       <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//       <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//     </div>
//   </article>
//   `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };live s

// getCountryData('portugal');
// getCountryData('usa');

// Using FETCH
// const request = fetch(`https://restcountries.com/v3.1/name/india`)
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`).then(function (response) {
//     console.log(response);
//     return response.json();
//   }).then(function (data) {
//     console.log(data);
//     renderCountry(data[0]);
//   });
// };

// const request = fetch(`https://restcountries.com/v3.1/name/india`)
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then((response) => response.json()).
//   then((data) => renderCountry(data[0]));
// };
// getCountryData('india');

const getCountryData = function (country) {
      //Country 1
      fetch(`https://restcountries.com/v2/${country}`)
            .then((response) => response.json())
            .then((data) => {
                  renderCountry(data);
            });
};

getCountryData("all");