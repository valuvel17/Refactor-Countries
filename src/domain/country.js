export class Country {
  #name;
  #capital;

  constructor(aName) {
    if (!this.#isValidName(aName)) {
      throw new Error("El nombre del país no puede ser vacío");
    } else {
      this.#name = aName;
    }
  }

  getName() {
    return this.#name;
  }

  getCapital() {
    return this.#capital;
  }

  setCapital(aCapital) {
    if (!this.#isValidCapital(aCapital)) {
      throw new Error("La capital del país no puede ser vacía");
    } else {
      this.#capital = aCapital;
    }
  }

  #isValidName(aName) {
    return aName !== undefined && aName !== null && aName !== "";
  }

  #isValidCapital(aCapital) {
    return aCapital !== undefined && aCapital !== null && aCapital !== "";
  }

  toString() {
    return `País: ${this.#name} - Capital: ${this.#capital}`;
  }
}
