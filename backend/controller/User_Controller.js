import User from "../model/User.js";
import bcrypt from 'bcryptjs'
export const saveUser = async (req, res) => {
  const { firstName, lastName, email, phoneNumber, password } = req.body;

  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (password.length < 8) {
    return res.status(400).json({ error: "Password must be at least 8 characters long" });
  }
  if (!passwordRegex.test(password)) {
    return res.status(400).json({
      error: "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character",
    });
  }
  const hashPass = bcrypt.hashSync(password, 10);
  console.log(hashPass)
  const newUser = new User({
    firstName,
    lastName,
    email,
    phoneNumber,
    password: hashPass
  });


  try {
    const user = await newUser.save();
    res.status(201).json({
      success: true,
      data: user,
      message: "User Created Successfully"
    })
  }
  catch (e) {
    res.status(500).json({
      success: false,
      message: e.message
    })
  }
}
export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    res.status(404).json({
      message: `User with email ${email} not found`
    })
  }

  const isMatched = bcrypt.compareSync(password, user.password);
  if (isMatched) {
    res.status(200).json({
      success: true,
      user: {
        fullName: user.firstName + " " + user.lastName
      },
      message: "Login successful!"
    })
  }
}
export const getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      success: true,
      data: users,
      message: "Users Fetched Successfully!"
    })
  }
  catch (e) {
    res.status(500).json({
      success: false,
      message: e.message
    })
  }
}