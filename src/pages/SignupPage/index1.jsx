import React, { useRef, useState } from 'react';
import { Container, Row, Col, Button, Form, FloatingLabel, Carousel} from 'react-bootstrap';
import { AiOutlineEye } from 'react-icons/ai';
import { RiEyeCloseLine } from 'react-icons/ri';

import * as EmailValidator from 'email-validator';

import './SigngupPage.css';
import Data  from '../../Data';
import image1 from '../../assets/images/1.png';
import logo from '../../assets/images/logo.png';

// get token function


const SignupPage = (val) => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };  

  const data = Data();

  const [validated, setValidated] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);
  const [fsValue, setFsValue] = useState('');
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState(false);

  const su_firstname = useRef();
  const su_lastname = useRef();
  const su_email = useRef();
  const su_psw = useRef();
  const su_confirm_psw = useRef();
  const su_selected = useRef();
  const su_checked = useRef();

  const [err_signup, setErrorSignUp] = useState([0,0,0,0,0]);

  const validateSignUp = () => {
    
    
    let err_array = [];
    let err_count = 0;
    if(su_firstname.current.value == ""){
      err_array.push(1);
      err_count++;
    } else
      err_array.push(0);
    if(su_lastname.current.value == ""){
      err_array.push(1);
      err_count++;
    } else
      err_array.push(0);
    if(su_email.current.value == ""){
      err_array.push(1);
      err_count++;
    } else
      err_array.push(0);
    if(su_psw.current.value == "" || su_psw.current.value != su_confirm_psw.current.value){
      err_array.push(1);
      err_count++;
    } else
      err_array.push(0);
    if(!su_checked.current){
      err_array.push(1);
      err_count++;
    } else
      err_array.push(0);

    if(err_count > 0){
      setErrorSignUp(err_array);
      alert(err_array);
      return false;
    } else
      return true;
  }


  function onSuCheck(event) {
    su_checked.current = !su_checked.current;
}


  const selFsValue = (val) => {
    setFsValue(val);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() == false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(val);
    console.log('button clicked');
    data.status = 'true';

  };

  const hadleSignUp = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (validateSignUp() === false) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    if(su_firstname.current.value == data['firstName'] && su_lastname.current.value == data['lastName'] && su_email.current.value == data['email'] && su_psw.current.value == data['password']) {
      alert('ok');
      setCheckEmail(true)
    }
    else {
      alert('username or password incorrect!')
    }
    setValidated(val);
    console.log('button clicked');
    data.status = 'true';
  }

  const handleVerify = () => {
    if(true)
    val.setValidate(true);
   console.log('verify button clicked');
  }

  const handleBtnclick = () => {
   window.location.href('/profile');
    console.log('verify button clicked');
    // console.log(data);

  }

  const onChangeSelect = (event) => {
    selFsValue(event.target.value);
    if(event.target.value !== "")
      // .labeldisactive label
      document.getElementById("selectOption").style.top = "-18px";
    else
      document.getElementById("selectOption").style.top = "0px";
  }


  const password_show_hide = () => {
    console.log('fdsa');
    var x = document.getElementById("password");
    var show_eye = document.getElementById("show_eye");
    var hide_eye = document.getElementById("hide_eye");
    hide_eye.classList.remove("d-none");
    if (x.type === "password") {
      x.type = "text";
      show_eye.style.display = "none";
      hide_eye.style.display = "block";
    } else {
      x.type = "password";
      show_eye.style.display = "block";
      hide_eye.style.display = "none";
    }
  }



  
  const confirmPassword_show_hide = () => {
    console.log('fdsa');
    var x = document.getElementById("confirmPassword");
    var show_eye = document.getElementById("confirm_show_eye");
    var hide_eye = document.getElementById("confirm_hide_eye");
    hide_eye.classList.remove("d-none");
    if (x.type === "password") {
      x.type = "text";
      show_eye.style.display = "none";
      hide_eye.style.display = "block";
    } else {
      x.type = "password";
      show_eye.style.display = "block";
      hide_eye.style.display = "none";
    }
  }

  const setUserEmail = (val) => {
    setEmail(val);
    setErrorEmail(!EmailValidator.validate(val));
  }

  const nextstep = (e) => {
    e.preventDefault();
    if((e.key >= 0 && e.key <= 9) || e.key === "Backspace"){
      if(e.key === "Backspace"){
        e.target.value = '';
      }else{  
        e.target.value = e.key;
      }
      var target = e.srcElement || e.target;
      var myLength = target.value.length;
      
      if (myLength >= 1) {
        
          var next = target.nextElementSibling;
          // debugger;
          while (next) {
              if (next.tagName.toLowerCase() === "input") {
                  next.focus();
                  break;
              }
              next = target.nextElementSibling;
          }
      }
      // Move to previous field if empty (user pressed backspace)
      else if (myLength === 0) {
          var previous = target.previousElementSibling;
          while (previous) {
              if (previous.tagName.toLowerCase() === "input") {
                  previous.focus();
                  break;
              }
              previous = target.previousElementSibling;
          }
      }
    }
  }


  return(
    <Container fluid>
      <Row className='signup_container'>
        <Col sm={12} md={7} lg={7} className='p-0 car_container'>
          <Carousel>
            <Carousel.Item className='p-0 m-0'>
            <img
              className='d-block carousel_img'
              src={image1}
              alt="First slide"
            />
            </Carousel.Item>
            <Carousel.Item className='p-0 m-0'>
            <img
              className='d-block carousel_img'
              src={image1}
              alt="Second slide"
            />
            </Carousel.Item>
          </Carousel>          
        </Col>
        <Col className='right_Side' sm={12} md={5} lg={5}>
        {
          !checkEmail ?           
            <Row className='right_Panel'> 
              <Row>       
                <Col className="text-center logo_part">
                  <img src={logo} alt="logo" className='logoImg logo_container' />
                </Col>
            </Row>
       
            <Row>
              <Col className='signupBlock'>
                <div className="subtitle_board">
                  <div className='subtitle'>Create an account to continue</div>
                </div>
                <Form noValidate className="form_container"  onSubmit={hadleSignUp}>
                  <Row className="mb-3" id="row_name">
                    <FloatingLabel className='CNLabel' as={Col} md="6" controlId="firstname" label="First name">
                      <Form.Control
                        type="text"
                        placeholder="First name"
                        name="firstname"
                        className='CFInput'
                        isInvalid={true}
                        ref={su_firstname}
                      />

                      <Form.Control.Feedback type="invalid" hidden={!err_signup[0]}>
                        {/* {errors.firstname} */}Please provide a valid firstname.
                      </Form.Control.Feedback>
                    </FloatingLabel>
                    <FloatingLabel className='CNLabel' as={Col} md="6" controlId="lastname" label="Last name">
                      <Form.Control
                        type="text"
                        className='CFInput'
                        isInvalid={true}
                        placeholder="Last name"
                        ref={su_lastname}
                      />
                      <Form.Control.Feedback type="invalid" hidden={!err_signup[1]}>
                        Please provide a valid lastname.
                      </Form.Control.Feedback>
                    </FloatingLabel>
                  </Row>
                  <FloatingLabel className='CNLabel' id="email" as={Col} md="12" controlId="emailaddress" label="Email Address">
                    <Form.Control
                      type="text"
                      placeholder="Email Address"
                      value={email}
                      className='CFInput'
                      isInvalid={true}
                      onChange={e => setUserEmail(e.target.value)}
                      // isInvalid={errorEmail}
                      ref={su_email}
                    />
                    <Form.Control.Feedback type="invalid" hidden={!err_signup[2]}>
                      Please provide a valid email.
                    </Form.Control.Feedback>
                  </FloatingLabel>
                  <Form.Group>
                    <Row className="mb-3 CFInput" id='row_password'>
                      <FloatingLabel className='CNLabel' as={Col} md="6" controlId="password" label="Password">
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          name="Password"
                          ref={su_psw}
                          className='CFInput'
                          isInvalid={true}
                        />
                        
                  <Form.Control.Feedback type="invalid"  style={{display:err_signup[3] ? 'block' : 'none'}}>
                      Please input correct password.
                    </Form.Control.Feedback>
                        <span className='passicon' onClick={password_show_hide}>
                          <AiOutlineEye  id="show_eye"/>
                          <RiEyeCloseLine className='d-none'  id="hide_eye"/>
                        </span>
                      </FloatingLabel>
                      <FloatingLabel className='CNLabel' as={Col} md="6" controlId="confirmPassword" label="Confirm">
                        <Form.Control
                          type="password"
                          placeholder="Confirm Password"
                          ref={su_confirm_psw}
                          className='CFInput'
                          isInvalid={true}
                        />        
                       
                        <span className='passicon' onClick={confirmPassword_show_hide}>
                          <AiOutlineEye  id="confirm_show_eye"/>
                          <RiEyeCloseLine className='d-none'  id="confirm_hide_eye"/>
                        </span>             
                      </FloatingLabel>

                    </Row>
                     
                  </Form.Group>
                  <Row className='mb-3' id='parent_rule_password'>
                    <p id='row_rule_password'>The password must contain <span id="rule_green">Special character</span>, 
                    <span  id="rule_red">Upper Case</span>, <span id='rule_green'>Numeric</span> and <span id='rule_green'>8 digits</span></p>
                  </Row>
                  <Row>
                    <div className="floating-form">
                      <div className="floating-label labeldisactive" id='select_tag'>
                        {/* <select className="floating-select" value={fsValue} onChange={onChangeSelect}*/}
                        <select className="floating-select" onChange={onChangeSelect} ref={su_selected}>
                          <option value="" selected></option>
                          <option value="1">Option one Selected1</option>
                          <option value="2">Option one Selected2</option>
                          <option value="3">Option one Selected3</option>
                          <option value="4">Option one Selected4</option>
                          <option value="5">Option one Selected5</option>
                        </select>
                        <label id="selectOption">Select the option</label>
                      </div>
                    </div>
                  </Row>
                  
                  <Row className='agree_checkbox_container'>
                    <Col lg={1}>
                      <Form.Group className="mb-3">
                      <Form.Check
                        feedbackType="invalid"
                        className='agree_checkbox CFInput'
                        isInvalid={true}                        
                        onChange={onSuCheck}
                        checked={su_checked.current}
                        value={su_checked}
                      />
                    </Form.Group>
                    </Col>
                    <Col>
                      <p className='lavel_accept'>I accept <span className='highlight_blue_text'>Terms</span> and <span className='highlight_blue_text'>Conditions</span> of the testtest.com</p>
                    </Col>
                    
                    <Form.Control.Feedback type="invalid" style={{display:err_signup[4] ? 'block' : 'none'}}>
                      Please checked.
                    </Form.Control.Feedback>
                  </Row>
                  <Row lg={12} className="btn_submit">
                    {/* <Button type="submit" className='btn_signup' onClick={() => {setCheckEmail(true)}}>Sign Up</Button>   */}
                    <Button type="submit" className='btn_signup'>Sign Up</Button>
                  </Row>
                  
                </Form>
                <Row>
                  <p className='already_account'>Already have an account? <span className='highlight_blue_text'>Login Here</span></p>
                </Row>
                <Row lg={12} className="btn_submit">
                    <Button type="submit" className='btn_login' onClick={() => {setCheckEmail(true)}}>Login</Button>  
                  </Row>
              </Col>
            </Row>
          </Row>      
          : 
          <Row className='right_Panel'>
            <Col className='signup_content_container'>
              <div className="text-center logo_part">
                <img src={logo} alt="logo" className='logoImg logo_container' />
              </div>
              <Row>
                <Col className='signupBlock'>
                  <div className="text-center">
                    <div className='subtitle second'>Enter 6 digit PIN number</div>
                  </div>
                  <div className='veri_label'>
                    We have sent 6 digit PIN number to your email and mobile number.
                  </div>
                  {/* <Form noValidate validated={validated} className="form_container"> */}
                  <Form noValidate className="form_container_verify mt-4" onSubmit={handleVerify}>
                    
                    <Row className='verinum_container p-2 m-0' onKeyDown={nextstep}>
                        <Form.Control
                            type="text"
                            name="1Num"
                            required
                          />                      
                        <Form.Control
                            type="text"
                            name="2Num"
                            required
                          />
                        <Form.Control
                            type="text"
                            name="3Num"
                            required
                          />
                        <Form.Control
                            type="text"
                            name="4Num"
                            required
                          />
                        <Form.Control
                            type="text"
                            name="5Num"
                            required
                          />
                        <Form.Control
                            type="text"
                            name="6Num"
                            required
                          />
                    </Row>                   
                    
                    <button className='btn btn-primary btn-verify mb-4 p-2 m-2'>Verify my account</button>  
                  </Form>
                </Col>
              </Row>
            </Col>
          </Row>
        }
      </Col>

      </Row>
    </Container>
  )
  
}

export default SignupPage;
