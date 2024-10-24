import './Certificate.css';
import {React,useState,useEffect} from 'react';

const Certificate = () => {

    const [activeTab, setActiveTab] = useState('');
    const handleTabClick = (tabId) => {
        setActiveTab(tabId)
    }

    useEffect(() => {
        setActiveTab('test1');
    },[]);
    return(
        <div className="certificate-container">
            <h1 className="certificate-title">Certificates</h1>
            <div className="certificate-box">
                <div className="certificate one">
                    <p>MavPASS PHYS-211</p>
                    <img 
                        src = {require("../../assets/Images/Certificate Images/MavPASS-PHYS211.jpg")} 
                        alt = "Not found" 
                    />
                </div>
                
                <div className="certificate two">
                    <p>MavPASS CIS-121</p>
                    <img 
                        src = {require("../../assets/Images/Certificate Images/MavPASS-CIS121.jpg")} 
                        alt = "Not Found"
                    />
                </div>
                        
                <div className="certificate three">
                    <p>CodePath AND-101</p>
                    <img 
                        src = {require("../../assets/Images/Certificate Images/CodePath-AND101-Certificate.jpg")} 
                        alt = "Not Found"
                    />
                </div>

                {/* mobile version for tabs */}
                <div id = "mobile" className='tabs'>
                    <button 
                        className={`tabLinks ${activeTab === 'test1' ? 'active':''}`}
                        onClick={() => handleTabClick('test1')}>
                        CodePath
                    </button>
                    <button 
                        className={`tabLinks ${activeTab === 'test2' ? 'active':''}`} 
                        onClick={() => handleTabClick('test2')}>
                        MavPASS-1
                    </button>
                    <button 
                        className={`tabLinks ${activeTab === 'test3' ? 'active':''}`} 
                        onClick={() => handleTabClick('test3')}>
                        MavPASS-2
                    </button>
                </div>

                <div className='tabcontent'>
                    {activeTab === 'test1' && (
                        <div className='image'>
                            <h3>CodePath AND-101</h3>
                            <img 
                                src = {require("../../assets/Images/Certificate Images/CodePath-AND101-Certificate.jpg")} 
                                alt = "Not found" 
                            /> 
                        </div>
                    )}

                    {activeTab === 'test2' && (
                        <div className='image'>
                            <h3>MavPASS CIS-121</h3>
                            <img 
                                src = {require("../../assets/Images/Certificate Images/MavPASS-CIS121.jpg")} 
                                alt = "Not found" 
                            />
                        </div>
                    )}

                    {activeTab === 'test3' && (
                        <div className='image'>
                            <h3>MavPASS PHYS-211</h3>
                            <img 
                                src = {require("../../assets/Images/Certificate Images/MavPASS-PHYS211.jpg")} 
                                alt = "Not found" 
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
export default Certificate;