import React, { useState } from "react";
import { Col, Container, Row, Tabs, Tab, Card, Image, Button, Table, Pagination, Form } from "react-bootstrap";
import { Accordions, TrackingData } from "../components/accordion";
import { DetailInfo, UserAvatar, UserInfo } from "../components/avatars";
import { GREProgress, IELTSProgress, ProfileProgress } from "../components/progress";
import { FiUser, FiFileText, FiGrid, FiCreditCard, FiArrowUp } from "react-icons/fi";
import { PersonalInfoBtn } from "../components/buttons";
import { SectionHeader, SectionHeaderPlus, SectionHeaderSelection, SectionHeaderCertificate, OptionHeader } from "../components/header";
import { InfoCard } from "../components/infocard";
import { InfoCardTitle } from "../components/infocardtitle";
import { InfoCard1} from "../components/infocard1";
import { InfoCard2 } from "../components/infocard2";
import Mark from '../assets/images/mark.png';
import { FiCornerUpLeft } from 'react-icons/fi';
import { FiEdit2 } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { UniverstiyCard, UniversityCardWhite } from "../components/cards";
import { AiOutlineDownload } from 'react-icons/ai';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';

import { SuccessDocuments, NormalDocuments, NormalDocuments1, PendingDocuments, DownDocuments } from '../components/documents';
import TableData  from '../components/table/index.jsx';
import {data} from '../components/table/data';





