import React, {useState} from 'react';

function NewTodoForm({ onSubmit}){

    const [ newItem, setNewItem] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newItem === "") return
        onSubmit(newItem)
        setNewItem("")
      };

    return (
    <form className="new-item-form" onSubmit = {handleSubmit}>
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input 
          onChange={event => setNewItem(event.target.value)}
          value={newItem} 
          type="text" 
          id="item"/>
        </div>
        <button className="btn"
      >Add</button>
    </form>
    )
};

export default NewTodoForm;