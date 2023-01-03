import Cart from '../svgs/Cart.js'

const EmptyCart = () => {



    return (
      <div className="">
        <div className="max-w-[24rem] bg-white shadow-lg h-64 mx-auto mt-16 flex justify-center items-center">
          <div className="">

                    <div className='w-fit mx-auto mb-10'>

            <Cart />
                    </div>

            <p className="text-center font-bold text-[.83rem]">
              Your cart is empty.
            </p>
            <p className="text-center text-[.83rem]">
              You have not added any item to your cart.
            </p>
          </div>
        </div>
      </div>
    );

}


export default EmptyCart