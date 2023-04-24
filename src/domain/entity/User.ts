export default class User {
  constructor(readonly name: string, readonly email: string, readonly password: string, readonly age: number){

    if(name.split(" ").length < 2) {
      throw new Error("Invalid name");
    }

    if(!String(email).toLowerCase().match("^(?=.{1,64}@.{1,255}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$")) {
      throw new Error("Invalid email");
    }

    if(password.length < 8) {
      throw new Error("Invalid password");
    }

    if(age < 18) {
      throw new Error("Invalid age");
    }
  }
}
