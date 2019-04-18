import { rot13 } from "../";

test("should be a string", () => {
  expect(typeof rot13("Hello, world!")).toBe("string");
});

test("should return correct rot 13", () => {
  expect(rot13("Hello, world!")).toBe("Uryyb, jbeyq!");
});

test("should return correct un-rot 13", () => {
  expect(rot13("Uryyb, jbeyq!")).toBe("Hello, world!");
});
