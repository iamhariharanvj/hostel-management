import admin from 'firebase-admin';
import dotenv from 'dotenv';
// import serviceAccountKey from './serviceAccount.json' assert { type: 'json' };

const serviceAccountKey = {
    type: 'service_account',
    project_id: 'hostel-management-system-4e2d2',
    private_key_id: 'd22e0a177f61ae05bd6dc0d83bdef46c09ba1e3b',
    private_key:
        '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCf03fD2hz9AWlL\nujaH1eJtq8UyV4EXVndIIZtHebRAn1vRrtXGoDFxaZvByjzx2rG4+6b6MEvIMGvx\nsGrEdUuSZRvy1PjuM6uKs1ncwZX3NL7KMGvlu5t0aX4NALvJst5ybI6a8iCGwrk2\n8ZJx5xJMRAqlcENtGYvMMhY4c0cur6TW4xGSzVYIa5U90jYmc1Pm0cgbKqeJi5UV\nFJTF/f81kFUSAQIBK8Vk0lfDFYDgnSwimQQOLYqGgmptxuMBr9i2efNpFapG0CEh\nFbmtXk5NTUYFgT6+rYc6wN3rvcmsdRtSS/q2VtoO1qDykIdS9fCQluwMgc45CDKZ\nCpb7pCoRAgMBAAECggEACLFAnJdFPQFm+lEOBtnmxF4zjbxdRKlVjXJpITxeRabP\ny0SoqHKCneTHgtpT8YzFCQbZcFamGHosX2sKiNV0Sb7+rnikx+0UJv6qztXR09hm\nNAA+2LIZD1Nuy+2T87FVuyq/oBphEyiOAuNP5VVS6nDyP0iEHO/nFDD5LRLKoUr4\nGp/ZvxSIVUOjgBtrsZObXu0nA96Z44P1otQWQW8jak/si3GbFXyrlfywG5MLFell\nrWPpUpIGf8yCYdY15Z9gCpkROadVDM17KWZXZPYCeoOEmnlmZGmzS3qgsNpnBT0D\neQ1nARSyLoa+zZw7NLj0MO+u8bbJmAWBF/XM91I5kQKBgQDgtfLyRE+gADAsMmqb\nx7U9wUIX5nMwhk9AkYX3B/YsbAibG5urw2YU418AKUXiuFLE2dsb+geQv/p/A+00\nduI7x3ONoZkvvHd0BukjL/GcATrlMrZOtJJS84Iq/BMC60UxfpF6qBsXLWohI4DO\nSWOjbgBR+HNMGnmHhn3SAOcnDQKBgQC2FKK3+5BOsaPPPhfexPj2APEn6Kj5XMkX\netasF+Z8Cns9Ut5kXBlbkGTZ5GyG49tY4xIIE7djP26NnLTCl7xT8JjnlTfchVQb\nJKXpQX7WBvqGUL7banYzWwyyu+yTNjUzfQwolrfT+3oM0bFD5d039I8Xz7NkHHen\nHOBBs+hOFQKBgCJ2ZSsYpOmR/dFZbhY0G6y77eoCctoXTyJE7znCo9OOQgefxVEj\nZ41+jXxV2Bz8Td1Y2AzDXNOrTbybGo74SJwIa8Vl6jty+RL3WFwIJ1LYsXKjQ2hw\nsxw7slPrUvMYqAT+N0uLapQ0Z9lrO37nrHtNDImFxBEA4nCRhMxnTQwlAoGBAKsF\n5PT0+E3CMv/07czTrJi8t8bplNVsHoHMYpkQdfAqlCk8jiEsFLFZhjDXikyE90Gd\nPxGRG17AdOHUwEBK75zUT3quQOMD5MT9/kyCtVTpByVj8HD9pXqFWf8D3qlDcGMl\nYGc7cf1Npw0lZOBGpyvorQMLlw9AYe74g3eTOW8lAoGBAMBNgKs8Tm9ypFxVqUd4\n1alDENk0u/KXlAa7RARINKo/YNHXfQe23GKvI5PcKs5jILSXZX0imRTwCtGkRKCR\nGcebjgJBFEAp8IXEQD1lSXPQeQx5dDIzTF2aP6/wf4kc1gDZSZbPPAuG0jR4A8Sp\nv4tb0g/GnTvgbd6cxzySAKYL\n-----END PRIVATE KEY-----\n',
    client_email:
        'firebase-adminsdk-m1zvt@hostel-management-system-4e2d2.iam.gserviceaccount.com',
    client_id: '102250490133870205639',
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_x509_cert_url:
        'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-m1zvt%40hostel-management-system-4e2d2.iam.gserviceaccount.com',
    universe_domain: 'googleapis.com',
};

dotenv.config();

const firebaseConfig = {
    credential: admin.credential.cert(serviceAccountKey),
};

const firebaseApp = admin.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();

export default firebaseApp;
