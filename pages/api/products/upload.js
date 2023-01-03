import connectDB from "../../../utils/dbconnection";



import ProductModel from "../../../models/productModels";
import cookie from "cookie";
import jsonwebtoken from "jsonwebtoken";
import bycrypt from "bcrypt";
import { validate } from "email-validator";
import axios from 'axios'
import uuid from "uuid"
connectDB();

const upload = async (req, res) => {
    switch (req.method) {

        case "POST":
            uploadProduct(req, res)
            break
        default:
            break
  }
};

const uploadProduct = async (req, res) => {
    try {
      const {
  title,
  brand,
  price,
  quantity,
          description,
        discount_price,
          image
        } = req.body

        if (!title, !brand, !price, !quantity, !description) {
            return res.status(400).json({message: "empty inputs"})
      }
      
   const   product_code =  Math.floor(Math.random() * 10E20)

        const newProduct = await new ProductModel({
          title,
          brand,
          price,
          quantity,
          description,
          image,
            discount_price,
          product_code
        });
      
      newProduct.save()
      return res.status(200).json({message: "success"})

    } catch (err) {
        res.status(500).json({message: "server error"})
console.log(err)
    }
    console.log(req.body)
}

export default upload;
