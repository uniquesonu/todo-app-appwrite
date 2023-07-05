import { Client,Account,Databases } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('64a38b98acbc9f623871');


const account = new Account(client)
export {client,account}

// DataBase
export const databases = new Databases(client, "64a38c6dea55c1d64623")