export function ProfilePage() {

    const [selpage, SetSelpage] = useState(0);

    return (
      <div className="ProfilePage mb-5">
        <Container fluid>
            <Row className="page-route my-3"> 
              <Col sm={12} md={4} lg={4} xs={12} className="show_detail">
                <p>Go back to All Applications<span className="mx-2"><FiCornerUpLeft/></span></p>
                <p>Applications / Arekanti Dilip kumar</p>
              </Col>   
            </Row>
            <Row>
                <Col sm={12} md={3} lg={3} xs={12} >
                  <UserAvatar/>  
                  <UserInfo/>                   
                  <ProfileProgress/>   
                  <InfoCardTitle/>
                  <InfoCard/>
                  <InfoCard1/>
                  <InfoCard2/>                              
                </Col>
                <Col sm={12} md={6} lg={6} xs={12} >
                  <Tabs
                      defaultActiveKey="profile"
                      id="fill-tab-example"
                      className="mb-3"
                      fill
                    >
                    <Tab eventKey="profile" title={<div className="d-flex align-items-center justify-content-center py-2 px-2" onClick={() => SetSelpage(1)}><FiUser/><span className="ms-2">Profile</span></div>}>
                      <Card>
                        <Card.Body className="row justify-content-between align-items-center show-profile">
                          <PersonalInfoBtn className="col-md-4, col-sm-12, col-xs-12"/>
                          <PersonalInfoBtn className="col-md-4, col-sm-12, col-xs-12"/>
                          <PersonalInfoBtn className="col-md-4, col-sm-12, col-xs-12"/>
                        </Card.Body>
                      </Card>
                      <div className="sub-section px-4">
                        <SectionHeader title="Personal Information" date="20 Sep 2022, 01:40 PM"/>
                        <div className="sub-section-body row py-2 mx-1">
                          <Col sm={6} md={3} className="d-flex flex-column align-items-center mb-2">
                            <span className="sub-section-body-title">First Name</span><span className="sub-section-body-value mt-2">Arekanti</span>
                          </Col>
                          <Col sm={6} md={3} className="d-flex flex-column align-items-center mb-2">
                            <span className="sub-section-body-title">Middle Name</span><span className="sub-section-body-value mt-2">-</span>
                          </Col>
                          <Col sm={6} md={3} className="d-flex flex-column align-items-center mb-2">
                            <span className="sub-section-body-title">Last Name</span><span className="sub-section-body-value mt-2">Arekanti</span>
                          </Col>
                          <Col sm={6} md={3} className="d-flex flex-column align-items-center mb-2">
                            <span className="sub-section-body-title">Gender</span><span className="sub-section-body-value mt-2">Male</span>
                          </Col>
                          <Col sm={6} md={3} className="d-flex flex-column align-items-center mb-2">
                            <span className="sub-section-body-title">Date of Birth</span><span className="sub-section-body-value mt-2">09 May 1999</span>
                          </Col>
                          <Col sm={6} md={3} className="d-flex flex-column align-items-center mb-2">
                            <span className="sub-section-body-title">Martial Status</span><span className="sub-section-body-value mt-2">Unmarried</span>
                          </Col>
                          <Col sm={6} md={3} className="d-flex flex-column align-items-center mb-2">
                            <span className="sub-section-body-title">Mobile</span><span className="sub-section-body-value mt-2">8328524850</span>
                          </Col>
                          <Col sm={6} md={3} className="d-flex flex-column align-items-center mb-2">
                            <span className="sub-section-body-title">Email Address</span><span className="sub-section-body-value mt-2">sales@test.com</span>
                          </Col>
                        </div>
                      </div>
                      <div className="sub-section px-4 ">
                        <SectionHeaderPlus title="Test Scores" date="20 Sep 2022, 01:40 PM"/>
                        <div className="py-2 row flex-row m-1 show-test">
                          <GREProgress className="col-md-6 col-sm-12"/>
                          <IELTSProgress className="col-md-6 col-sm-12"/>
                        </div>
                      </div>
                      <div className="sub-section px-4">
                        <SectionHeaderPlus title="Educational Qualification" date="20 Sep 2022, 01:40 PM"/>
                        <Row className="py-2">
                          <Card className="Educational">
                            <Card.Body>
                              <div className="Educational-title d-flex flex-row justify-content-between py-3 px-2 align-items-center">
                                <div className="Educational-title">Anurag College of Engineering (B.Tech)</div><div className="Educational-date">2010 - 2015</div>
                              </div>
                              <div className="my-2 Educational-list">Bachelors in <span className="text-primary-1">Electronics and Communications Engineering</span></div>
                              <div className="my-2 Educational-list">Specialized in <span className="text-primary-1">Data Science</span></div><hr/>
                              <div className="d-md-flex justify-content-start Educational-footer">
                                <div className="Educational-footer-item me-4">
                                  <div className="Educational-footer-item-title">Percentage</div>
                                  <div className="Educational-footer-item-value ms-2">70%</div>
                                </div>
                                <div className="Educational-footer-item me-4">
                                  <div className="Educational-footer-item-title">Backlogs</div>
                                  <div className="Educational-footer-item-value ms-2">85</div>
                                </div>
                                <div className="Educational-footer-item me-4">
                                  <div className="Educational-footer-item-title">Gap In Education</div>
                                  <div className="Educational-footer-item-value ms-2">1 Year</div>
                                </div>
                              </div>
                            </Card.Body>
                          </Card>
                        </Row>
                      </div>
                      <div className="sub-section px-4">
                        <SectionHeaderPlus title="Addresses" date="20 Sep 2022, 01:40 PM"/>
                        <div className="row">
                          <Card className="Addresses col-sm-12 col-md-6">
                            <Card.Body>
                              <Card.Title className="mb-3">Mailingaddress</Card.Title>
                              <div className="row">
                                <div className="row flex-wrap">
                                  <Col  sm={12} md={12} className="d-flex flex-column align-items-start mb-2">
                                    <span className="sub-section-body-title">Address Line</span><span className="sub-section-body-value mt-2">Level 1 Phoenix Building, Beside Genpact Road, Uppal</span>
                                  </Col>
                                  <Col sm={6} md={4} className="d-flex flex-column align-items-start mb-2">
                                    <span className="sub-section-body-title">City</span><span className="sub-section-body-value mt-2">Hyderabad</span>
                                  </Col>
                                  <Col sm={6} md={4} className="d-flex flex-column align-items-start mb-2">
                                    <span className="sub-section-body-title">State</span><span className="sub-section-body-value mt-2">Telangana</span>
                                  </Col>
                                  <Col sm={6} md={4} className="d-flex flex-column align-items-start mb-2">
                                    <span className="sub-section-body-title">Country</span><span className="sub-section-body-value mt-2">India</span>
                                  </Col>
                                  <Col sm={6} md={4} className="d-flex flex-column align-items-start mb-2">
                                    <span className="sub-section-body-title">Pincode</span><span className="sub-section-body-value mt-2">500039</span>
                                  </Col>
                                </div>
                              </div>
                            </Card.Body>
                          </Card>
                          <Card className="Addresses col-sm-12 col-md-6">
                            <Card.Body>
                              <Card.Title className="mb-3">Permanent Address</Card.Title>
                              <div className="row">
                                <div className="row flex-wrap">
                                  <Col  sm={12} md={12} className="d-flex flex-column align-items-start mb-2">
                                    <span className="sub-section-body-title">Address Line</span><span className="sub-section-body-value mt-2">Level 1 Phoenix Building, Beside Genpact Road, Uppal</span>
                                  </Col>
                                  <Col sm={6} md={4} className="d-flex flex-column align-items-start mb-2">
                                    <span className="sub-section-body-title">City</span><span className="sub-section-body-value mt-2">Hyderabad</span>
                                  </Col>
                                  <Col sm={6} md={4} className="d-flex flex-column align-items-start mb-2">
                                    <span className="sub-section-body-title">State</span><span className="sub-section-body-value mt-2">Telangana</span>
                                  </Col>
                                  <Col sm={6} md={4} className="d-flex flex-column align-items-start mb-2">
                                    <span className="sub-section-body-title">Country</span><span className="sub-section-body-value mt-2">India</span>
                                  </Col>
                                  <Col sm={6} md={4} className="d-flex flex-column align-items-start mb-2">
                                    <span className="sub-section-body-title">Pincode</span><span className="sub-section-body-value mt-2">500039</span>
                                  </Col>
                                </div>
                              </div>
                            </Card.Body>
                          </Card>
                        </div>
                      </div>
                      <div className="sub-section px-4 passport">
                        <SectionHeader title="Passport and Nationality" date="20 Sep 2022, 01:40 PM" btnstatus="false"/>
                        <Row className="py-2">
                          <Col sm={12} md={6}>
                            <Card className="Passport">
                              <Card.Body>
                              <Card.Title className="Passport-title mb-2 d-flex justify-content-between align-items-start"><div className="">Passport Details</div><Image src={Mark} alt="Mark" /></Card.Title>
                                <div className="row py-2">
                                  <Col sm={12} md={12} className="d-flex flex-column justify-content-start mb-2">
                                    <span className="sub-section-body-title">Passport Number</span><span className="sub-section-body-value mt-2">V35518TX</span>
                                  </Col>
                                  <Col sm={6} md={6} className="d-flex flex-column mb-2">
                                    <span className="sub-section-body-title">Date of Issue</span><span className="sub-section-body-value mt-2">12 Feb 2020</span>
                                  </Col>
                                  <Col sm={6} md={6} className="d-flex flex-column mb-2">
                                    <span className="sub-section-body-title">Date of Expiry</span><span className="sub-section-body-value mt-2">12 Feb 2030</span>
                                  </Col>
                                  <Col sm={12} md={12} className="d-flex flex-column mb-2">
                                    <span className="sub-section-body-title">Place of Issue</span><span className="sub-section-body-value mt-2">India</span>
                                  </Col>
                                  <Col sm={12} md={12} className="d-flex flex-column mb-2">
                                    <span className="sub-section-body-title">Place of Birth</span><span className="sub-section-body-value mt-2">India</span>
                                  </Col>
                                </div>
                              </Card.Body>
                            </Card>
                          </Col>
                          <Col sm={12} md={6}>
                            <Card className="nationInfo">
                              <Card.Body>
                                <Card.Title className="Passport-title-dark mb-2">Nationality Information</Card.Title>
                                <div className="d-flex my-2">
                                  <div className="Passport-body-title col-6">NATIONALITY</div>
                                  <div className="Passport-body-value col-6 d-flex justify-content-center">Indian</div>
                                </div>
                                <div className="d-flex my-2">
                                  <div className="Passport-body-title col-6">CITIZENSHIP</div>
                                  <div className="Passport-body-value col-6 d-flex justify-content-center">Indian</div>
                                </div>
                                <div className="mt-3">
                                  <div className="Passport-body-item my-2">
                                    <div className="Passport-body-item-title">Do you have citizen ship in multiple countries ?</div>
                                    <div className="Passport-body-item-value mt-1">-</div>
                                  </div>
                                  <div className="Passport-body-item">
                                    <div className="Passport-body-item-title">Are you living or studying in other country ?</div>
                                    <div className="Passport-body-item-value mt-1">-</div>
                                  </div>
                                </div>
                              </Card.Body>
                            </Card>
                          </Col>
                        </Row>
                      </div>
                      <div className="sub-section px-4">
                        <SectionHeader title="Background Information" date="20 Sep 2022, 01:40 PM"  btnstatus="false"/>
                        <div className="py-2">
                          <Card className="Background-Information">
                            <Card.Body>
                              <div className="Background-Information-item my-2">
                                <div className="Background-Information-item-title">Have you applied for any countrie’s visa ?</div>
                                <div className="Background-Information-item-value mt-1">-</div>
                              </div>
                              <div className="Background-Information-item">
                                <div className="Background-Information-item-title">Have you suffered or have any serious medical conditions ?</div>
                                <div className="Background-Information-item-value mt-1">-</div>
                              </div>
                            </Card.Body>
                          </Card>
                        </div>
                      </div>
                      <div className="sub-section px-4">
                        <SectionHeader title="Emergency Contact Details" date="20 Sep 2022, 01:40 PM"  btnstatus="false"/>
                        <div className="py-2 ">
                          <Card className="Emergency">
                            <Card.Body>
                              <div className="Emergency-title">Mobile Number</div>
                              <div className="Emergency-value">+91 93898751002</div>
                            </Card.Body>
                          </Card>
                        </div>
                      </div>
                    </Tab>
                    <Tab eventKey="applications" title={<div className="d-flex align-items-center justify-content-center py-2 px-2" onClick={() => SetSelpage(2)}><FiGrid/><span className="ms-2">Applications</span></div>}>
                      <Card className="listUniversity">
                        <Card.Body>
                          <Card.Title className="mt-3">Shortlist Universities</Card.Title>                         
                            <Button variant="primary"><FiPlus/>Click to Add</Button>                          
                        </Card.Body>
                      </Card>
                      <UniverstiyCard/>
                      <UniversityCardWhite/>
                      <UniversityCardWhite/> 
                    </Tab>
                    <Tab eventKey="documents" title={<div className="d-flex align-items-center justify-content-center py-2 px-2" onClick={() => SetSelpage(3)}><FiFileText/><span className="ms-2">Documents</span></div>}>
                      <div className="px-5 py-5"><div className="downloadHeader"><AiOutlineDownload/>Download All Documents</div></div>                  
                        <SectionHeaderCertificate title="Degree Certificates" date="20 Sep 2022, 01:40 PM" />
                        <div className="px-2">
                          <Col md={10}  className="certDash row mb-2" >
                            <Col md={6}><SuccessDocuments/></Col>
                            <Col md={6}><NormalDocuments/></Col>
                          </Col>
                          <Col md={2} ></Col>
                        </div>
                        <div className="px-2">
                          <Col md={10} className="certDash row mb-2" >
                            <Col md={6}><NormalDocuments /></Col>
                            <Col md={6}><PendingDocuments/></Col>
                          </Col>
                          <Col md={2}></Col>
                          </div>                  
                        <div>                
                        <SectionHeaderCertificate title="Degree Certificates" date="20 Sep 2022, 01:40 PM" />
                        <div className="px-2">
                          <Col md={10}  className="certDash row mb-2" >
                          <Col md={6}><DownDocuments/></Col>
                          <Col md={6}><NormalDocuments/></Col>
                          </Col>
                          <Col md={2} ></Col>
                        </div>
                        <div className="px-2">
                          <Col md={10} className="certDash row mb-2" >
                            <Col md={6}><NormalDocuments/></Col>
                            <Col md={6}><PendingDocuments/></Col>
                          </Col>
                          <Col md={2}></Col>
                        </div>            
                        </div> 
                    </Tab>
                    <Tab eventKey="contact" title={<div className="d-flex align-items-center justify-content-center py-2 px-2" onClick={() => SetSelpage(4)}><FiCreditCard/><span className="ms-2">Payments</span></div>} >
                      <div className="showDownload">
                        <div className="px-0 downloadHeader">
                          <AiOutlineDownload/>Download All Documents
                        </div>
                      </div>
                      <OptionHeader title="All Payments" date="20 Sep 2022, 01:40 PM" status={false} />
                      <TableData data={data}/>            
                    </Tab>
                  </Tabs>
                      
                </Col>
                <Col sm={12} md={3} lg={3} xs={12} >
                    {
                      (selpage === 1) ?
                      (
                        <div>
                          <Accordions type="Notes"/>
                          <Accordions type="Notes"/>
                          <Accordions type="Alterts"/>
                        </div>
                      ) : 
                      (selpage === 2) ?
                      (
                        <div>
                        <TrackingData type="Tracking Florida International University"/>
                        </div>
                      ) : 
                      (selpage === 3)?
                      (
                        <div>
                          <Accordions type="Notes"/>
                          <Accordions type="Notes"/>
                          <Accordions type="Alterts"/>
                        </div>
                      ):
                      (selpage === 4)?
                      (
                        <div>
                          <Accordions type="Notes"/>
                          <Accordions type="Alterts"/>
                        </div>
                      ):
                      (
                      <div> 
                        <Accordions type="Notes"/>
                        <Accordions type="Notes"/>
                        <Accordions type="Alterts"/>
                      </div>
                      )                   
                  }
                </Col>
            </Row>
        </Container>        
      </div>
    );
  }
  