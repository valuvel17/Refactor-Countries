import { describe, test, expect, beforeEach } from "@jest/globals";
import { Country } from "../country";
import { CountryList } from "../countrylist";

describe("CountryList class tests", () => {
  let countryList;
  let uy;

  beforeEach(() => {
    countryList = new CountryList();
    uy = new Country("Uruguay");
    uy.setCapital("Montevideo");
  });

  test("Create an empty country list", () => {
    expect(countryList.getCountries().length).toBe(0);
  });

  test("Add a country to the list", () => {
    const country = new Country("Uruguay");
    country.setCapital("Montevideo");

    countryList.add(country);

    expect(countryList.getCountries().length).toBe(1);
    expect(countryList.getCountries()[0]).toBe(country);
  });

  test("Add two different countries", () => {
    const ar = new Country("Argentina");
    ar.setCapital("Buenos Aires");

    countryList.add(uy);
    countryList.add(ar);

    expect(countryList.getCountries().length).toBe(2);
    expect(countryList.contains(uy)).toBe(true);
    expect(countryList.contains(ar)).toBe(true);
  });

  test("Add a repeated country (same instance) throws", () => {
    countryList.add(uy);

    const expectedErrorMessage =
      "No se pudo agregar. Uruguay ya está en la lista.";
    expect(() => countryList.add(uy)).toThrow(expectedErrorMessage);
    expect(countryList.getCountries().length).toBe(1);
  });

  test("Add a repeated country (different instance, same name) throws", () => {
    const first = new Country("Uruguay");
    first.setCapital("Montevideo");

    const second = new Country("Uruguay");
    second.setCapital("Montevideo");

    countryList.add(first);

    const expectedErrorMessage =
      "No se pudo agregar. Uruguay ya está en la lista.";
    expect(() => countryList.add(second)).toThrow(expectedErrorMessage);
    expect(countryList.getCountries().length).toBe(1);
  });

  test("contains returns false for country not in the list", () => {
    const br = new Country("Brasil");
    br.setCapital("Brasilia");

    countryList.add(uy);

    expect(countryList.contains(uy)).toBe(true);
    expect(countryList.contains(br)).toBe(false);
  });
});
