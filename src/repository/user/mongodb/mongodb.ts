import { Firestore } from 'firebase/firestore';

export class UserMongoRepository implements IUserRepository {
  constructor(private db: Firestore) {}

  async addUser(userID: string): Promise<void> {
    // データソースにユーザーを追加
  }
}
