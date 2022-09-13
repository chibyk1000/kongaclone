import Link from "next/link";

const Deals = ({items, header, classProp, headerClass}) => {
    return (
      <section>
        <header className={`flex ${classProp} h-12 items-center pl-4 border-b border-black`}>
          <h2 className={`mr-4 ${headerClass} font-bold text-xl`}>{ header}</h2>
          <Link href="/">
            <a className={`${headerClass} text-[0.75rem] hover:underline `}>
              See All Items
            </a>
          </Link>
        </header>
        <div className="grid grid-cols-3 grid-rows-2 gap-3 h-[20rem] bg-white p-5">
                {items.map((card) => {
              return(
            <div className="grid grid-cols-card  shadow-myshadow shadow-[#ccc]  bg-white p-2 items-center rounded-md hover:shadow-myshadowhover transition-all duration-700 hover:shadow-[#bbb] grid-rows-card " key={card.id} >
              <div className="h-full">
                <img
                  src={card.img}
                  alt=""
                  className="w-full h-f"
                />
              </div>
              <div>
                          <h3 className="text-sm">{ card.desc}</h3>
                          <span className="font-bold mr-4">₦ { card.price}</span>
                <span className="line-through text-sm text-[gray]">
                  ₦ {card.prev_price}
                </span>
              </div>
                  </div>
              )
          })}
        </div>
      </section>
    );
}
 
export default Deals