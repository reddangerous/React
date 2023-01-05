import React from 'react'
import LineItem  from './LineItem';

const ItemList = ({item, handleCheck, handleDelete}) => {
  return (
   
            <ul>
                {item.map((items)=> (
                    <LineItem
                    item ={items}
                    handleCheck = {handleCheck}
                    handleDelete = {handleDelete}
                    key = {item.id}
                />
            
                ))}
            </ul>
  )
}

export default ItemList