import ItemList  from "./ItemList";
const Content = ({ item, handleCheck, handleDelete}) =>{   
    return(
        <main>
            {item.length ?(
                <ItemList 
                item={item}
                handleCheck = {handleCheck}
                handleDelete = {handleDelete} 
            />
            ) : (
                <p style={{marginTop: "2rem"}}>Your List is empty</p>)}
        </main>
    )
}
export default Content;