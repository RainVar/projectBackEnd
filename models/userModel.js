let users = [];
let nextId = 1;

class UserModel {
  static create(userData) {
    const newUser = { id: nextId++, ...userData };
    users.push(newUser);
    return newUser;
  }

  static findByEmail(email) {
    return users.find(user => user.email === email);
  }

  static findById(id) {
    return users.find(user => user.id === id);
  }
}

module.exports = UserModel;