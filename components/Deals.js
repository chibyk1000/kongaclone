import Link from "next/link";

const Deals = ({items, header, classProp, headerClass}) => {
    return (
      <section className="mt-40">
        <header className={`flex ${classProp} h-12 items-center pl-4 border-b border-black`}>
          <h2 className={`mr-4 ${headerClass} font-bold text-xl`}>{ header}</h2>
          <Link href="/">
            <a className={`${headerClass} text-[0.75rem] hover:underline `}>
              See All Items
            </a>
          </Link>
        </header>
        <div className="grid md:grid-cols-3 grid-cols-small md:grid-rows-2 overflow-auto  md:gap-3 h-[20rem] bg-white p-5">
                {items.map((card) => {
              return (
                <div
                  className="grid md:grid-cols-card   shadow-myshadow shadow-[#ccc]  bg-white md:p-2 items-center rounded-md hover:shadow-myshadowhover transition-all duration-700 hover:shadow-[#bbb] md:grid-rows-card grid-rows-2    md:gap-0"
                  key={card.id}
                >
                  <div className="h-full">
                    <img
                      src={card.img}
                      alt=""
                      className="md:w-full w-[15rem] h-[6rem] md:h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm">{card.desc.substring(0, 20)}...</h3>
                    <span className="font-bold mr-4 text-[.8rem] md:text-sm">
                      ₦ {card.price}
                    </span>
                    <span className="line-through md:text-sm text-[.8rem] text-[gray] hidden md:block">
                      ₦ {card.prev_price}
                    </span>
                  </div>
                </div>
              );
          })}
        </div>
      </section>
    );
}
 
export default Deals