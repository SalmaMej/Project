import React from 'react';
import {Card, Button} from 'react-bootstrap';
import img1 from "../../img/tunisianSweet.jpg";
import img2 from "../../img/biscuits.jpg";
import img3 from "../../img/cupcake.jpg";
import img4 from "../../img/popcake2.jpg";


const Cart = () => {
  return (
   <div className="cart-container">
    <div className="cart">
      <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src="holder.js/100px180" src={img1} />
         <Card.Body>
            <Card.Title>Tunisian sweets</Card.Title>
            <Card.Text>
               Price: 48 dt 
            </Card.Text>
            <Button variant="primary">Add to Cart</Button>
         </Card.Body>
      </Card>  
      <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src="holder.js/100px180" src={img2} />
         <Card.Body>
            <Card.Title>Biscuits</Card.Title>
            <Card.Text>
               Price: 20 dt
            </Card.Text>
            <Button variant="primary">Add to Cart</Button>
         </Card.Body>
      </Card>  
      <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src={img3} />
         <Card.Body>
            <Card.Title>Cupcake</Card.Title>
            <Card.Text>
               Price: 2 dt
            </Card.Text>
            <Button variant="primary">Add to Cart</Button>
         </Card.Body>
      </Card>  <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src={img4} />
         <Card.Body>
            <Card.Title>Popcake</Card.Title>
            <Card.Text>
               Price: 2 dt
            </Card.Text>
            <Button variant="primary">Add to Cart</Button>
         </Card.Body>
      </Card>  
   </div>
   <div className="total">
      <h2>Total added to the cart</h2>
   </div>
    </div>
    )
};

export default Cart;
