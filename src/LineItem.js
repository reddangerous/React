import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
function LineItem({item, handleCheck, handleDelete}) {
  return (
  
                    <li className="item">
                        <input type="checkbox" onChange={() => handleCheck(item.id)} checked={item.checked}/>
                        
                    <label
                    style={{textDecoration: item.checked ? "line-through" : null}}
                    onDoubleClick={() => handleCheck(item.id)}>
                        {item.item}
                    </label>
                    <FaTrashAlt role={"button"} 
                    className="trash"
                     tabIndex= "0"
                     aria-label={`Delete ${item.item}`}
                     onClick={() => handleDelete(item.id)}
                     />
                    </li>
    )
}

export default LineItem