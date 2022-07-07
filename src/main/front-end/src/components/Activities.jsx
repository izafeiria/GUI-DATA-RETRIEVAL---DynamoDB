import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import ButtonForFirstPage from "./ButtonForFirstPage.jsx";

const Activities = (props) => {
    const [activity, setActivity] = useState("");

    const navigate = useNavigate();

    const selectActivity = (e)  => {
        setActivity(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(activity);
        navigate('/activities/activitiesResults', {state: {activity : activity ,filename : "activities", service : "activity"}})
      };

    return (    
        
        
            <div className="first-page">
            <div><ButtonForFirstPage /></div>
            <div className="d-flex justify-content-center">
                <form className="col-sm-4" style={{marginTop: "0px", marginBottom: "200px", padding: "25px", borderRadius: "10px",backgroundColor: "rgb(27, 110, 148, 0.3)"}} onSubmit={handleSubmit} >
                
                <h4 className="text-center" style={{marginBottom: "20px"}}  >Activities Existence</h4>
                        <select className='form-select'  defaultValue="default"  onChange={selectActivity} >
                        <option value="default" disabled > Choose Activity</option>

                        <option value="Refrigeration" >Refrigeration</option>
                        <option value="Entertainment" >Entertainment</option>
                        <option value="Laundry">Laundry</option>
                        <option value="Cooking" >Cooking</option>
                        <option value="waterHeating">Water Heating</option>
                        <option value="spaceHeating">Space Heating</option>
                        <option value="electricVehicle">Electric Vehicle </option>
                        <option value="poolSauna">Pool or Sauna </option>
                        <option value="other">Other</option>
                        </select>
                        <br/>
                        <p className="text-center" style={{marginTop: "30px"}}>Returns installation profiles which have provided at least one appliance of the selected activity.</p>

                        <button type="submit" className="button buttons" style={{margin: "0px", padding: "10px", marginTop: "40px"}}>Click to see results</button>
                </form>
        </div>
        </div>
)


}
export default Activities