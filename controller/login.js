const User = require("../model/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.user_login = async (req, res) => {
  console.log("hej");
  try {
    const { username, password } = req.body;

    if (!(username && password)) {
      res.status(400).send("All input is required");
    }
    const user = await User.findOne({ username });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { user_id: user._id, username },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      user.token = token;

      res.status(200).json(user);
    }
  } catch (err) {
    console.log(err);
  }
};
