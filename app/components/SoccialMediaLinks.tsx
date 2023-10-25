import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const SocialMediaLinks = () => {
  return (
    <div className='social-media-links my-4 flex justify-center sm:justify-start gap-3 '>
      <Link href='https://www.facebook.com/your-facebook-page'>
        <FontAwesomeIcon icon={faFacebook} style={{color:'#9ca3af', width:'24px',height:'24px', fontSize:'24px'}}  />
      </Link>

      <Link href='https://twitter.com/your-twitter-profile'>
        <FontAwesomeIcon icon={faTwitter} style={{color:'#9ca3af', width:'24px',height:'24px', fontSize:'24px'}} />
      </Link>

      <Link href='https://www.instagram.com/your-instagram-profile'>
        <FontAwesomeIcon icon={faInstagram} style={{color:'#9ca3af', width:'24px',height:'24px', fontSize:'24px'}} />
      </Link>

      <Link href='https://www.linkedin.com/in/your-linkedin-profile'>
        <FontAwesomeIcon icon={faYoutube} style={{color:'#9ca3af', width:'24px',height:'24px', fontSize:'24px'}} />
      </Link>
    </div>
  );
};

export default SocialMediaLinks;
