import {Card, Col, Row} from 'react-bootstrap';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export function ProfileProgress() {
  const percentage = 80;
    return (
      <div className="ProfileProgress mt-3">
        <Card>
          <Card.Body>
            <Card.Title className="text-primary-1 text-center mb-2">Profile Score</Card.Title>
            <br/>
            <div className="ProfileProgress-CircularProgressbar mx-auto"><CircularProgressbar strokeWidth={10} value={percentage} text={`${percentage}%`} /></div>
            <br/>
            <Card.Text className='text-center mx-auto' style={{width: '10rem'}}>
              <p className='mt-2'>You have achieved this 
                month’s goal.</p>

            <p>Congratulations  🥳</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  } 
  
  export function GREProgress() {
    const percentage = 7.5;
      return (
        <div className='p-1 col-6'>
          <div className="GREProgress mt-2 px-1 p-2">
            <div className='GREProgress-title mt-3'><p>GRE</p></div><hr/>
              <div className='GREProgress-body'>
                <Row>
                  <Col sm={12} md={5} lg={5}>
                  <div className="GREProgress-CircularProgressbar mx-auto"><CircularProgressbar strokeWidth={10} value={percentage * 10} text={`${percentage}`} /></div>
                  </Col>
                  <Col sm={12} md={7} lg={7} className="row flex-warp CircularProgressbar-value-body">
                    <Col sm={12} md={6} lg={6} className="d-flex flex-column CircularProgressbar-value-item  mb-2">
                      <span className='CircularProgressbar-value-item-num mb-1'>120</span><span className='CircularProgressbar-value-item-text'>Listening</span>
                    </Col>
                    <Col sm={12} md={6} lg={6} className="d-flex flex-column CircularProgressbar-value-item  mb-2">
                      <span className='CircularProgressbar-value-item-num mb-1'>84</span><span className='CircularProgressbar-value-item-text'>Listening</span>
                    </Col>
                    <Col sm={12} md={6} lg={6} className="d-flex flex-column CircularProgressbar-value-item  mb-2">
                      <span className='CircularProgressbar-value-item-num mb-1'>108</span><span className='CircularProgressbar-value-item-text'>Listening</span>
                    </Col>
                  </Col>
                </Row>
              </div>
          </div>
        </div>
      );
    }

    export function IELTSProgress() {
      const percentage = 7.5;
        return (
          <div className='p-1 col-6'>
            <div className="IELTSProgress mt-2 px-1 p-2">
              <div className='IELTSProgress-title mt-3'><p>IELTS</p></div><hr/>
                <div className='IELTSProgress-body'>
                  <Row>
                    <Col sm={12} md={5} lg={5}>
                    <div className="IELTSProgress-CircularProgressbar mx-auto"><CircularProgressbar strokeWidth={10} value={percentage * 10} text={`${percentage}`} /></div>
                    </Col>
                    <Col sm={12} md={7} lg={7} className="row flex-warp CircularProgressbar-value-body">
                      <Col sm={12} md={6} lg={6} className="d-flex flex-column CircularProgressbar-value-item  mb-2">
                        <span className='CircularProgressbar-value-item-num mb-1'>120</span><span className='CircularProgressbar-value-item-text'>Listening</span>
                      </Col>
                      <Col sm={12} md={6} lg={6} className="d-flex flex-column CircularProgressbar-value-item  mb-2">
                        <span className='CircularProgressbar-value-item-num mb-1'>84</span><span className='CircularProgressbar-value-item-text'>Listening</span>
                      </Col>
                      <Col sm={12} md={6} lg={6} className="d-flex flex-column CircularProgressbar-value-item  mb-2">
                        <span className='CircularProgressbar-value-item-num mb-1'>108</span><span className='CircularProgressbar-value-item-text'>Listening</span>
                      </Col>
                      <Col sm={12} md={6} lg={6} className="d-flex flex-column CircularProgressbar-value-item  mb-2">
                        <span className='CircularProgressbar-value-item-num mb-1'>108</span><span className='CircularProgressbar-value-item-text'>Listening</span>
                      </Col>
                    </Col>
                  </Row>
                </div>
            </div>
          </div>
        );
      }
    
