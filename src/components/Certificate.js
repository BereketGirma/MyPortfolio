import './Certificate.css';
const Certificate = () => {
    return(
        <div className="certificate-container">
            <h1 className="certificate-title">Certificates</h1>
            <div className="certificate-box">
                <div className="certificate one">
                    <p>MavPASS PHYS-211</p>
                    <img 
                        src = {require("./Images/Certificate Images/MavPASS-PHYS211.jpg")} 
                        alt = "Not found" 
                    />
                </div>
                
                <div className="certificate two">
                    <p>MavPASS CIS-121</p>
                    <img 
                        src = {require("./Images/Certificate Images/MavPASS-CIS121.jpg")} 
                        alt = "Not Found"
                    />
                </div>
                        
                <div className="certificate three">
                    <p>CodePath AND-101</p>
                    <img 
                        src = {require("./Images/Certificate Images/CodePath-AND101-Certificate.jpg")} 
                        alt = "Not Found"
                    />
                </div>
            </div>
        </div>
    )
}
export default Certificate;