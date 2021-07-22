import React, { useEffect, useState } from "react";
import "react-bootstrap";
import {
  Form,
  Button
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Input.css";
function Input(props) {
  const [val, setVal] = useState({name: '', quantity: '', price: ''})
  const [idToEdit, setIdToEdit] = useState(-1)
  const handleChange = (e) => {
    const { name, value } = e.target;
            setVal(prevState => ({
                ...prevState,
                [name]: value
            }));
  }
  const handleSubmit = (event) => {

    props.handleInput(val, idToEdit)
    setVal({name: '', quantity: '', price: ''})
    setIdToEdit(-1)
    event.preventDefault()

  }
  useEffect(() => {
    if(props.inputEdit !== -1) {
      setVal({name: props.inputEdit.name, quantity: props.inputEdit.quantity, price: props.inputEdit.price })
      setIdToEdit(props.inputEdit.id)

    }
  }, [props.inputEdit])
  return (
    <Form className="container" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Item name</Form.Label>
        <Form.Control name='name' onChange={handleChange} type="text" required placeholder="Enter name" value={val.name}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="quantity">
        <Form.Label>Quantity</Form.Label>
        <Form.Control name='quantity' onChange={handleChange} type="number" required placeholder="Enter quantity" value={val.quantity}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="price">
        <Form.Label>Price</Form.Label>
        <Form.Control name='price' onChange={handleChange} type="number" required placeholder="Enter price" value={val.price}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="submit" id="submit-container">
        <Form.Label></Form.Label>
        <Button type='submit' variant="primary">
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
}

export default Input;
