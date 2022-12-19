import Logo from '../../assets/images/logo.png';
import { Image, NavDropdown, Navbar, Container, Nav, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiEdit2, FiPlus } from "react-icons/fi";

export function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" className='mb-3'>  
        <Container fluid>
          <Navbar.Brand href="#home">
            <Link className="nav-link" to="/home"><Image src={Logo} alt="Logo"/></Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to="/dashboard">Dashboard</Link>
              <NavDropdown title="Students" id="collasible-nav-dropdown">
                <NavDropdown.Item>Action</NavDropdown.Item>
                <NavDropdown.Item>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item>Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Applications" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Link className="nav-link" to="/agents">Agents</Link>
              <Link className="nav-link" to="/employees">Employees</Link>
              <Link className="nav-link" to="/finance">Finance</Link>
              <Link className="nav-link" to="/report">Reports</Link>
              <Link className="nav-link" to="/marketing">Marketing</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

export function SectionHeader ({title, date, btnstatus}) {
  return (
    <div className='SectionHeader d-flex justify-content-between mb-3 mt-5 mx-1'>
      <div className="SectionHeader-title">{title}</div>
      <div className='d-flex flex-row'>
        <div className='d-flex flex-column align-items-end'>
          <div className='subtitle'>Last Edited</div>
          <div className='subdate'>{date}</div>
        </div>
        {btnstatus !== "false" ? (<Button className="bg-primary-1 ms-3"><FiEdit2/></Button>) : ("")}        
      </div>
    </div>
  )
}

export function SectionHeaderPlus ({title, date, btnstatus}) {
  return (
    <div className='SectionHeader d-flex justify-content-between mb-3 mt-5 mx-1'>
      <div className="SectionHeader-title">{title}</div>
      <div className='d-flex flex-row'>
        <div className='d-flex flex-column align-items-end'>
          <div className='subtitle'>Last Edited</div>
          <div className='subdate'>{date}</div>
        </div>
        {btnstatus !== "false" ? (<Button className="bg-primary-1 ms-3"><FiPlus/></Button>) : ("")}        
      </div>
    </div>
  )
}

export function SubHeaderUniversity(){
  return(
    <div>
      <Nav variant='pills' >
      </Nav>
    </div>
  );
}
  
export function SectionHeaderCertificate ({title, date}) {
  return (
    <div className='SectionHeader d-flex justify-content-between m-2 p-2'>
      <div className="SectionHeader-title">{title}</div>
      <div className='d-flex flex-row'>
        <div className='d-flex flex-column align-items-end'>
          <div className='subtitle'>Last Edited</div>
          <div className='subdate'>{date}</div>
        </div>  
      </div>
    </div>
  )
}

export function OptionHeader ({title, date}) {
  return (
    <div className='SectionHeaderPayment d-flex m-2'>
      <div className='col-8 d-flex justify-content-start'>
        <div className="SectionHeaderPaypemt-title justify-items-center">{title}</div>
        <div className='d-flex align-items-center gap-2'>
          <label>Show</label>
          <Form.Select aria-label="Default select example">
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
          </Form.Select>
        </div>
      </div>
      <div className='col-4'>
        <div className='d-flex flex-column align-items-end'>
          <div className='subtitle'>Last Edited</div>
          <div className='subdate'>{date}</div>
        </div>  
      </div>
    </div>
  );
}