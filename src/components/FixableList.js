import React, { useState, useEffect } from "react";
import Input from "./Input";
import ListItem from "./ListItem";

const FixableList = () => {
  const [items, setItem] = useState([]);
  const [needEdit, setNeedEdit] = useState(-1);
  const handleInput = (input, idToEdit) => {
    if (idToEdit === -1) {
      let existed = 0;
      items.forEach((element) => {
        let clone1 = Object.assign({}, element);
        clone1.id = undefined;
        let clone2 = Object.assign({}, input);
        clone2.id = undefined;
        if (JSON.stringify(clone1.name) === JSON.stringify(clone2.name)) {
          // alert('item existed')
          alert("item existed");
          existed = 1;
        }
      });

      if (existed === 0) {
        input.id = items.length;
        setItem((items) => [...items, input]);
      }
    }
    else {
      let newItems = [...items];

      newItems[idToEdit] = {name: input.name, quantity: input.quantity, price: input.price, id: idToEdit}

      setItem(newItems)
    }
  };

  const handleItem = (listItem) => {
    setItem(listItem);
  };

  const handleEdit = (id) => {
    setNeedEdit(
      items.filter((item) => {
        return item.id === id;
      })[0]
    );
  };

  const handleDelete = (id) => {
    let newItems = [...items];

    newItems.splice(id, 1)
    for(let i = id; i < newItems.length;i++ ) {
      newItems[i].id -= 1;
    }
    setItem(newItems)
  };

  // useEffect(() => {
  //   console.log(items)
  // })
  return (
    <div>
      <Input handleInput={handleInput} inputEdit={needEdit ? needEdit : -1} />
      <ListItem
        listItems={items}
        handleItem={handleItem}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default FixableList;
//
