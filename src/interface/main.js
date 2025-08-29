import { Country } from "../domain/country.js";
import { CountryList } from "../domain/countrylist.js";

const btnAdd = document.getElementById("btn-add");
const inpName = document.getElementById("inp-name");
const inpCapital = document.getElementById("inp-capital");

const mainCountryList = new CountryList();

btnAdd.addEventListener("click", handleAddCountry);

function handleAddCountry() {
  const countriesErrorContainer = document.getElementById(
    "add-countries-error",
  );
  try {
    const newCountry = new Country(inpName.value);
    newCountry.setCapital(inpCapital.value);
    mainCountryList.add(newCountry);
    clearInputs();
    countriesErrorContainer.classList.add("d-none");
    loadCountryList(newCountry);
    appendAlert(`${newCountry.getName()} agregado correctamente!`, "success");
  } catch (error) {
    const countriesError = document.getElementById("add-countries-error-msg");
    countriesError.innerText = error.message;
    countriesErrorContainer.classList.remove("d-none");
  }
}

function clearInputs() {
  inpName.value = "";
  inpCapital.value = "";
}

function appendAlert(message, type) {
  const alertPlaceholder = document.getElementById("alerts");
  const wrapper = document.createElement("div");

  alertPlaceholder.innerHTML = "";

  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible pe-4" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);
}

function loadCountryList(newCountry) {
  const countriesList = document.getElementById("countries-list");
  const countriesContainer = document.getElementById("countries");
  const emptyList = document.getElementById("empty-list");

  emptyList.classList.add("d-none");
  countriesContainer.classList.remove("d-none");
  let li = document.createElement("li");
  li.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-start",
  );
  li.innerHTML = `<div class="ms-2 me-auto">
  <div class="fw-bold">${newCountry.getName()}</div>
    ${newCountry.getCapital()}
  </div>
  `;
  countriesList.appendChild(li);
}

inpCapital.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    btnAdd.click();
  }
});
