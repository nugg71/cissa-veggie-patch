import app from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyCRaXUUFrzc4myLWxaOELbghxeJ40AW7kY",
    authDomain: "veggie-patch-de6aa.firebaseapp.com",
    databaseURL: "https://veggie-patch-de6aa-default-rtdb.firebaseio.com",
    projectId: "veggie-patch-de6aa",
    storageBucket: "veggie-patch-de6aa.appspot.com",
    messagingSenderId: "85064952966",
    appId: "1:85064952966:web:dd0146c4ef1fff52077507"
};

app.initializeApp(firebaseConfig);

class Firebase {
    constructor() {
        this.database = app.database();
        this.storage = app.storage();
        this.auth = app.auth();
    }

    debugError(error) {
        alert(`${error.code} error has occurred - ${error.message}`);
    }

    writeDatabase(root, json) {
        this.database.ref(root).set(json)
            .catch(this.debugError);
    }

    updateDatabase(root, updates) {
        this.database.ref().update(updates)
            .catch(this.debugError);
    }

    readDatabase(root, event, callback) {
        this.database.ref(root).on(event, callback);
    }

    onUserActive(callback, fallback=null) {
        this.auth.onAuthStateChanged((userInstance) => {
            if(userInstance != null) {
                callback(userInstance.uid);
            }
            else if(fallback != null) {
                fallback();
            }
        });
    }
}

export default Firebase;