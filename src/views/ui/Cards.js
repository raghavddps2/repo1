import {
  Button,
  Row,
  Col,
  Container,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import Blog from "../../components/dashboard/Blog";

const menuItems = [
  {
      "description": "Great dal with awesome flavours",
      "id": 1,
      "name": "Dal Makhni",
      "price": 200,
      "url": "https://holycowvegan.net/wp-content/uploads/2016/06/vegan-dal-makhani-3.jpg"
  },
  {
      "description": "Great Paneer with awesome flavours",
      "id": 2,
      "name": "Paneer Makhni",
      "price": 300,
      "url": "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/05/paneer-makhani.jpg"
  },
  {
      "description": "Great Paneer with awesome flavours",
      "id": 3,
      "name": "Paneer Handi",
      "price": 200,
      "url": "https://static.toiimg.com/thumb/54713904.cms?imgsize=248047&width=800&height=800"
  },
  {
      "description": "Great Paneer with awesome flavours",
      "id": 4,
      "name": "Paneer korma",
      "price": 330,
      "url": "https://www.indianhealthyrecipes.com/wp-content/uploads/2014/07/paneer-korma-recipe-500x500.jpg"
  },
  {
      "description": "Great Paneer with awesome flavours",
      "id": 5,
      "name": "Laccha Paratha",
      "price": 50,
      "url": "https://www.vegrecipesofindia.com/wp-content/uploads/2018/10/lachha-paratha-1a.jpg"
  },
  {
    "description": "Great Paneer with awesome flavours",
    "id": 6,
    "name": "Veg Biriyani",
    "price": 350,
    "url": "https://www.indianveggiedelight.com/wp-content/uploads/2020/04/veg-biryani-instant-pot-featured.jpg"
  },
  {
    "description": "Great Paneer with awesome flavours",
    "id": 7,
    "name": "Burrito Bowl",
    "price": 300,
    "url": "https://www.acouplecooks.com/wp-content/uploads/2021/06/Burrito-Bowl-053.jpg"
  },
  {
    "description": "Great Paneer with awesome flavours",
    "id": 8,
    "name": "Gobi Munchurian",
    "price": 270,
    "url": "https://www.indianveggiedelight.com/wp-content/uploads/2017/06/gobi-manchurian-featured.jpg"
  }

]
const Cards = () => {

  const navigate = useNavigate();
  const placeOrder = () => {
    const data = {
      "restaurant_id":"RESTAURANT_1",
      "menu_ids": [1,4],
      "total_amount": 530,
      "table_id": 1
    }

    fetch(
        "http://192.168.25.146:5000/placeOrder",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then((res) => res.json())
        .then((json) => {
            console.log(json)
            if(json["message"] === "Order Placed"){
                alert("Order Placed Successfully")
                navigate("/menu")
            }
            else{
                alert("Some error occurred!")
            }
        })
}

  return (
    <div>
      
      <Container>
      <h5 className="mb-3">We welcome you, here's your menu!</h5>
      <Row>
        {menuItems.map((item, index) => (
          <Col sm="6" lg="6" xl="3" key={index}>
            <Blog
              image={item.url}
              title={item.name}
              price={item.price}
              text={item.description}
            />
          </Col>
        ))}
      </Row>
      <Button className="btn" color="primary" size="lg" block onClick={placeOrder}>
          Place Order
      </Button>
      </Container>
    </div>
  );
};

export default Cards;
