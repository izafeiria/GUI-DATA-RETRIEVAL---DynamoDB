import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//import Dropdown from 'react-multilevel-dropdown';

const FirstPage = (props) => {
    const navigate = useNavigate();

    const Profiles = () => {
        navigate('/profiles',{state: { filename : "profiles", service : "profile"}})
    }

    const Home = () => {
        navigate('/home');
    }

    const Appliance = () => {
        navigate('/appliance');
    }

    const ApplianceCondition = () => {
        navigate('/applianceCondition')
    }

    const HMexist = () => {
        navigate('/homeApplianceExistence');
    }

    const HMcondition = () => {
        navigate('/homeApplianceCondition')
    }
    const Activities = () => {
        navigate('/activities')
    }
    


    return (
        <div className='first-page'>

                <div className = "container" style={{textAlign:"center"}}>
                <button  className="btn btn-secondary" style = {{margin: "20px", padding: "15px", borderRadius: "20px"}} onClick={Profiles}>All Profiles</button>
                <h4 style={{color:"#23779f"}}>For specific Data Requests select from below options..</h4>
                
                <br></br>
                <br></br>

                <div className="container">
                <h1 style={{margin:"20px" , color:"#23779f", marginTop: "100px"}}> </h1>
                
                <br></br>

                <button className="button buttons" style={{marginLeft: "50px"}}  onClick={Home}>Home's attribute</button>
                <button className="button buttons" style={{marginLeft: "50px"}} onClick={Appliance}>Appliance's existence</button>
                <button className="button buttons" style={{marginLeft: "50px"}} onClick={ApplianceCondition}>Appliance's condition</button>
                <button className="button buttons" style={{marginLeft: "50px"}} onClick={Activities}>Activities</button>
                <button className="button buttons" style={{marginLeft: "50px"}} onClick={HMexist}>Home's attribute & Appliance's Existence</button>
                <button className="button buttons" style={{marginLeft: "50px"}} onClick={HMcondition}>Home's attribute & Appliance's Condition</button>
{/* 
                <Dropdown title="Home & Appliances" className="button buttons"> 
                <Dropdown.Item >Appliance's Existence</Dropdown.Item>
                <Dropdown.Item>Appliance's Condition(equal, lt, gt)  </Dropdown.Item>
                </Dropdown> */}

                
                </div>
                </div>  
        </div>
    )
    
}

export default FirstPage
