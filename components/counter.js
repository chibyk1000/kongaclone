import { useState } from "react";
import { useDispatch, } from "react-redux";
import { incrementQuantity, decrementQuantity, addToCart } from "../store/cartSlice";
const Counter = ({ item}) => {
  const dispatch = useDispatch()
  
  const quantity =  item?.quantity|| 0;
    const [num, setNum] = useState(quantity)
  const handleIncrease = () => {
  if (!item) {
    setNum((prev) => prev + 1);
    return
  }
    dispatch(incrementQuantity(item?._id))
   
    }
    const handleDecrease = () => {
      if (!item) {
        setNum((prev) => prev - 1)
        return
      }
      dispatch(decrementQuantity(item?._id));
   
     }
    return (
      <div className="border grid grid-cols-3 items-center w-[6rem] hover:shadow-lg">
        <button
          onClick={handleDecrease}
          className="   text-[1.2rem] border-r font-bold text-[#B5B5A8]"
        >
          -
        </button>
        <span className="text-[1rem] text-center border-r">
          {item?.quantity ||num}
        </span>
        <button onClick={handleIncrease} className="font-bold  text-[#B5B5A8]">
          +
        </button>
      </div>
    );
}
 
export default Counter;