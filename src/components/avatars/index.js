import { Image, Card } from "react-bootstrap";
import Avatar from '../../assets/avatars/2.png';
import { FiMapPin } from "react-icons/fi";



export function UserAvatar() {
    return (
      <div className="UserAvatar d-flex">
        <Image src={Avatar} width="62" alt="Avatar"/>
        <div className="d-flex flex-column justify-content-center  ms-2">
          <div className="UserAvatar-name mb-1">Arekanti Dilip kumar</div>
          <div className="UserAvatar-address"><FiMapPin className="text-primary-1"/><span className="ms-2">Ameerpet, Hyderabad</span></div>
        </div>
      </div>
    );
  }

export function UserInfo() {
  return(
    <Card className="UserInfo bg-primary-1 mt-4">
      <Card.Body className="d-flex justify-content-center">
        <div className="d-flex flex-column align-items-center mx-3">
          <span className="UserInfo-num">7.5</span>
          <span className="UserInfo-text mt-1">IELTS</span>
        </div>
        <div className="d-flex flex-column align-items-center mx-3">
          <span className="UserInfo-num">320</span>
          <span className="UserInfo-text mt-1">GRE</span>
        </div>
        <div className="d-flex flex-column align-items-center mx-3">
          <span className="UserInfo-num">9.5</span>
          <span className="UserInfo-text mt-1">GPA</span>
        </div>
      </Card.Body>
    </Card>
  )
}

export const DetailInfo = ({data}) => (
  data.map((item) => (
    <Card key={item.id}>
    <Card.Body>
      <Card.Title> {item.title} </Card.Title>
      <Card.Text> {item.content} </Card.Text>
      <Card.Footer>
        <div className="timePart">{item.timefooter}</div>
        <div className="userPart">
          <img src={Avatar} width="20" alt="avatar" className="imgAvatar"/> <p>{item.userName}</p>
        </div>         
      </Card.Footer>
    </Card.Body>
  </Card>
  ))
);