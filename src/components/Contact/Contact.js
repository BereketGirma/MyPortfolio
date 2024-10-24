import './Contact.css'
const Contact = () => {
    const handleClick = (event) => {
        event.preventDefault();
        window.location.href = 'mailto:bereketgirma002@gmail.com';
    };
    
    return(
        <div className="contact-container" id ="contact">
            <div className="contact">
                <div className="title"><h1>Contact Me</h1></div>
                <div className="title-line"></div>
            </div>

            <div className="contact-content">
                <div className="contact-description">
                    <p>I am actively seeking new internship opportunities in software engineering. With a strong background in software development, problem-solving, and team collaboration, I am eager to contribute my skills to a dynamic team. Feel free to reach out to me at bereketgirma002@gmail.com </p>
                </div>

                <button className="contact-button" onClick={handleClick}>Say Hello!</button>
            </div>
        </div>
    )
}
export default Contact;