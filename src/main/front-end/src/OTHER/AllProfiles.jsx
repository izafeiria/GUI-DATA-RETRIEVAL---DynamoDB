import React, {useState, useEffect}  from 'react'
import Service from '../service/Service'
import ButtonForFirstPage from '../components/ButtonForFirstPage'
import Save from '../components/Save'
import SaveIDs from '../components/SaveIDs'
import Highlighter from "react-highlight-words";

function AllProfiles () {
    const [profiles, setProfiles] = useState([])
      useEffect(() => { getProfiles() },  [])

    const getProfiles= () => {

        Service.getProfiles().then((response) => {
            setProfiles(response.data)
            console.log(response);
        
        });
        
    };

    return (
    <div className='first-page'>
        <div className="d-inline-flex flex-row" >
            <ButtonForFirstPage />
            <div className="justify-content-center">
            <h2 className="text-center" style ={{color: '#242b2f', margin:"50px" , marginLeft: "450px",padding: "0px"}}>Installation Models List</h2>
            </div>
            <SaveIDs  data={profiles} filename={"ids.csv"}  />
            <Save  data={profiles} filename={"profiles.csv"}  />
        </div>
        <pre><Highlighter
            highlightClassName="YourHighlightClass"
            searchWords={["installationId"]}
            autoEscape={true}
            textToHighlight={JSON.stringify(profiles, null, 10) } 
        /></pre>
        
       
    </div>

    )
    
}
export default AllProfiles

//<pre style ={{color: '#242b2f'}}>{JSON.stringify(models, null, 2) }</pre>

