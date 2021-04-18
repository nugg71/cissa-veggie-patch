import Firebase from './firebase';

class ProfileFunctions extends Firebase {
    fetchUserData(component, uid) {
        this.readDatabase(uid, "value", (snapshot) => {
            component.setState({user: snapshot});
        })
    }
    setUserProfile(uid, url) {
        const ref = uid + '/profile_pic'
        this.updateDatabase(uid, {
            ref: url 
        });
    }
    updateTasks(uid, task) {
        var task_key = this.database.ref().child('allTasks').push().key;
        var updates = {};
        updates[uid + '/tasks' + task_key] = task;
        this.database.ref().update(updates)
    }
    fetchTasks(uid) {
        
    }
}

const profileFunctions = new ProfileFunctions();
export default profileFunctions;