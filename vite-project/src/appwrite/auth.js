import conf from "../conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndPoint(conf.appwriteURL)
      .setProjectId(conf.appwriteProjectId);

    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        name,
        email,
        password
      );
      return this.login({ email, password });
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getUser() {
    try {
      return this.account.get();
    } catch (error) {
      console.log("Appwrite Error     ", error);
    }
    return null;
  }

  async logoutUser({ email, password }) {
    try {
      await this.account.deleteSession("all");
    } catch (error) {}
  }
}

const authService = new AuthService();
export default authService();
