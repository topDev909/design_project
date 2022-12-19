import React, {useState} from 'react';

import userFlag from '../../assets/images/USA.png';
import userAvt from '../../assets/avatars/man.png';

import './table.css';
import { Table, Form, Pagination} from 'react-bootstrap';

import TableHeaderItem from './TableHeaderItems';

function TableData({data}) {
  const [sortConfig, setSortConfig] = useState({});

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
        sortConfig &&
        sortConfig.key === key &&
        sortConfig.direction === 'ascending'
    ) {
        direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
<>
<Table borderless responsive className='Toptable p-2'>
  <thead style={{background: '#FAFBFC', margin: '2px', padding: '2px'}}>
    <tr>
      <TableHeaderItem clsName="sticky-column" name="Student Name" keyName="studentName" requestSort={requestSort}/>
      <TableHeaderItem name="University Name" keyName="universityName" requestSort={requestSort}/>
      <TableHeaderItem name="Intake" keyName="intake" requestSort={requestSort}/>
      <TableHeaderItem name="Submitted by" keyName="submittedBy" requestSort={requestSort}/>
    </tr>
  </thead>
  <tbody>
    {
      data.map((d, index) => {
        return (
          <tr className='p-2' style={{fontFamily: 'Manrope !important', borderBottom: '1px solid #EDEDED'}}>
            <td className='sticky-column'>
              <h6>{d.studentName}</h6>
              <p className='lastLogin'>{d.lastLogin}</p>
              <div className='d-flex align-items-center gap-2'>
                <div>
                    <img src={userFlag} alt={d.country} width="23px" height="23px" />
                </div>
                <h6>{d.country}</h6>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center gap-2'>
                <h6>{d.universityName}</h6>
                <div className='priority'>
                    Priority 4
                </div>
              </div>
              <p>{d.universityDetail}</p>
            </td>
            <td>
                <h6>{d.intake}</h6>
                <p>{d.country}</p>
            </td>
              <td>
                <div className='d-flex align-items-center gap-2'>
                  <div>
                      <img src={userAvt} alt={d.submittedBy} width="36" height="36" className="rounded-circle" />
                  </div>
                  <div>
                      <h6>{d.submittedBy}</h6>
                      <p>{d.submittedDate}</p>
                  </div>
                </div>
              </td>
        </tr>
        )
      })
  }
  </tbody>     
  
</Table>
  <div className='footer'>
    <div className='d-flex justify-content-start align-items-center gap-2 me-5'>
      <label>Show</label>
      <Form.Select aria-label="Default select example">
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </Form.Select>
    </div>
    <div className="show_context me-5">Showing results from 5 </div>
    <div>
      <div>
      <Pagination className='me-5'>
        <Pagination.Prev/>
        <Pagination.Item active>{1}</Pagination.Item>                                                
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Next />
      </Pagination>
      </div>
    </div>
  </div>
</>
      
  );  
}

export default TableData;
