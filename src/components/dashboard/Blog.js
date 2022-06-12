import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Button,
  Col,
  Row
} from "reactstrap";
import {useState} from "react";

const Blog = (props) => {
  const [quantity, setQuantity] = useState(0);

  const decQuantity = () => {
    if(quantity < 1){
      return;
    }
    setQuantity(quantity-1);
  }

  const addQuantity = () => {
    setQuantity(quantity+1);
  }
  const styles = {
    card: {
      width:"1200",
      padding: '1rem'
    },
    cardImage: {
      objectFit:'fit',
      width: '17vw',
      height: '30vh'
    }
  }
  return (
    <Card  variant="outlined">
      <CardImg alt="Card image cap" src={props.image} style={styles.cardImage}/>
      <CardBody className="p-4">
        <CardTitle tag="h5">{props.title}</CardTitle>
        <CardSubtitle>{"Rs " + props.price}</CardSubtitle>
        <CardText className="mt-3">{props.text}</CardText>
        <Row justify-content>
          <Col justify-content>
            <div><Button color={props.color} onClick={decQuantity}>Remove Item</Button></div>
            <div><h3>{quantity}</h3></div>
            <div><Button color={props.color} onClick={addQuantity}>Add Item</Button></div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default Blog;
