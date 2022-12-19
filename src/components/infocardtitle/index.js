import {Card} from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export function InfoCardTitle() {
    return (
      <div className="InfocardContainer mt-3">       
          <p className="InfoCardTitle" style={{marginBottom: '0rem'}}>Application</p>          
          <Badge bg="" className="InfoViewTitle">View All</Badge>{' '}        
      </div>
    );
  }
  

