export class CountryList {
  #countries;

  constructor() {
    this.#countries = [];
  }

  add(country) {
    if (!this.contains(country)) {
      this.#countries.push(country);
    } else {
      throw new Error(
        `No se pudo agregar. ${country.getName()} ya está en la lista.`,
      );
    }
  }

  getCountries() {
    return this.#countries;
  }

  contains(country) {
    for (const m of this.#countries) {
      if (m.getName() == country.getName()) {
        return true;
      }
    }
    return false;
  }
}
