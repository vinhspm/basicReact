import React, { useEffect, useRef, useState } from "react";
import "react-bootstrap";
import { Form, Button, ListGroup } from "react-bootstrap";
import useUpdatableState from '@landisdesign/use-updatable-state';
import "bootstrap/dist/css/bootstrap.min.css";
import "./ListItem.css";
function ListItem(props) {
  // const [listItems, setList] = useState(props.listItems);
  // useEffect(() => {
  //   setList(props.listItems)
  //   console.log(listItems)
  //   console.log(props.listItems)
  // },[props.listItems]);
  
  const handleEdit = (id) => {
    props.handleEdit(id)
  }

  const handleDelete = (id) => {
    props.handleDelete(id);
  }

  const totalPriceItem = () => {
    let total = 0;
    props.listItems.forEach(element => {
      total += element.quantity * element.price;      
    });
    return total;
  }
  const SingleItem = (itemData) => {
    return (
      <ListGroup.Item className="list-item">
        <span>{itemData.message.name}</span>
        <span>{itemData.message.quantity}</span>
        <span>{itemData.message.price}</span>
        <div className='button-group'>
          <Button onClick={() => handleEdit(itemData.message.id)} variant="success">
            Edit
          </Button>
          <Button onClick={() => handleDelete(itemData.message.id)} variant="danger">
            Delete
          </Button>
        </div>
      </ListGroup.Item>
    );
  };
  return (
    <div>
      <ListGroup>
        <ListGroup.Item className="list-item">
          <span>Name</span>
          <span>Quantity</span>
          <span>Price</span>
        </ListGroup.Item>
        {props.listItems.map((message) => (
          <SingleItem
            key={message.id}
            message={message}
          />
        ))}
        <ListGroup.Item className="list-item">
          <span>Total: {totalPriceItem()}</span>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default ListItem;
