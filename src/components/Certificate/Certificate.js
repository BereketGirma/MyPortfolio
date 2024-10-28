import './Certificate.css';
import {React,useState,useEffect} from 'react';
import { certificateContent } from '../../data/certificateContent';

const Certificate = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1 + certificateContent.length) % certificateContent.length)
    }

    const handlePrevious = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + certificateContent.length) % certificateContent.length)
    }

    useEffect(() => {
        const interval = setInterval(handleNext, 3000)
        return () => clearInterval(interval)
    })

    return(
        <div className="certificate-container">
            <h1 className="certificate-title">Certificates</h1>
            <div className="certificate-box">
                <div className="certificate-info">
                    <h3>{certificateContent[activeIndex].title}</h3>
                </div>
                
                {certificateContent.map((cert, index) => (
                    <img
                        key={index}
                        src={cert.imgSrc}
                        alt={cert.title}
                        className={`certificate-image ${activeIndex === index ? 'active' : ''}`}
                    />
                ))}
                

                <div className='slideshow-navigation'>
                    <button onClick={handlePrevious}>&lt; Previous</button>
                    <button onClick={handleNext}>Next &gt;</button>
                </div>
            </div>
        </div>
    )
}
export default Certificate;