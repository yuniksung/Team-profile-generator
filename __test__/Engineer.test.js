const Engineer = require("../lib/Engineer");

test("Can set GitHUb account from constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "a@gg.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Foo", 1, "a@gg.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub id from getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "a@gg.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});
