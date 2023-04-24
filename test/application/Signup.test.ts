import Login from "../../src/application/Login";
import Signup from "../../src/application/Signup";
import UserRepositoryMemory from "../../src/infra/repository/memory/UserRepositoryMemory";

test("Deve fazer o signup", async function() {
  //arrange
  const userRepository = new UserRepositoryMemory();
  const signup = new Signup(userRepository);
  const inputSignup = {
    name: "John Doe",
    email: "john.doe@gmail.com",
    password: "12345678",
    age: 30
  };

  //act
  await signup.execute(inputSignup);
  
  //assert
  const login = new Login(userRepository);
  const inputLogin = {
    email: "john.doe@gmail.com",
    password: "12345678"
  }
  const output = await login.execute(inputLogin);
  expect(output.name).toBe("John Doe");
  expect(output.token).toBe("12345678");
});

test("não deve fazer o signup se o nome for inválido", async function () {
  const userRepository = new UserRepositoryMemory();
  const signup = new Signup(userRepository);
  const inputSignup = {
    name: "John",
    email: "john.doe@gmail.com",
    password: "12345678",
    age: 30
  };

  expect(() => signup.execute(inputSignup)).rejects.toThrow("Invalid name");
})

test("não deve fazer o signup se o email for inválido", async function () {
  const userRepository = new UserRepositoryMemory();
  const signup = new Signup(userRepository);
  const inputSignup = {
    name: "John Doe",
    email: "john.doe@gmail",
    password: "12345678",
    age: 30
  };

  expect(() => signup.execute(inputSignup)).rejects.toThrow("Invalid email");
})

test("não deve fazer o signup se a senha for inválida", async function () {
  const userRepository = new UserRepositoryMemory();
  const signup = new Signup(userRepository);
  const inputSignup = {
    name: "John Doe",
    email: "john.doe@gmail.com",
    password: "123",
    age: 30
  };

  expect(() => signup.execute(inputSignup)).rejects.toThrow("Invalid password");
})

test("não deve fazer o signup se a idade for inválida", async function () {
  const userRepository = new UserRepositoryMemory();
  const signup = new Signup(userRepository);
  const inputSignup = {
    name: "John Doe",
    email: "john.doe@gmail.com",
    password: "12345678",
    age: 17
  };

  expect(() => signup.execute(inputSignup)).rejects.toThrow("Invalid age");
})
