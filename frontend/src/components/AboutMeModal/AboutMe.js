// import styles from './AboutMe.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const AboutMeContainer = () => {
  return (
    <div className="icons">
      <div>I love tennis. I hate waiting around to play it. This project was born from
        how I imagined a more efficient public facilities system to operate: through the adoption of a reservation-based bookings
        system that would ensure everyone could play exactly when and where they wanted. Happy hitting!
      </div>
      <a href='https://github.com/JackyxCS' target="_blank" rel="noreferrer">
        <button>
          <FontAwesomeIcon icon={faGithub}
            style={{ transform: [{ rotateX: '180deg' }] }}
            size='2x' />
        </button>
      </a>
      <a href='https://www.linkedin.com/in/liujiehao' target="_blank" rel="noreferrer">
        <button>
          <FontAwesomeIcon icon={faLinkedin}
            style={{ transform: [{ rotateX: '180deg' }] }}
            size='2x' />
        </button>
      </a>
    </div>
  )
}

export default AboutMeContainer