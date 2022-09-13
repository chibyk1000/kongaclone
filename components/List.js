const List = ({list, headings}) => {
    return (
      <div>
            <h3 className="text-[#B5B5A8] font-bold">{ headings}</h3>
            <ul className="text-[#B5B5A8] text-[.8rem]">
                
                {
      
                    list.map((items, index) => {
                        
                        return (<li className="my-3" key={index}>
                            <a href="">{items }</a>
                        </li>)
                    })}
    
        </ul>
      </div>
    );
}
 
export default List;

<div>

</div>