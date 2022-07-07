import React, {useState, useEffect}  from 'react'
import Service from '../service/Service'
import {useLocation} from 'react-router-dom';
import ButtonForFirstPage from './ButtonForFirstPage';
import Save from './Save';
import Highlighter from "react-highlight-words";
import SaveIDs from './SaveIDs';

function Results ({navigation}) {
    const [results, setResults] = useState([])
    const location = useLocation()
    

    useEffect(() => {
        getResults()})
    
    const getResults = () => {
        console.log(location.state)

        switch(location.state.service){

            case "home":
                Service.getHomeAttribute(location.state).then((response) => {
                    setResults(response.data)
                    console.log(response.data)})
                    break
            case "appliance":
               
                Service.getApplianceExistence(location.state).then((response) => {
                    setResults(response.data)
                    console.log(response.data)})
                    break
            case "applianceCondition":
                Service.getApplianceCondition(location.state).then((response) => {
                    setResults(response.data)
                    console.log(response.data)})
                    break
            case "activity":
                Service.activity(location.state).then((response) => {
                    setResults(response.data)
                    console.log(response.data)})
                break
            case "profile":
                Service.getProfiles().then((response) => {
                    setResults(response.data)
                    console.log(response.data)})
                break
            case "HM1":
                Service.homeApplianceExist(location.state).then((response) => {
                    setResults(response.data)
                    console.log(response.data)})
                break
            case "HM2":
                Service.homeApplianceCondition(location.state).then((response) => {
                    setResults(response.data)
                    console.log(response.data)})
                break
            default:
                }
            }


    return (
    <div className=' first-page '>
        <div className="d-inline-flex flex-row" >
            <ButtonForFirstPage />
            <div className='d-inline-flex justify-content-center '>
            <h2 className="text-center " style ={{color: '#242b2f', margin:"50px" , marginLeft: "400px",padding: "0px"}}>Appliance's Characteristics List</h2>
            </div>
            <SaveIDs data={results} filename={"IDs.csv"} />
            <Save  data={results} filename={location.state.filename}/>
            </div>
            <pre><Highlighter
            highlightClassName="YourHighlightClass"
            searchWords={["installationId"]}
            autoEscape={true}
            textToHighlight={JSON.stringify(results, null, 10) } /></pre>
    </div>

    )
    
}

export default Results