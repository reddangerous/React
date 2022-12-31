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
        setItem(item.map((item) =>{
            if(item.id === id){
                item.checked = !item.checked
            }
            return item
        }))
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
                    <FaTrashAlt role={"button"} className="trash" tabIndex= "0"/>
                    </li>
                ))}
            </ul>
        </main>
    )
}
export default Content;