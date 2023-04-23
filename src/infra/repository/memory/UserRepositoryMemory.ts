import User from "../../../domain/entity/User";
import UserRepository from "./UserRepository";

export default class UserRepositoryMemory implements UserRepository {

  users: User[];
  
  save(user: User): Promise<void> {
    throw new Error("Method not implemented.");
  }
  getByEmail(email: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
  

}
