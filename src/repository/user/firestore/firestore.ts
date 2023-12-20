import { Firestore } from 'firebase/firestore';

export class UserRepository implements IUserRepository {
  constructor(private db: Firestore) {}

  async addUser(userID: string): Promise<void> {
    // データソースにユーザーを追加
  }
}
