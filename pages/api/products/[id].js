import connectDB from "../../../utils/dbconnection";

import ProductModel from "../../../models/productModels";
import cookie from "cookie";
import jsonwebtoken from "jsonwebtoken";
import bycrypt from "bcrypt";
import { validate } from "email-validator";
import axios from "axios";

connectDB();


const request = async (req, res) => {
    switch (req.method) { 

        case "GET":
            getProduct(req, res)
            break
        default:
            break

            
    }
}

const getProduct = async (req, res) => {
    try {
        console.log(req.query)
        const {id} = req.query
        const product = await ProductModel.findOne({ title: id })
     return res.status(200).json(product)
    } catch (error) {
        
    }
} 


export default request