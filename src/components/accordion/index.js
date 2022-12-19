import {Accordion, Col, Row, Image, Button, Form, Badge } from 'react-bootstrap';
import Aavatar from '../../assets/avatars/1.png';
import { FiSend } from "react-icons/fi";
import { DetailInfo } from '../avatars';

import './detail.css';


export function Accordions({type, noteData, alertData}) {

  noteData = [
    {name: "Gwen Stacy", content: "Student has told to call back. I have called and explained about the USA universities and helped student on paying registration fee."},
    {name: "Gwen Stacy", content: "Student has told to call back. I have called and explained about the USA universities and helped student on paying registration fee."},
    {name: "Gwen Stacy", content: "Student has told to call back. I have called and explained about the USA universities and helped student on paying registration fee."},
    {name: "Gwen Stacy", content: "Student has told to call back. I have called and explained about the USA universities and helped student on paying registration fee."},
    {name: "Gwen Stacy", content: "Student has told to call back. I have called and explained about the USA universities and helped student on paying registration fee."},
    {name: "Gwen Stacy", content: "Student has told to call back. I have called and explained about the USA universities and helped student on paying registration fee."},
  ];

  alertData = [
    {title: "Received i20 for Cleveland State University.", date: "8 mins ago"},
    {title: "Please upload your test scores as soons as possible.", date: "8 mins ago"},
    {title: "Please upload your test scores as soons as possible.", date: "8 mins ago"},
    {title: "Please upload your test scores as soons as possible.", date: "8 mins ago"},
  ];

  const NoteComponent = () => {
    return(
      <div className='Note' >
        {noteData.map((item, index) => (
          <Row className='mt-1'>
            <Col sm={2} md={2} lg={2}>
              <Image src={Aavatar} width="30" alt="avatar"/>
            </Col>
            <Col sm={10} md={10} lg={10} className="Note-body">
              <div className='d-flex justify-content-between align-items-center Note-header'><div className='fs-6 fw-bolder'>{item.name}</div><div className='fs-6 fw-bolder text-primary-1'>Counsellor</div></div>
              <div className='text-align-justify Note-text'>{item.content}</div>
            </Col>
          </Row>
        ))}
      </div>
    )
  };

  const AlertComponent = () => {
    return(
      <div>
        {alertData.map((item, index) => (
        <div className='AlertComponent mt-1'>
          <div className='AlertComponent-header '>{item.title}</div>
          <div className='AlertComponent-date mt-1'>{item.date}</div>
        </div>
      ))}
      </div>
    )
  };

  return (
    <div className="Accordions">
     {type == "Notes" ? (
      <Accordion className='mb-2'>
        <Accordion.Item eventKey="0">
          <Accordion.Header className='text-white'>{type}</Accordion.Header>
          <Accordion.Body>
            <NoteComponent/>
            <div className='d-flex justify-content-between align-items-center mt-3'>
                <Form.Control type="text" placeholder="Type here" className='me-2'/>
              <Button className='bg-primary-1 submit-btn'><FiSend/></Button>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
     ) : (
      <Accordion className='mb-2'>
        <Accordion.Item eventKey="0">
          <Accordion.Header className='text-white'>{type}<Badge bg='secondery' className='ms-2 bg-primary-2'>2</Badge></Accordion.Header>
          <Accordion.Body>
            <AlertComponent/>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
     )}
    </div>                        
  );
}

export function TrackingData({type}) {
  const data =[
    {title: "Started filling the application", content:"Consectetur adipiscing elit, Sed neque, faucibus eget felis.", timefooter:"10 Sep2022, 01:40 PM", userName:"Mike Wheeler"},
    {title: "Submitted to University", content:"Consectetur adipiscing elit, Sed neque, faucibus eget felis.", timefooter:"10 Sep2022, 01:40 PM", userName:"Rowlings Roll"},
    {title: "Required Financial Documents", content:"Consectetur adipiscing elit, Sed neque, faucibus eget felis.", timefooter:"10 Sep2022, 01:40 PM", userName:"Holmers"},
    {title: "Received Conditional Admit", content:"Consectetur adipiscing elit, Sed neque, faucibus eget felis.", timefooter:"10 Sep2022, 01:40 PM", userName:"John"},
    {title: "Received Full Admit", content:"Consectetur adipiscing elit, Sed neque, faucibus eget felis.", timefooter:"10 Sep2022, 01:40 PM", userName:"Dillip"},
    {title: "On-Hold (Required Financial Documents)", content:"Consectetur adipiscing elit, Sed neque, faucibus eget felis.", timefooter:"10 Sep2022, 01:40 PM", userName:"Mike Wheeler"},
    {title: "CA CE Reports Required", content:"Consectetur adipiscing elit, Sed neque, faucibus eget felis.", timefooter:"10 Sep2022, 01:40 PM", userName:"Mike Wheeler"},
    {title: "DS-160 Filing Started  ", content:"Consectetur adipiscing elit, Sed neque, faucibus eget felis.", timefooter:"10 Sep2022, 01:40 PM", userName:"Mike Wheeler"}
  ];

  return(
    <Accordion className='mb-2 detail'>
      <Accordion.Item eventKey='0'>
        <Accordion.Header className='text-white'>{type}</Accordion.Header>
        <Accordion.Body>
          <DetailInfo data={data}/>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

