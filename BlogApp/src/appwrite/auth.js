import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

export class AuthService{
  client = new Client()
  account;
  
  constructor(){
    this.client
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId);

    account = new Account(client);
  }

  async signUp({email, password, name}){
    try {
      const userAccount = await account.create(email, password, name, ID.unique());
      if(userAccount){
        this.login({email, password});
      }
      else{
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({email, password}){
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser(){
    try {
      return await this.account.get();
    } catch (error) {
      throw error;
    }
  }

  async logout(){
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      throw error;
    }
  }
}

const authService = new AuthService();

export default authService;