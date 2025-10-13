const { User, Admin } = require('./userClass');

test('User login sets loggedIn to true', () => {
    const user = new User('Ameer', 'a@example.com');
    user.login();
    expect(user.loggedIn).toBe(true);
});

test('User logout sets loggedIn to false', () => {
    const user = new User('Ameer', 'a@example.com');
    user.login();
    user.logout();
    expect(user.loggedIn).toBe(false);
});

test('User can update email', () => {
    const user = new User('Ameer', 'a@example.com');
    user.updateProfile('new@example.com');
    expect(user.email).toBe('new@example.com');
});

test('Admin can delete user without error', () => {
    const admin = new Admin('Boss', 'admin@example.com');
    const user = new User('Ameer', 'a@example.com');
    expect(() => admin.deleteUser(user)).not.toThrow();
});
