import './Contact.css'
import { contactContent } from '../../data/contactContent'; 
const Contact = () => {
    const handleEmailClick = (event) => {
        event.preventDefault();
        window.location.href = 'mailto:bereketgirma002@gmail.com';
    };
    
    return(
        <div className="contact-container">
            <div className="contact">
                <div className="contact-title"><h1>Contact Me</h1></div>
                <div className="contact-title-line"></div>
            </div>

            <div className="contact-content">
                <div className="contact-description">
                    <p>
                        {contactContent.desciption}
                        <span><u onClick={handleEmailClick}>{contactContent.email}</u></span>
                    </p>

                </div>

                <button className="contact-button" onClick={handleEmailClick}>Say Hello!</button>
            </div>
        </div>
    )
}
export default Contact;