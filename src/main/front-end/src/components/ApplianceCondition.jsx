import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import ButtonForFirstPage from "./ButtonForFirstPage.jsx";

const ApplianceCondition = (props) => {
    const [appliance, setAppliance] = useState("");
    const [value, setValue] = useState();
    const [condition, setCondition] = useState();

    const navigate = useNavigate();

    const selectApp = (e)  => {
        document.getElementById("condition").hidden=false
        document.getElementById("num").hidden=false
        setAppliance(e.target.value)
    }

    const setCond = (e)  => {
        document.getElementById("n").disabled=false
        setCondition(e.target.value)
    }

    const Value = (e) => {
        setValue(e.target.value)
    }
   

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(appliance, value, condition);
        navigate('/applianceCondition/conditionResults', {state: {appliance : appliance ,value : value, condition : condition, filename : "applianceCondition", service : "applianceCondition"}})

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
                        <option value="fridgeCombo">FridgeCombo</option>
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
                        <div id = "condition" hidden onChange={setCond}>
                            <p>Select condition</p>
                            <input type="radio" name="cond" value="E"/>
                            <label style={{marginLeft: "20px", marginRight: "20px"}}>Equal</label>

                            <input type="radio"  name="cond" value="L"/>
                            <label style={{marginRight: "20px" , marginLeft: "20px"}}>Less than (exclusive)</label>

                            <input type="radio"  name="cond" value="G"/>
                            <label style={{marginRight: "20px" , marginLeft: "20px"}}>Greater than (exclusive)</label>
                        </div>

                        <div id = "num" hidden >
                        <input type="number" id = "n" disabled className="form-control" placeholder="Give the number"  style={{marginTop: "20px"}} onChange={Value}></input>
                        </div>
                        <button type="submit"  className="button buttons" style={{margin: "0px", padding: "10px", marginTop: "40px"}}>Click to see results</button>
                </form>
        </div>
      </div>
    )
    

}

export default ApplianceCondition