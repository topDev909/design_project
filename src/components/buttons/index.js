import React, {useState} from 'react';
import { Card, Button, Form, Modal, Row, Col, FloatingLabel} from "react-bootstrap";

import { FiPlus } from "react-icons/fi";
import { FiEdit2 } from 'react-icons/fi';

export function PersonalInfoBtn() {
    const [show, setShow] = useState(false);

    const handleClose = () => {
      setShow(false);
    }

    const handleShow = () => {
      setShow(true);
      console.log('plus button clicked');
    }


    return (  
      <Card className="PersonalInfoBtn col mx-1 mb-2">
        <Card.Body className="d-flex flex-row justify-content-between align-items-center">
          <div className="PersonalInfoBtn-title">
            <p>Personal</p>
            <p>Information</p> 
          </div>
          <Button className="bg-primary-1" onClick={handleShow}><FiPlus/></Button>          
        </Card.Body>     
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Personal Information</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Row>
                <Form.Group className="mb-3 col-4" controlId="firstBasicName">
                <Form.Control type="text" name="firstName" placeholder="First Name" required />
                </Form.Group> 
                <Form.Group className="mb-3 col-4" controlId="middleBasicName">
                  <Form.Control type="text" name="middleName" placeholder="Middle Name" required/>
                </Form.Group>   
                <Form.Group className="mb-3 col-4" controlId="LastBasicName">
                  <Form.Control type="text" name="lastName" placeholder="Last Name" required/>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group className="mb-3 col-4" controlId="formBasicPassword">
                  <Form.Select>
                  <option selected>Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  </Form.Select>             
                </Form.Group>
                <Form.Group className="mb-3 col-4" controlId="formBasicPassword">
                  <Form.Select>
                  <option>Select the option</option>
                  <option></option>
                  <option>Select the option</option>
                  <option>Select the option</option>
                  <option>Select the option</option>
                  </Form.Select>             
                </Form.Group>
              </Row>  
              <Row>
                <Form.Group className="mb-3 col-5" controlId="firstBasicName">
                  <Form.Control type="email" name="email" placeholder="Email Address" required/>
                </Form.Group> 
                <Form.Group className="mb-3 col-3" controlId="formBasicPassword">
                  <Form.Select>
                  <option>Code</option>
                  <option>+91</option>
                  <option>+1</option>
                  </Form.Select>             
                </Form.Group>
                <Form.Group className="mb-3 col-4" controlId="firstBasicName">
                  <Form.Control type="text" name="phone" placeholder="Mobile Number" />
                </Form.Group> 

              </Row>  
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Submit
            </Button>
          </Modal.Footer>
      </Modal>
      </Card>       
    );
  }



  