import { describe, test, expect, beforeAll } from "@jest/globals";
import { Country } from "../country";

describe("Country class tests", () => {
  let expectedErrorMessage;
  let country;

  beforeAll(() => {
    expectedErrorMessage = "El nombre del país no puede ser vacío";
    country = new Country("Uruguay");
  });

  test("Create a country", () => {
    const countryName = country.getName();
    const expectedName = "Uruguay";
    expect(countryName).toBe(expectedName);
  });

  test("Invalid null country name throws in constructor", () => {
    expect(() => new Country(null)).toThrow(expectedErrorMessage);
  });

  test("Invalid null country name throws in constructor", () => {
    expect(() => new Country(null)).toThrow(expectedErrorMessage);
  });

  test("Invalid undefined country name throws in constructor", () => {
    expect(() => new Country(undefined)).toThrow(expectedErrorMessage);
  });

  test("Invalid empty country name throws in constructor", () => {
    expect(() => new Country("")).toThrow(expectedErrorMessage);
  });

  test("Invalid null country capital throws in setter", () => {
    const expectedErrorMessage = "La capital del país no puede ser vacía";
    expect(() => country.setCapital(null)).toThrow(expectedErrorMessage);
  });

  test("Invalid undefined country capital throws in setter", () => {
    const expectedErrorMessage = "La capital del país no puede ser vacía";
    expect(() => country.setCapital(undefined)).toThrow(expectedErrorMessage);
  });

  test("Invalid empty country capital throws in setter", () => {
    const expectedErrorMessage = "La capital del país no puede ser vacía";
    expect(() => country.setCapital("")).toThrow(expectedErrorMessage);
  });

  test("Set valid capital and read it", () => {
    country.setCapital("Montevideo");
    expect(country.getCapital()).toBe("Montevideo");
  });

  test("ToString country", () => {
    country.setCapital("Montevideo");
    const expectedString = "País: Uruguay - Capital: Montevideo"; // <-- coincide con tu toString actual
    expect(country.toString()).toBe(expectedString);
  });
});
