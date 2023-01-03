import CartModel from "../../models/cartModel";
import DataSet from "../../models/userModel";

export default async function addCart(req, res) {
    switch (req.method) {
        case 'POST':
            addToCart(req, res)
            break
        default:
            break
    }
}


const addToCart = async (req, res) => {
    try {
         const { items } = req.body;
         console.log(req.cookies);
         if (!req.cookies.token) {
           return res.json({ message: "you are not logged in" });
         }
        const user_email = jwt.verify(
          req.cookies.token,
          process.env.USER_TOKEN
        ).email;
        const { _id } = await DataSet.findOne({ email: user_email });
        const cart = new CartModel({
          items: items,
          user_id: _id,
        });
        cart.save(); 
    } catch (error) {
        
    }
}