class UserLogin {
  userList = [];

  constructor(userList) {
    this.userList = new Array();
  }

  updateAndInsert = (userData) => {
    const index = this.userList.findIndex(
      (user) => user.email == userData.email
    );
    console.log("the index", index);
    if (index >= 0) {
      console.log("Updating an existing user");
      this.userList[index] = userData;
      console.log(this.userList);
      return "update";
    } else {
      console.log("Create new user");
      this.userList.push(userData);
      console.log(this.userList);
      return "insert";
    }
  };
}
module.exports = UserLogin;
