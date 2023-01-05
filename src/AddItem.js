import React from 'react'
import { useRef } from 'react';
import {FaPlus} from 'react-icons/fa';
const AddItem = ({newItem, setNewItem, handleSubmit}) => {
const inputRef = useRef(); 
    return (
 <form className='addform' onSubmit={ (e) => handleSubmit(e) }>
<label htmlFor="item">Add Item</label>
<input
        autoFocus
        ref={inputRef}
        type="text"
        id = "addIitem"
        placeholder='Add Item'
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
     
/>
<button
        type="submit"
        aria-label='Add Item'
         onClick = {() => inputRef.current.focus()}>
  <FaPlus />          
</button>
 </form> 
  )
}

export default AddItem