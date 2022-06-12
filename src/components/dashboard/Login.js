import {
    Card,
    Col,
    CardBody,
    Button,
    FormGroup,
    Label,
    Input,
  } from "reactstrap";

  import { useNavigate } from "react-router-dom";
  import {useState} from "react";
  const Blog = (props) => {
    
    const [phoneNumber, setPhoneNumber] = useState("");
    const [otp, setOtp] = useState("");



    const navigate = useNavigate();


    const sendOtp = () => {
        console.log(phoneNumber)
        fetch(
            "http://192.168.25.146:5000/getOtp",{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "number": "+"+phoneNumber
                })
            })
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                if(json["message"] === "OTP Sent successfully"){
                    alert("OTP Sent Successfully")
                }
                else{
                    alert("Sending OTP Failed")
                }
            })
    }

    const verifyOtp = () => {
        fetch(
            "http://192.168.25.146:5000/verifyOtp",{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "number": "+"+phoneNumber,
                    "otp":otp
                })
            })
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                if(json["isSuccess"] === true){
                    alert("OTP verified successfully")
                    navigate("/menu");
                }
                else{
                    alert("OTP verification failed")
                }
            })
    }
  
    return (
      <Card>
        <CardBody className="p-4">
        <FormGroup>
            <Label for="phoneNumber">Phone Number</Label>
            <Col>
                <Input
                    id="phoneNumber"
                    name="phone"
                    placeholder="Please enter your mobile number"
                    type="phone"
                    onChange={e => setPhoneNumber(e.target.value)}
                />
                <br></br>
                <Button className="btn" color="primary" size="sm" onClick={sendOtp}>
                    Send OTP
                </Button>
            </Col>
            <br></br>
            <Label for="otp">One Time Password</Label>
            <Input
                id="otp"
                name="otp"
                placeholder="Please enter the OTP"
                type="number"
                onChange={e => setOtp(e.target.value)}>
            </Input>
            <br></br>
            <Button className="btn" color="primary" size="sm" onClick={verifyOtp}>
                    Verify OTP
            </Button>
        </FormGroup>
        </CardBody>
      </Card>
    );
  };
  
  export default Blog;
  