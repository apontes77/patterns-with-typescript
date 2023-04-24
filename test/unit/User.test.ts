import User from "../../src/domain/entity/User";

test("Deve criar um usuário", async function () {
  
  const user = new User("John Doe", "john.doe@gmail.com", "12345678", 30);
  expect(user.name).toBe("John Doe");
  expect(user.email).toBe("john.doe@gmail.com");
  expect(user.password).toBe("12345678");
  expect(user.age).toBe(30);
});
