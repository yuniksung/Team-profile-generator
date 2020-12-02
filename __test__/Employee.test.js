const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Can set name from constructor arguments", () => {
  const name = "Dave";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Can set id from constructor argument", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue);
  expect(e.id).toBe(testValue);
});

test("Can set email from constructor argument", () => {
  const testValue = "a@gg.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Can get name from getName()", () => {
  const testValue = "Dave";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Can get id from getId()", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Can get email from getEmail()", () => {
  const testValue = "a@gg.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Dave", 1, "a@gg.com");
  expect(e.getRole()).toBe(testValue);
});
