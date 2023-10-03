import admin from 'firebase-admin';
import dotenv from 'dotenv';
import serviceAccountKey from './serviceAccount.json' assert { type: 'json' };

dotenv.config();

const firebaseConfig = {
    credential: admin.credential.cert(serviceAccountKey),
};

const firebaseApp = admin.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();

export default firebaseApp;
