class UserAccessControl {
    constructor(role) {
        this.role = role;
    }

    checkAccess() {
        if (this.role === 'admin') {
            console.log('Access granted: Full privileges.');
        } else {
            console.log('Access denied: Limited privileges.');
        }
    }
}

// Example usage:
const user1 = new UserAccessControl('admin');
user1.checkAccess();
