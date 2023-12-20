interface IUserRepository {
  addUser(userID: string): Promise<void>;
}
