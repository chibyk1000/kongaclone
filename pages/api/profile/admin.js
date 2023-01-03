import connectDB from "../../../utils/dbconnection";
import DataSet from "../../../models/userModel";
import cookie from "cookie";
import { verify } from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

import passwordschema from "../../../utils/password";
import emailvalidator from "email-validator";
import bycrypt from "bcrypt";

connectDB();
const adminProfile =  async (req, res) => {
  switch (req.method) {
    case "GET":
      await getProfile(req, res);

      break;
    case "PUT":
      await updateProfile(req, res);
      break;
    default:
      break;
  }
};

const getProfile = async (req, res) => {
  try {
    if (!req.cookies) {
      return res.status(400).json({ message: "you are not logged " });
    }

    if (!req.cookies.admin_token) {
      return res.status(400).json({ message: "invalid token" });
    }

    const { email } = verify(req.cookies.admin_token, process.env.USER_TOKEN);

    if (!email) {
      return res.status(400).json({ message: "you must be logged in" });
    }

    const user = await DataSet.findOne({ email: email });

    res.status(200).json({ message: user });
  } catch (error) {
    res.status(500).json({ message: "error" });
    console.log(error)
  }
};

const updateProfile = async (req, res) => {
  try {
    if (!req.cookies) {
      return res.status(400).json({ message: "you are not logged " });
    }

    if (!req.cookies.adminToken) {
      return res.status(400).json({ message: "invalid token" });
    }

    const { email: tokenEmail } = verify(
      req.cookies.token,
      process.env.USER_TOKEN
    );

    if (!tokenEmail) {
      return res.status(404).json({ message: "you must be logged in" });
    }
    const {
      firstname,
      lastname,
      email,
      password,
      newPassword,
      confirmNewPassword,
    } = req.body;

    if (!emailvalidator.validate(email)) {
      return res.status(400).json({
        message: "please enter a valid email address",
        type: "email",
      });
    }

    if (password && newPassword) {
      if (newPassword != confirmNewPassword) {
        return res
          .status(400)
          .json({ messsage: "password doesnt match", type: "password" });
      }

      if (!passwordschema.validate(newPassword)) {
        return res.status(400).json({
          message: passwordschema.validate(password, { details: true }),
          type: "password",
        });
      }

      const update = await DataSet.updateOne(
        { email: email },
        {
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: newPassword,
        }
      );
    }

    console.log(req.body);
    const update = await DataSet.updateOne(
      { email: email },
      {
        firstname: firstname,
        lastname: lastname,
        email: email,
      }
    );
    return res.status(200).json({ message: "update successful" });
  } catch (error) {
    console.log(error);
  }
};


export default adminProfile