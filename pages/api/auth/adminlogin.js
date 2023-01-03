import connectDB from "../../../utils/dbconnection";
import DataSet from "../../../models/userModel";
import cookie from 'cookie'
import jsonwebtoken  from 'jsonwebtoken'
import bycrypt from "bcrypt";
import { validate } from "email-validator";
connectDB();

const adminlogin =  async (req, res) => {
  switch (req.method) {
    case "POST":
      await login(req, res);
      break;

    default:
      break;
  }
};

const login = async (req, res) => {
  try {
    const { body } = req.body;

    const { email, password } = body;
    // console.log(emailorphone)

    if (!email || !password) {
      return res.status(400).json({
        message: "empty inputs",
      });
    }

      
      const userExist = await DataSet.findOne({ email: email  });
      if (!userExist) {
          return res.status(400).json({ message: 'User not found' })
      }
      
      if (userExist.role !== 'admin') {
           return res.status(400).json({ message: "you are not an admin" });
      }
      const isValidPass = bycrypt.compareSync(password, userExist.password)
      if (!isValidPass) {
          return res.status(400).json({ message: 'incorrect password' })
      }

      
      // console.log(userExist)
    const token = jsonwebtoken.sign({ email:userExist.email }, process.env.USER_TOKEN)
    const serialize = cookie.serialize('admin_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV != 'development',
      maxAge: 24 * 60 * 60,
      sameSite: "strict",
      path: '/'
    })

    res.setHeader("Set-Cookie", serialize)
    
     res.status(200).json({message: 'success '})
  } catch (error) {
      console.log(error)
       res.status(500).json({ message: "internal server error" });
  }
};

export default adminlogin