import Firebase from './firebase';

class AuthFunctions extends Firebase {
    signUp(username, email, pwd) {
        // Catch any errors thrown by firebase
        this.auth.createUserWithEmailAndPassword(email, pwd)
            .then((userCred) => {
                this.writeDatabase(userCred.user.uid, {
                    username: username,
                    email: email,
                    profile_pic: "https://media.discordapp.net/attachments/832189594137133056/832763543568515162/image2.png?width=946&height=946",
                    todo: {},
                    done: {},
                    costumes: {},
                    last_login: new Date()
                });
            })
            .catch(this.debugError);
    }

    logIn(email, pwd) {
        // Log the user in to firebase
        // Catch any errors thrown
        this.auth.signInWithEmailAndPassword(email, pwd)
            .catch(this.debugError);
    }

    logOut(callback) {
        this.auth.signOut()
            .then(callback)
            .catch(this.debugError);
    }
}

const authFunctions = new AuthFunctions();
export default authFunctions;