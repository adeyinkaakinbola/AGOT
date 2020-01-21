const router = require('express').Router();
const bcrypt = require('bcrypt');
const path = require('path');
const { User, Feed } = require('../models/data');

router.post('/register', (req, res) => {
  const {
 FirstName, Surname, UserName, Email, Password 
} = req.body;
  console.log(req.body);
  if (!FirstName || !Surname || !UserName || !Email || !Password) {
    res.send({ err: 'Please fill all fields!' });
  } else if (Password.length < 6) {
    res.send('Password should be at lease 6 characters.');
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
          .then(user => res.send('Registration Successful!'))
          .catch(err => console.log(err.stack));
      });
    });
  }
});

let imgName;
router.post('/newfeed', (req, res) => {
  const rename = (n) => {
    let filename;
    if (n.mimetype === 'image/jpeg') {
      filename = `${Date.now()}.jpeg`;
    } else if (n.mimetype === 'image/png') {
      filename = `${Date.now()}.png`;
    }
    return filename;
  };
  if (Object.keys(req.body).length > 0) {
    const { text, mood, photo } = req.body;
    const newFeed = new Feed({
      text,
      mood,
      photo: !photo ? '' : `../../../uploads/${photo}`
    });
    console.log(imgName);
    newFeed
      .save()
      .then(() => {
        res.send('Post successful!');
      })
      .catch(err => console.log(err));
  }
  if (req.files) {
    const { image } = req.files;
    imgName = rename(image);
    image.mv(path.join(__dirname, '../../../uploads', image.name));
  }
});

router.post('/getfeed', async (req, res) => {
  const getfeeds = await Feed.find({});
  res.send(getfeeds.reverse());
});
module.exports = router;
