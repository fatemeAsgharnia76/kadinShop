import './socialMediaIcons.css'
import Wrapper from '../hoc/Wrapper'
import { faTwitter,faInstagram,faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SocialMediaIcons(props) {
    return (
        <Wrapper>
            <FontAwesomeIcon className="nav-smIcons" style={props.style} icon={faInstagram} />  
            <FontAwesomeIcon className={`nav-smIcons ${props.className}`} style={props.style} icon={faFacebookF} />  
            <FontAwesomeIcon className="nav-smIcons"  style={props.style}  icon={faTwitter}  />
        </Wrapper>
    )
}
