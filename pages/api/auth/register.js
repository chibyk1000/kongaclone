import connectDB from "../../../utils/dbconnection";
import DataSet  from '../../../models/userModel'
import passwordschema from '../../../utils/password'
import emailvalidator from 'email-validator'
import bycrypt from 'bcrypt'
connectDB()

const registeruser = async (req, res) => {
    switch (req.method) {
        case "POST":
            await register(req, res)
            break
            
           
    
        default:
            break;
    }
}

const register = async (req, res) => {
    try {
     const {f_name,l_name, email, password, phone} = req.body 
    
        
        if (!f_name, !l_name || !email || !password || !phone) {
           return res.status(400).json({
             message: "please fill in all inputs",
             type: "empty",
           });
        }
        if (!emailvalidator.validate(email)) {
            return res
              .status(400)
              .json({
                message: "please enter a valid email address",
                type: "email",
              });
        }
        if (!passwordschema.validate(password)) {
            return res
              .status(400)
              .json({
                message: passwordschema.validate(password, {details: true}), 
                type: "password",
              });
        }
        if (
          !/^(?:(?:(?:\+?234(?:\h1)?|01)\h*)?(?:\(\d{3}\)|\d{3})|\d{4})(?:\W*\d{3})?\W*\d{4}$/.test(
            phone
          )
        ) {
          return res.status(400).json({
            message: "Invalid phone number",
            type: "phone",
          });
        }
        if (phone < 11) {
            return res
              .status(400)
              .json({
                  message: "Your phone number must be 11 digits e.g 08023456789",
                  type: 'phone'
              });
        }
        const salt = await bycrypt.genSalt(10)
        const hashedPassword  = await bycrypt.hash(password, salt)
        const user = new DataSet({
            firstname: f_name,
            lastname: l_name,
            email: email,
            phone: phone,
            password: hashedPassword,
        })
        user.save()

        return res.status(200).json({message: "signup successful"})
    } catch (error) {
      console.log(error);
       res.status(500).json({ message: "internal server error" });
    }
}
export default registeruser