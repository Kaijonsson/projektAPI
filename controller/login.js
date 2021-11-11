const User = require("../model/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.user_login = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(req.body);

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
      res.status(200).send({
        status: "200",
        user: {
          username: username,
          token: token,
        },
      });
    } else {
      res.status(400).send({
        message: "No matching user found",
      });
    }
  } catch (err) {
    console.log(err);
  }
};
