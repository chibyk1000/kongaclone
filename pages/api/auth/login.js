import connectDB from "../../../utils/dbconnection";
import DataSet from "../../../models/userModel";
import cookie from 'cookie'
import jsonwebtoken  from 'jsonwebtoken'
import bycrypt from "bcrypt";
import { validate } from "email-validator";
connectDB();

const loginuser =  async (req, res) => {
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

    const { emailorphone, password } = body;
    // console.log(emailorphone)

    if (!emailorphone || !password) {
      return res.status(400).json({
        message: "empty inputs",
      });
    }

      let phone;

    if (emailorphone.startsWith("+")) {
      phone = emailorphone.slice(1, emailorphone.length);
      }
      
      if (emailorphone.startsWith('0')) {
          phone = "234" + emailorphone.slice(1, emailorphone.length);
      }
      
      const userExist = await DataSet.findOne({ $or: [{ phone: phone }, { email: emailorphone }] });
      if (!userExist) {
          return res.status(400).json({ message: 'User not found' })
      }
      
      const isValidPass = bycrypt.compareSync(password, userExist.password)
      if (!isValidPass) {
          return res.status(400).json({ message: 'incorrect password' })
      }
      // console.log(userExist)
    const token = jsonwebtoken.sign({ email:userExist.email }, process.env.USER_TOKEN)
    const serialize = cookie.serialize('token', token, {
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
    res.status(500).json({message: "internal server error"})
  }
};
export default loginuser