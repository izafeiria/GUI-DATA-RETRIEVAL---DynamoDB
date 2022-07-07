import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import ButtonForFirstPage from "./ButtonForFirstPage.jsx";

const Home = (props) => {
    const [attribute, setAttribute] = useState("default");
    const [value, setValue] = useState("default");
    const IDs = ["type", "time" ,"age", "heating","country", "water", "num", "owner", "photo", "space", "occType","postal"];

    const navigate = useNavigate();

    const selectAttr = (e) => {

        setAttribute(e.target.value);

        for (let id of IDs) {
            document.getElementById(id).hidden=true}


        switch(e.target.value){

            case "postalCode":
                return(document.getElementById("postal").hidden=false)

            case "timezone":
                return(document.getElementById("time").hidden=false)

            case "country":
                return(document.getElementById("country").hidden=false)

            case "propertyType":
                return(document.getElementById("type").hidden=false)
                
            case "propertyAge":
                return(document.getElementById("age").hidden=false)
                
            case "ownership":
                return(document.getElementById("owner").hidden=false)

            case "numBedrooms":
                return(document.getElementById("num").hidden=false)

            case "numOccupants":
                return(document.getElementById("num").hidden=false)

            case "occupantType":
                return(document.getElementById("occType").hidden=false)

            case "spaceHeatingType":
                return(document.getElementById("space").hidden=false)


            case "waterHeatingType":
                return(document.getElementById("water").hidden=false)

            case "stoveHeatingType":
                return(document.getElementById("heating").hidden=false)

            case "grillHeatingType":
                return(document.getElementById("heating").hidden=false)

            case "ovenHeatingType":
                return(document.getElementById("heating").hidden=false)

            case "photovoltaic":
                return(document.getElementById("photo").hidden=false)
            default:
        
        }
        
    }

    const selectValue = (e) => {
        setValue(e.target.value)
        console.log(attribute,e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(attribute, value);
        navigate('/home/attributeResults', {state: {attribute : attribute ,value : value, filename : "homeAttribute", service : "home"}})

      };


    return (

        <div className="first-page">
           <div><ButtonForFirstPage /></div>
              <div className="d-flex justify-content-center">
                 <form className="col-sm-4" style={{marginTop: "0px", marginBottom: "200px", padding: "25px", borderRadius: "10px",backgroundColor: "rgb(27, 110, 148, 0.3)"}} onSubmit={handleSubmit} >
                        
                        <h4 className="text-center" style={{marginBottom: "20px"}}  >Home's Attributes</h4>
                        <select className='form-select'  defaultValue="default"  onChange={selectAttr} >
                        <option value="default" disabled > Choose Attribute</option>
                        <option value="postalCode" >Postal Code</option>
                        <option value="timezone" >Timezone</option>
                        <option value="country">Country</option>
                        <option value="propertyType" >Property Type</option>
                        <option value="propertyAge">Property Age</option>
                        <option value="ownership">Ownership</option>
                        <option value="numBedrooms">Number of Bedrooms</option>
                        <option value="numOccupants">Number of Occupants</option>
                        <option value="occupantType">Type of Occupant</option>
                        <option value="spaceHeatingType">Space Heating Type</option>
                        <option value="waterHeatingType">Water Heating Type</option>
                        <option value="stoveHeatingType">Stove Heating Type</option>
                        <option value="grillHeatingType">Grill Heating Type</option>
                        <option value="ovenHeatingType">Oven Heating Type</option>
                        <option value="photovoltaic">Photovoltaic</option>
                        </select>
                        <br/>

                        <div id = "type" hidden  >
                        <select className='form-select' defaultValue="default" onChange={selectValue}>
                        <option value="default" disabled > Select</option>
                        <option value="detached" > Detached</option>
                        <option value="semi-detached">Semi-Detached</option>
                        <option value="bungalow">Bungalow</option>
                        <option value="terraced">Terraced</option>
                        <option value="end-terrace">End-Terrace</option>
                        <option value="flat">Flat</option>
                        </select>
                        </div>

                        <div id = "age" hidden >
                        <select className='form-select' defaultValue="default" onChange={selectValue} >
                        <option value="default" disabled > Select</option>
                        <option value="pre-1919">Pre 1919</option>
                        <option value="1920-1975">1920 - 1975</option>
                        <option value="1976-1999">1976 - 1999</option>
                        <option value="post-2000">Post 2000</option>
                        </select>
                        </div>

                        <div id = "heating" hidden  >
                        <select className='form-select' defaultValue="default" onChange={selectValue} >
                        <option value="default" disabled > Select</option>
                        <option value="gas">Gas</option>
                        <option value="electric">Electric</option>
                        <option value="oil">Oil</option>
                        <option value="other">Other</option>
                        </select>
                        </div>

                        <div id = "space" hidden >
                        <select className='form-select'defaultValue="default" onChange={selectValue} >
                        <option value="default" disabled > Select</option>
                        <option value="gas">Gas</option>
                        <option value="electric-storage">Electric Storage</option>
                        <option value="electric-heaters">Electric Heaters</option>
                        <option value="heat-pump">Heat Pump</option>
                        <option value="oil">Oil</option>
                        <option value="solar">Solar</option>
                        <option value="other">Other</option>
                        </select>
                        </div>

                        <div id = "occType" hidden >
                        <select className='form-select'defaultValue="default" onChange={selectValue} >
                        <option value="default" disabled > Select</option>
                        <option value="students">Students</option>
                        <option value="working-adults">Working Adults</option>
                        <option value="home-adults">Home Adults</option>
                        <option value="young-family">Young Family</option>
                        <option value="older-family">Older Family</option>
                        <option value="retirees">Retirees</option>
                        </select>
                        </div>

                        <div id = "water" hidden >
                        <select className='form-select' defaultValue="default" onChange={selectValue} >
                        <option value="default" disabled > Select</option>
                        <option value="gas">Gas</option>
                        <option value="electric">Electric</option>
                        <option value="oil">Oil</option>
                        <option value="solar">Solar</option>
                        <option value="other">Other</option>
                        </select>
                        </div>

                        <div id = "num" hidden>
                        <input type="number" className="form-control" placeholder="Give the number"  style={{marginTop: "20px"}} onChange={selectValue}></input>
                        </div>

                        <div id = "time" hidden>
                        <input type="text" className="form-control" placeholder="Type the timezone (eg. Europe/Berlin)" style={{marginTop: "20px"}} onChange={selectValue}></input>
                        </div>

                        <div id = "postal" hidden>
                        <input type="text" className="form-control" placeholder="Type the postal code (eg. 01945)" style={{marginTop: "20px"}} onChange={selectValue}></input>
                        </div>

                        <div id = "country" hidden>
                        <input type="text" className="form-control" placeholder="Type the desired country (eg. DE)" style={{marginTop: "20px"}} onChange={selectValue}></input>
                        </div>

                        <div id = "owner" hidden onChange={selectValue}>
                            <p >Choose Ownership</p>
                            <input type="radio" name="ownership" value="Owner"/>
                            <label style={{marginLeft: "20px", marginRight: "20px"}}>Owner</label>

                            <input type="radio"  name="ownership" value="Rental"/>
                            <label style={{marginRight: "20px" , marginLeft: "20px"}}>Rental</label>
                        </div>

                        <div id = "photo" hidden onChange={selectValue}>
                            <input type="radio" name="photo" value="true"/>
                            <label style={{marginLeft: "20px", marginRight: "20px"}} >Yes</label>

                            <input type="radio"  name="photo" value="false"/>
                            <label style={{marginRight: "20px" , marginLeft: "20px"}} >No</label>
                        </div>
                        <button type="submit" className="button buttons" style={{margin: "0px", padding: "10px", marginTop: "40px"}}>Click to see results</button>
                </form>
        </div>
      </div>
    )

}
export default Home