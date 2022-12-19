import { Image, Card, Form, Button, Row, Col } from "react-bootstrap";
import BrandKH from '../../assets/images/K.png';
import Badge from 'react-bootstrap/Badge';
import FIU from '../../assets/images/FIU.png';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FiEdit2 } from 'react-icons/fi';
import { FiMapPin } from "react-icons/fi";


export function UniverstiyCard(){
  return(    
    <Form className="UniversityCard">
      <Row className="m-2">
        <Form.Group className="mb-3 col-12" controlId="firstBasicName">
          <Row className="badgeInfo mt-3">
            <Col md={8} className="badgeInfoPad">
              <p className="first">Priority1</p>
              <p className="second">Masters</p>
              <p className="third">Spring2022</p>
            </Col>
            <Col md={4}>
              <Button><FiEdit2/>Update Status</Button>
            </Col>
          </Row>      
        </Form.Group> 
      </Row>
      <Row className="m-2">
        <Form.Group className="mb-3 col-5 brandShowDashboard">
          <div className="brandShowPart">
            <Image src={FIU} width="64" alt="Avatar"/>
            <div className="Brandtitle ms-2">
              <div className="brandShowPart-content mb-1">
                <div>Florida International University</div>
                <div>Masters in Data Science and Visualization</div>
              </div>
              <div className="brandShowPart-position mb-1"><FiMapPin/>Chicago, IL</div>
            </div> 
          </div>     
          <div className="brandAuthorContainer">
            <div className="brandStatus">Status</div>
            <div className="brandStatusValue">i-20 issued from university</div>
          </div>
          <div className="brandStatusDate">20 Sep 2022, 01:40 PM</div>
        </Form.Group> 
      </Row>   
      <Row className="pb-3 m-2">
        <div className="col-4">
          <Button variant="primary" type="submit">
            Request Documents
          </Button>        
        </div>
        <div className="col-4">
          <Button variant="primary" type="submit">
            Request Payments
          </Button>
        </div>
        <div className="col-4">
          <Form.Select>
            <option>Priority</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </div>
      </Row>
    </Form>
  );
}

export function UniversityCardWhite() {
  return(
    <Form className="UniversityCardWhite">
      <Row className="m-2">
        <Form.Group className="mb-3 col-12 White" controlId="firstBasicName">
          <Row className="badgeInfoWhite mt-3">
            <Col md={8} className="badgeInfoPadWhite">
              <p className="first">Priority1</p>
              <p className="second">Masters</p>
              <p className="third">Spring2022</p>
            </Col>
            <Col md={4}>
              <Button><FiEdit2/>Update Status</Button>
            </Col>
          </Row>      
        </Form.Group> 
      </Row>
      <Row className="m-2">
        <Form.Group className="mb-3 col-5 brandShowDashboardWhite">
          <div className="brandShowPartWhite">
            <Image src={FIU} width="64" alt="Avatar"/>
            <div className="BrandtitleWhite ms-2">
              <div className="brandShowPart-content-White mb-1">
                <div>Florida International University</div>
                <div>Masters in Data Science and Visualization</div>
              </div>
              <div className="brandShowPart-position-White mb-1"><FiMapPin/>Chicago, IL</div>
            </div> 
          </div>     
          <div className="brandAuthorContainerWhite">
            <div className="brandStatusWhite">Status</div>
            <div className="brandStatusValueWhite">i-20 issued from university</div>
          </div>
          <div className="brandStatusDateWhite">20 Sep 2022, 01:40 PM</div>
        </Form.Group> 
      </Row>   
      <Row className="pb-3 m-2 white">
        <div className="col-4">
          <Button variant="primary" type="submit">
            Request Documents
          </Button>        
        </div>
        <div className="col-4">
          <Button variant="primary" type="submit">
            Request Payments
          </Button>
        </div>
        <div className="col-4">
          <Form.Select>
            <option>Priority</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </div>
      </Row>
    </Form>
  );
}
