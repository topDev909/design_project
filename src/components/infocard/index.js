import { Image, Card  } from "react-bootstrap";
import BrandKH from '../../assets/images/K.png';
import Badge from 'react-bootstrap/Badge';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export function InfoCard() {
    return (
      <div className="InfoCard mt-3">
        <Card>
          <Card.Body className="InfoCardBodyContainer first">
              <div className="InfoCardContainer">
                <Badge pill bg="" className="InfoBadgeTop">Priority1</Badge>{' '}
                <Badge pill bg="" className="InfoBadgeTop">Masters</Badge>{' '}
                <Badge pill bg="" className="InfoBadgeTop">Spring2022</Badge>{' '}
              </div>
              <div className="BrandContainer">
                <Image src={BrandKH} width="62" alt="Avatar"/>
                <div className="Brandtitle ms-2">
                  <div className="Brand-name mb-1">Kings College London</div>
                  <div className="Brand-description mb-1">Masters in Data Science and <br/>Visualization</div>
                </div> 
              </div>
              <div className="BrandAuthorContainer">
                  <div className="BrandStatus">Status&nbsp;&nbsp;</div>
                  <div className="BrandStatusValue">i-20 issued from university</div>
              </div>
              <div className="BrandStatusDate">20 Sep 2022, 01:40 PM</div>
          </Card.Body>
        </Card>
      </div>
    );
  }
  

