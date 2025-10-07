class UserAccessControl {
    constructor(role) {
        this.role = role;
    }

    checkAccess() {
        if (this.role === 'admin') {
            console.log('Access granted: User have full privileges.');
        } else {
            console.log('Access denied: User have limited privileges.');
        }
    }

    checkPermission() {
        if (this.role === 'editor' || this.role === 'admin') {
            console.log('Permission granted.');
        } else {
            console.log('Permission denied.');
        }
    }

    checkAcceptence(){
        if (this.role === 'dev' || this.role === 'admin'){
            console.log("Developer has the permission to override.");
        } else {
            console.log("You're not a Developer nor Admin.");
        }
    }
}

// Example usage:
const user1 = new UserAccessControl('admin');
user1.checkAccess();
