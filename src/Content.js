import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Content = () =>{
    
    const [item, setItem] = useState([
        {
            id:1,
            checked: false,
            item: "One Half Bottle of Cola"
        },
        {
            id: 2,
            checked: false,
            item: "Cabagges"
        },
        {
            id:3,
            checked: false,
            item: "Potatoes"
        }
    ]);

    const handleCheck = (id) =>{
      const listItem= item.map((item) =>
            item.id === id ?{ ...item,checked : !item.checked} : item);
         setItem(listItem);
         localStorage.setItem("item", JSON.stringify(listItem));
    }
    const handleDelete = (id) =>{
        const listItem = item.filter((item) => item.id !== id);
        setItem(listItem);
        localStorage.setItem("item", JSON.stringify(listItem));
    }
   
    return(
        <main>
            <ul>
                {item.map((item)=> (
                    <li className="item" key = {item.id}>
                        <input type="checkbox" onChange={() => handleCheck(item.id)} checked={item.checked}/>
                        
                    <label>
                        {item.item}
                    </label>
                    <FaTrashAlt role={"button"} 
                    className="trash"
                     tabIndex= "0"
                     onClick={() => handleDelete(item.id)}
                     />
                    </li>
                ))}
            </ul>
        </main>
    )
}
export default Content;