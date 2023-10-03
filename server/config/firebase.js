import admin from 'firebase-admin';
import dotenv from 'dotenv';
import serviceAccountKey from './serviceAccount.json' assert { type: 'json' };

dotenv.config();

const { FIREBASE_DATABASE_URL } = process.env;

const firebaseConfig = {
    credential: admin.credential.cert(serviceAccountKey),
};

const firebaseApp = admin.initializeApp(firebaseConfig);

export const db = firebaseApp.database();

export default firebaseApp;
