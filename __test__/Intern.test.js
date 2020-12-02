const Intern = require("../lib/Intern");

test("Can set school from constructor", () => {
  const testValue = "UTA";
  const e = new Intern("Foo", 1, "a@gg.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Foo", 1, "a@gg.com", "UTA");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school from getSchool()", () => {
  const testValue = "UTA";
  const e = new Intern("Foo", 1, "a@gg.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
