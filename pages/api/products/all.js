import connectDB from "../../../utils/dbconnection";

import ProductModel from "../../../models/productModels";
import cookie from "cookie";
import jsonwebtoken from "jsonwebtoken";
import bycrypt from "bcrypt";
import { validate } from "email-validator";
import axios from "axios";
connectDB();

const products = async (req, res) => {
  switch (req.method) {
    case "GET":
      getProduct(req, res);
      break;
    default:
      break;
  }
};



const getProduct = async (req, res) => {
    try {
      
        const products = await ProductModel.find()

        res.status(200).json(products)
    } catch (error) {
res.status(500).json({message: "internal server error"})
    }
}

export default products



