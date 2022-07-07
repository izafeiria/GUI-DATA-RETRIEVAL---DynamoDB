import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import ButtonForFirstPage from "./ButtonForFirstPage.jsx";

const Appliance = (props) => {
    const [appliance, setAppliance] = useState("");
    const [exist, setExist] = useState();
    const [app2, setApp2] = useState("");
    const [exist2, setExist2] = useState();

    const navigate = useNavigate();

    const selectApp = (e)  => {
        document.getElementById("exist").hidden=false
        setAppliance(e.target.value)
    }

    const selectValue = (e) => {
        setExist(e.target.value)
        document.getElementById("app2").hidden=false
    }

    const selectApp2 = (e)  => {
        document.getElementById("exist2").hidden=false
        setApp2(e.target.value)
    }

    const selectExist2 = (e) => {
        setExist2(e.target.value)
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(appliance, exist, app2, exist2);
        navigate('/appliance/existenceResults', {state: {appliance : appliance ,exist : exist,app2 : app2, exist2: exist2 ,filename : "applianceExistence", service : "appliance"}})
      };

    return (

        <div className="first-page">
           <div><ButtonForFirstPage /></div>
              <div className="d-flex justify-content-center">
                 <form className="col-sm-4" style={{marginTop: "0px", marginBottom: "200px", padding: "25px", borderRadius: "10px",backgroundColor: "rgb(27, 110, 148, 0.3)"}} onSubmit={handleSubmit} >
                 
                 <h4 className="text-center" style={{marginBottom: "20px"}}  >Appliances</h4>
                        <select className='form-select'  defaultValue="default"  onChange={selectApp} >
                        <option value="default" disabled > Choose Appliance</option>

                        <option value="refrigerator" >Refrigerator</option>
                        <option value="freezer" >Freezer</option>
                        <option value="fridgeCombo">Fridge Combo</option>
                        <option value="oven" >Oven</option>
                        <option value="grill">Grill</option>
                        <option value="hob">Hob</option>
                        <option value="microwave">Microwave </option>
                        <option value="kettle">Kettle </option>
                        <option value="toaster">Toaster</option>
                        <option value="stove">Stove</option>
                        <option value="waterBoiler">Water Boiler</option>
                        <option value="heatPump">Heat Pump</option>
                        <option value="dishWasher">Dish Washer</option>
                        <option value="washingMachine">Washing Machine</option>
                        <option value="tumbleDrier">Tumble Dryer</option>
                        <option value="iron">Iron</option>
                        <option value="TV">TV</option>
                        <option value="dvd">DVD</option>
                        <option value="cableBox">Cable Box</option>
                        <option value="gameConsole">Game Console</option>
                        <option value="computer">Computer</option>
                        <option value="tablet">Tablet</option>
                        <option value="electricShower">Electric Shower</option>
                        <option value="electricVehicle">Electric Vehicle</option>
                        <option value="poolPump">Pool Pump</option>
                        <option value="sauna">Sauna</option>
                        <option value="swimmingPool">Swimming Pool</option>
                        <option value="airCondition">Air Condition</option>
                        <option value="immersionHeater">Immersion Heater</option>

                        </select>
                        <br/>

                        <div id = "exist" hidden onChange={selectValue}>
                            <input type="radio" name="exist" value="true"/>
                            <label style={{marginLeft: "20px", marginRight: "20px"}}>Exist</label>

                            <input type="radio"  name="exist" value="false"/>
                            <label style={{marginRight: "20px" , marginLeft: "20px"}}>Not exist</label>
                        </div>
                        <br/>
                        <br/>

                        <div id="app2" hidden>
                        <select className='form-select'  defaultValue="default"  onChange={selectApp2} >
                        <option value="default" disabled > Choose Appliance</option>

                        <option value="refrigerator" >Refrigerator</option>
                        <option value="freezer" >Freezer</option>
                        <option value="fridgeCombo">Fridge Combo</option>
                        <option value="oven" >Oven</option>
                        <option value="grill">Grill</option>
                        <option value="hob">Hob</option>
                        <option value="microwave">Microwave </option>
                        <option value="kettle">Kettle </option>
                        <option value="stove">Stove</option>
                        <option value="waterBoiler">Water Boiler</option>
                        <option value="heatPump">Heat Pump</option>
                        <option value="toaster">Toaster</option>
                        <option value="dishWasher">Dish Washer</option>
                        <option value="washingMachine">Washing Machine</option>
                        <option value="tumbleDrier">Tumble Dryer</option>
                        <option value="iron">Iron</option>
                        <option value="TV">TV</option>
                        <option value="dvd">DVD</option>
                        <option value="cableBox">Cable Box</option>
                        <option value="gameConsole">Game Console</option>
                        <option value="computer">Computer</option>
                        <option value="tablet">Tablet</option>
                        <option value="electricShower">Electric Shower</option>
                        <option value="electricVehicle">Electric Vehicle</option>
                        <option value="poolPump">Pool Pump</option>
                        <option value="sauna">Sauna</option>
                        <option value="swimmingPool">Swimming Pool</option>
                        <option value="airCondition">Air Condition</option>
                        <option value="immersionHeater">Immersion Heater</option>

                        </select>
                        <br/>

                        <div id = "exist2" hidden onChange={selectExist2}>
                            <input type="radio" name="exist2" value="true"/>
                            <label style={{marginLeft: "20px", marginRight: "20px"}}>Exist</label>

                            <input type="radio"  name="exist2" value="false"/>
                            <label style={{marginRight: "20px" , marginLeft: "20px"}}>Not exist</label>
                        </div>
                        </div>

                 
                 <button type="submit" className="button buttons" style={{margin: "0px", padding: "10px", marginTop: "40px"}}>Click to see results</button>
                </form>
        </div>
      </div>
    )

}

export default Appliance
