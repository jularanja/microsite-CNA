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
      <Link href='https://www.facebook.com/SistemaCNA'>
        <FontAwesomeIcon icon={faFacebook} className='hover:opacity-50' style={{color:'#9ca3af', width:'24px',height:'24px', fontSize:'24px'}}  />
      </Link>

      <Link href='https://twitter.com/SistemaCNA'>
        <FontAwesomeIcon icon={faTwitter} className='hover:opacity-50' style={{color:'#9ca3af', width:'24px',height:'24px', fontSize:'24px'}} />
      </Link>

      <Link href='https://www.instagram.com/sistemacna/'>
        <FontAwesomeIcon icon={faInstagram} className='hover:opacity-50' style={{color:'#9ca3af', width:'24px',height:'24px', fontSize:'24px'}} />
      </Link>

      <Link href='https://www.youtube.com/c/agrofortebrasilforte'>
        <FontAwesomeIcon icon={faYoutube} className='hover:opacity-50' style={{color:'#9ca3af', width:'24px',height:'24px', fontSize:'24px'}} />
      </Link>
    </div>
  );
};

export default SocialMediaLinks;
