const router = require("express").Router();
const User = require("../models/data");
const bcrypt = require("bcrypt");

router.post("/register", (req, res) => {
  const { FirstName, Surname, UserName, Email, Password } = req.body;
  console.log(req.body);
  if (!FirstName || !Surname || !UserName || !Email || !Password) {
    res.send({ err: "Please fill all fields!" });
  } else if (Password.length < 6) {
    res.send("Password should be at lease 6 characters.");
  } else {
    const newUser = new User({
      FirstName,
      Surname,
      UserName,
      Email,
      Password
    });
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(Password, salt, (err, hash) => {
        if (err) throw err;
        newUser.Password = hash;
        newUser
          .save()
          .then(user => res.send("Registration Successful!"))
          .catch(err => console.log(err.stack));
      });
    });
  }
});

module.exports = router;
