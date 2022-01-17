const UserLogin = require("./service");

class UsersInfo {
  userLogin;

  constructor(userLogin) {
    this.userLogin = new UserLogin();
  }
  post = (req, res) => {
    const userData = req.body.userData;
    console.log("in controller");
    try {
      if (!userData.name || !userData.email || !userData.imageUrl) {
        res.status(400).send("params are missing");
      } else {
        const ans = this.userLogin.updateAndInsert(userData);
        ans === "insert"
          ? res.status(201).send("user create and logged in")
          : res.status(200).send("user update and logged in");
      }
    } catch (ex) {
      res.status(500).send(ex);
    }
  };
}

module.exports = UsersInfo;
