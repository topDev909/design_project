import React from 'react';
import { Badge, Row, Col, Toast, Alert} from 'react-bootstrap';
import './documents.css';
import { AiOutlineFilePdf } from 'react-icons/ai';
import { AiOutlineDownload } from 'react-icons/ai';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import sucessImage from '../../assets/images/pdf.png';


export function SuccessDocuments(){
  return(
    <div>
      <span className='spanVal'>PC Certificate</span>
      <Alert variant="success" onClose dismissible className='document_success'>
        <Alert.Heading></Alert.Heading>
        <AiOutlineFilePdf/><p>Agreement.pdf</p>
      </Alert>
    </div>
  );
}
export function NormalDocuments() {
  return (
    <div>
      <span className='spanVal'>Transcripts</span>
      <div  className='document_background'>
        <div>
          <p>JPG, PNG, PDF’s are allowed</p>
          <p>Drag & Drop or Upload</p>
        </div>
      </div>
    </div>
    
  );
}

export function NormalDocuments1() {
  return (
    <div>
      <span className='spanVal'>PC Certificate</span>
      <div  className='document_background'>
        <div>
          <p>JPG, PNG, PDF’s are allowed</p>
          <p>Drag & Drop or Upload</p>
        </div>
      </div>
    </div>
    
  );
}


export function DownDocuments() {
  return (
    <div >
     <span className='spanVal'>PC Certificates</span><span className='align-r'><span className='status_download'><AiOutlineDownload/>Download</span>{' '}</span>
     <div className='down_document'>
      <div>
        <p>JPG, PNG, PDF’s are allowed</p>
        <p>Drag & Drop or Upload</p>
      </div>
     </div>
    </div>
  );
}


export function PendingDocuments() {
  return (
    <div>
      <span className='spanVal'>Transcripts</span><span className='align-r'><span className='status_Badge status_pending'>pending</span>{' '}</span>
      <div  className='pending_document'>
        <div>
          <p>JPG, PNG, PDF’s are allowed</p>
          <p>Drag & Drop or Upload</p>
        </div>
      </div>
    </div>
  );
}








