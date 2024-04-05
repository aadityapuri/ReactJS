import { Client, Databases, ID, Storage, Query } from "appwrite";
import conf from "../conf/conf";

export class Service{
  client = new Client();
  databases;
  bucket;

  constructor(){
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId)
    this.databases = new Databases(this.client)
    this.bucket = new Storage(this.client)
  }

  async createDocument({title, slug, content, featuredImage, status, userId}){
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId
        }
      )
    } catch (error) {
      throw error;
    }
  }

  async getPost(slug){
    try {
      return await this.databases.getDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId, slug)
    } catch (error) {
      throw error;
    }
  }

  async getActivePosts(queries = [Query.equal("status", true)]){
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("Appwrite service :: getPosts() :: ", error);
            return false;
    }
  }

  async updatePost(slug, {title, content, featuredImage, status}){
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status
        }
      )
    } catch (error) {
      throw error;
    }
  }

  async deletePost(slug){
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      )
      return true;
    } catch (error) {
      throw error
    }
  }

  //Storage files

  async uploadFile(file){
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      )
    } catch (error) {
      throw error
    }
  }

  async deleteFile(fileId){
    try {
      await this.bucket.deleteFile(
        conf.appwriteBucketId,
        fileId
      )
      return true;
    } catch (error) {
      throw error
    }
  }

  async getPreviewImage(fileId){
    try {
      return await this.bucket.getFilePreview(
        conf.appwriteBucketId,
        fileId
      ).href
    } catch (error) {
      throw error;
    }
  }
}

const service = new Service();

export default service;
