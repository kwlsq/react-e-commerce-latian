import React from 'react';
import {
  Card, CardImg, CardTitle, CardSubtitle,
   Button
} from 'reactstrap';
import './Card.css';

const Cards = (props) => {
  return (
    <div className="w-25">
      <Card className="card-item" body outline color="primary">
      <CardImg  width="100%" src={props.gambar} alt="Card image cap"></CardImg>
      <CardTitle>{props.nama}</CardTitle>
      <CardSubtitle>Harga : {props.harga}</CardSubtitle>
      <Button>Add to Cart</Button>
      </Card>
    </div>
  );
};

export default Cards;

