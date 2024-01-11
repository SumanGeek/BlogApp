const conf = {
  appwriteURL: String(import.meta.VITE_APPWRITE_PROJECT_URL),
  appwriteProjectId: String(import.meta.VITE_APPWRITE_PROJECT_ID),
  appwriteDatabaseId: String(import.meta.VITE_APPWRITE_DATABASE_ID),
  appwriteCollectionId: String(import.meta.VITE_APPWRITE_COLLECTION_ID),
  appwriteBucketId: String(import.meta.VITE_APPWRITE_PROJECT_BUCKET_ID),
};

export default conf;
