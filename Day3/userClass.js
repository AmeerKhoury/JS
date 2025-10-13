class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
        this.loggedIn = false;
    }

    login() {
        this.loggedIn = true;
        console.log(`${this.username} logged in`);
    }

    logout() {
        this.loggedIn = false;
        console.log(`${this.username} logged out`);
    }

    updateProfile(newEmail) {
        this.email = newEmail;
        console.log(`${this.username} updated email to ${this.email}`);
    }
}

class Admin extends User {
    deleteUser(user) {
        console.log(`Admin ${this.username} deleted user ${user.username}`);
    }
}

module.exports = { User, Admin };