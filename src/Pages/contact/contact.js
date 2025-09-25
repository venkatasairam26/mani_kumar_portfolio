import './contact.css'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp, FaInstagram } from 'react-icons/fa';
const Contact = () => {
    return (
        <div className="contact container" id="contact">
            <h1>Contact</h1>
            <div className="contact-content">
                <div className="contact-img">
                    <img src="/contact-img.png" alt="contact-img" />
                </div>
                <div className="contact-info">
                <div className="contact-item">
                    <FaMapMarkerAlt className='icon'/>
                    <p>123 Main St, Anytown, USA</p>
                </div>
                <a href="tel:+919177375248" target="_blank" rel="noopener noreferrer" className="contact-item">
                    <FaPhone className='icon'/>
                    <p>+91 9177375248</p>
                </a>
                <a href="mailto:reddymanikumar5248@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-item">
                    <FaEnvelope className='icon'/>
                    <p>reddymanikumar5248@gmail.com</p>
                </a>
                <a href="https://wa.me/919177375248" target="_blank" rel="noopener noreferrer" className="contact-item">
                    <FaWhatsapp className='icon'/>
                    <p> +91 9177375248</p>
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="contact-item">
                    <FaInstagram className='icon'/>
                    <p>@manikumar</p>
                </a>
            </div>
            </div>
        </div>
    )
}
export default Contact
