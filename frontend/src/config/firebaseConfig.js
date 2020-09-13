/**
 * @author Douglas Canevarollo
 * 
 * Componente de configuração do Firebase Hosting.
 */
import firebase from 'firebase/app';

const config = {
    apiKey: "chave",
    authDomain: "semac-inscriptions.firebaseapp.com",
    databaseURL: "https://semac-inscriptions.firebaseio.com",
    projectId: "semac-inscriptions",
    storageBucket: "",
    messagingSenderId: "838968179754",
    appId: "1:838968179754:web:7ca9ae740eacd360"
};

firebase.initializeApp(config);

export default firebase;
