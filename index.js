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
}

// Example usage:
const user1 = new UserAccessControl('admin');
user1.checkAccess();
