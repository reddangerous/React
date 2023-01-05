import Header  from './Header';
import SearchItem from './SearchItem';
import AddItem  from './AddItem';
import Content from './Content';
import Footer  from './Footer';
import './App.css';
import { useState } from "react";

function App() {
  
    const [items, setItem] = useState(JSON.parse(localStorage.getItem('item')));

    const [newItem, setNewItem] = useState('');
    const [search, setSearch] = useState('');

    const setAndSaveItems = (newItem) =>{
        setItem(newItem)
        localStorage.setItem("item", JSON.stringify(newItem));
        
    }
    const addItem =(item) =>{
        const id = items.length? items[items.length-1].id + 1 : 1;
        const myNewItem = {id, checked: false, item};
        const listItems = [...items, myNewItem];
        setAndSaveItems(listItems);
    }
    const handleCheck = (id) =>{
      const listItem= items.map((item) => item.id === id ?{ ...item,checked : !item.checked} : item);
            setAndSaveItems(listItem);
    }
    const handleDelete = (id) =>{
        const listItem = items.filter((item) => item.id !== id);
        setAndSaveItems(listItem);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!newItem) return;
        addItem(newItem);
        setNewItem('');

    }
   
  return (
    <div className="App">
    <Header title="Groceries List" />
    
    <AddItem 
    newItem = {newItem}
    setNewItem = {setNewItem}
    handleSubmit = {handleSubmit}
     />
     <SearchItem 
    search = {search}
    setSearch = {setSearch}
    />
    <Content 
    item = {items.filter(item =>((item.item).toLowerCase().includes(search.toLowerCase())))}
    handleCheck = {handleCheck}
    handleDelete = {handleDelete}
    />
    <Footer length={items.length} />
    </div>
  );
}

export default App;
